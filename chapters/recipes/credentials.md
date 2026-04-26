---
title: "Credentials"
description: "Git recipes for storing and managing credentials — credential helpers (cache, store, manager), HTTPS tokens, SSH keys, and security considerations."
section: "playbook/credentials"
order: 94
---

## Credentials

Every time you push to or pull from a remote over HTTPS, Git needs to
authenticate you. By default, it asks for your username and password
(or token) on every operation. Credential helpers let you store these
credentials so you do not have to type them each time.

For SSH-based authentication, see [SSH Setup](../ssh-setup/).

### HTTPS vs SSH

| | HTTPS | SSH |
|---|---|---|
| Setup | Simple — works immediately | Requires key generation and registration |
| Authentication | Username + token (or password) | Private key on your machine |
| Credential storage | Via credential helpers (below) | SSH agent holds the key in memory |
| Firewall-friendly | Yes — uses port 443 | May be blocked on port 22 |

HTTPS is easier to start with. SSH avoids credential prompts entirely
once configured. Most developers use SSH for repositories they work
with regularly, and HTTPS for quick one-off clones.

### Credential helpers

A credential helper is a program that stores your credentials so Git
can retrieve them automatically. Git ships with two built-in helpers
and supports external ones.

#### cache

Stores credentials in memory for a limited time (default: 15 minutes).
Nothing is written to disk.

```text
$ git config --global credential.helper cache

# extend to 1 hour (3600 seconds)
$ git config --global credential.helper 'cache --timeout=3600'
```

Best for: shared machines where you do not want credentials on disk.

#### store

Saves credentials in a plaintext file (`~/.git-credentials`). They
persist across reboots but are **not encrypted** — anyone with access
to your home directory can read them.

```text
$ git config --global credential.helper store
```

After the next successful authentication, Git writes the credentials:

```text
$ cat ~/.git-credentials
https://username:ghp_abc123token@github.com
```

Best for: personal machines where convenience matters more than
maximum security. Acceptable when the machine has full-disk encryption.

#### Git Credential Manager

[Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager)
(GCM) is an external helper that stores credentials in your operating
system's secure storage — Windows Credential Manager, macOS Keychain,
or Linux Secret Service.

```text
$ git config --global credential.helper manager
```

GCM is included with Git for Windows by default. On macOS and Linux,
install it separately. It supports multi-factor authentication and
OAuth flows for GitHub, GitLab, Bitbucket, and Azure DevOps.

Best for: most developers — encrypted storage, cross-platform, handles
modern authentication flows.

### Check your current helper

```text
$ git config --global credential.helper
manager
```

If this returns nothing, no helper is configured and Git will prompt
every time.

### HTTPS personal access tokens

GitHub, GitLab, and Bitbucket no longer accept account passwords for
HTTPS Git operations. You need a **personal access token** (PAT)
instead.

To create one on GitHub:

1. Go to **Settings > Developer settings > Personal access tokens > Tokens (classic)**
2. Click **Generate new token**
3. Select scopes — `repo` is enough for push/pull
4. Copy the token — you will not see it again

Use the token as your password when Git prompts:

```text
$ git push origin main
Username: your-username
Password: ghp_abc123...   ← paste the token here
```

If you have a credential helper configured, Git stores the token
after the first successful use.

### Security considerations

| Helper | Storage | Risk |
|--------|---------|------|
| cache | Memory only, expires | Low — gone after timeout or reboot |
| store | Plaintext file on disk | High — readable by anyone with file access |
| manager (GCM) | OS encrypted keychain | Low — protected by OS-level security |

Recommendations:

- **Never commit credentials** to a repository — not in code, not in
  config files, not in `.env` files that are tracked
- **Prefer GCM or SSH** over the plaintext `store` helper
- **Rotate tokens regularly** — treat them like passwords
- **Use the minimum scope** when creating tokens — `repo` is enough
  for most workflows
- **Revoke tokens immediately** if a machine is lost or compromised

### Gotchas

- **`store` keeps credentials in plaintext.** If you switch from
  `store` to `manager`, delete `~/.git-credentials` to remove the
  old plaintext file.
- **Credential helpers are per-protocol.** An HTTPS helper does not
  affect SSH authentication, and vice versa.
- **Multiple helpers can conflict.** If Git behaves unexpectedly,
  check for stacked helpers: `git config --global --get-all credential.helper`.
- **Tokens expire.** If pushes suddenly fail with 401 errors, your
  token may have expired — generate a new one.

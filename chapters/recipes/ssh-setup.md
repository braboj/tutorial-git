---
title: "SSH Setup"
description: "How to generate an SSH key, add it to the SSH agent, register it with GitHub, and switch a remote from HTTPS to SSH."
section: "playbook/ssh-setup"
order: 91
---

## SSH Setup

SSH authentication lets you push and pull without entering your
password every time. It uses a key pair — a private key on your
machine and a public key registered with your Git host.

### 1. Generate a key

```text
$ ssh-keygen -t ed25519 -C "you@example.com"
```

Accept the default file location (`~/.ssh/id_ed25519`). Set a
passphrase for extra security, or press Enter to skip.

### 2. Start the SSH agent and add the key

```text
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_ed25519
```

On macOS, add `--apple-use-keychain` to persist the key across
reboots.

### 3. Register the public key with GitHub

Copy the public key to your clipboard:

```text
$ cat ~/.ssh/id_ed25519.pub
```

Then go to **GitHub > Settings > SSH and GPG Keys > New SSH Key**,
paste the key, and save.

### 4. Verify the connection

```text
$ ssh -T git@github.com
```

You should see a message like "Hi username! You've successfully
authenticated."

### 5. Switch an existing remote from HTTPS to SSH

```text
$ git remote set-url origin git@github.com:<user>/<repo>.git
```

### Troubleshooting

- **Permission denied (publickey)** — the agent does not have the
  key loaded. Run `ssh-add` again.
- **Wrong key used** — if you have multiple keys, create an
  `~/.ssh/config` entry to map the host to the correct key file.
- **Firewall blocks port 22** — use SSH over HTTPS port:
  `ssh -T -p 443 git@ssh.github.com`.

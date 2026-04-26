---
title: "Git LFS"
description: "Git recipes for tracking large files with Git Large File Storage — setup, tracking, common operations, hosting limits, and gotchas."
section: "playbook/lfs"
order: 95
---

## Git Large File Storage

Git stores every version of every file as a blob. For large binary
files — images, videos, datasets, compiled assets — this causes the
repository to grow quickly. Cloning becomes slow, and every developer
downloads the full history of every large file whether they need it
or not.

**Git LFS** (Large File Storage) solves this by replacing large files
with small **pointer files** in the repository. The actual file content
is stored on a separate LFS server. Git downloads large files only
when you check out a commit that needs them.

### How it works

```text
Without LFS:
  .git/objects/ contains every version of every large file
  repo size grows with each commit that touches a large file

With LFS:
  .git/objects/ contains small pointer files (~130 bytes each)
  large file content lives on the LFS server
  Git downloads only the versions you check out
```

A pointer file looks like this:

```text
version https://git-lfs.github.com/spec/v1
oid sha256:4d7a214614ab2935c943f9e0ff69d22eadbb8f32b1258daaa5e2ca24d17e2393
size 12345678
```

Git LFS intercepts `push`, `pull`, and `checkout` to upload and
download the real content transparently.

### Setup

Install Git LFS (once per machine):

```text
$ git lfs install
Updated git hooks.
Git LFS initialized.
```

This adds LFS hooks to your global Git configuration. The hooks
intercept Git operations to handle large files automatically.

### Track files by pattern

Tell LFS which files to manage using glob patterns:

```text
$ git lfs track "*.psd"
$ git lfs track "*.zip"
$ git lfs track "assets/videos/**"
```

Each `track` command adds a line to `.gitattributes`:

```text
$ cat .gitattributes
*.psd filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
assets/videos/** filter=lfs diff=lfs merge=lfs -text
```

Commit `.gitattributes` so other developers get the same LFS rules:

```text
$ git add .gitattributes
$ git commit -m "Track large files with LFS"
```

### Common operations

#### Push

LFS uploads tracked files to the LFS server automatically during
`git push`:

```text
$ git push origin main
Uploading LFS objects: 100% (3/3), 45 MB | 2.1 MB/s, done.
```

#### Pull and fetch

`git pull` downloads LFS files for the current checkout. To download
LFS content without merging:

```text
$ git lfs fetch              # download LFS objects for current ref
$ git lfs fetch --all        # download LFS objects for all refs
$ git lfs pull               # fetch + checkout (update working tree)
```

#### Check tracked files

```text
$ git lfs ls-files           # list all LFS-tracked files in the repo
$ git lfs status             # show pending LFS uploads
```

### Migrate existing files to LFS

If large files are already in the repository history, use `migrate`
to rewrite history and move them to LFS:

```text
# Migrate all .zip files in the entire history
$ git lfs migrate import --include="*.zip" --everything

# Migrate only in the current branch
$ git lfs migrate import --include="*.zip"
```

This rewrites commits, so coordinate with your team and force-push
afterward.

### Hosting support

| Host | Free LFS storage | Free bandwidth/month |
|------|-------------------|---------------------|
| GitHub | 1 GB | 1 GB |
| GitLab | 5 GB (project) | Unlimited (self-managed) |
| Bitbucket | 1 GB | 5 GB |

All three hosts offer paid plans for additional storage and bandwidth.
Self-hosted GitLab and Bitbucket have configurable limits.

### Gotchas

- **LFS requires server support.** The remote must have an LFS
  endpoint. All major hosts support it, but a plain bare repository
  on a file server does not.
- **Cloning without LFS installed gives you pointer files.** If a
  developer clones without Git LFS installed, they get the small
  pointer text instead of the actual files. Run `git lfs pull` after
  installing LFS to fix this.
- **CI pipelines need LFS.** If your CI runner does not have Git LFS,
  builds that depend on tracked files will fail. Most CI platforms
  support LFS — check that `git lfs install` runs before checkout.
- **Forks do not share LFS storage.** On GitHub, each fork has its
  own LFS quota. Large LFS repositories can be expensive to fork.
- **Bandwidth counts on download.** Every `git clone`, `git fetch`,
  or `git lfs pull` that downloads LFS objects counts against the
  bandwidth quota.
- **You cannot un-track a file retroactively.** Removing a pattern
  from `.gitattributes` only affects future commits. Existing LFS
  pointers in history stay as pointers.

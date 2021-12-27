# Git Commands

    $ git init --bare --shared=all test.git
    $ git init
    $ echo 123 > test.txt
    $ git add  *
    $ git commit -m 'First commit'
    $ git remote add origin ./test.git
    $ git remote add upstreadm ./test.git
    $ git push origin master

# Git Objets

#### 1. Get the 5 last logs

    $ git log -5 --oneline 
    a6cc877 (HEAD -> master) [#####] - Name refactoring of some assets;
    d5d064a (origin/master, origin/HEAD) [#####] - Cheat sheet added to assets;
    269a11d [#####] - New asset;
    4b760d2 [#####] - Git branching model;
    d80d7b0 Initial commit


#### 2. Get the long hash

    $ git rev-parse a6cc877
    a6cc8772b152ab7c2e40fd87dc944eab3ffb1e7d

#### 3. Got to the .git directory and show content with dir

    $ cd .git
    $ dir
    Mode                 LastWriteTime         Length Name
    d-----      8.12.2021 г.     10:50                hooks
    d-----      8.12.2021 г.     10:50                info
    d-----      8.12.2021 г.     10:50                logs
    d-----      8.12.2021 г.     14:41                objects
    d-----      8.12.2021 г.     10:50                refs

#### 4. Show the commit object using the hash
The first two digits are the directory, last digits the compressed file.

    $ cd objects
    $ dir
    Mode                 LastWriteTime         Length Name
    ----                 -------------         ------ ----
    d-----      8.12.2021 г.     12:00                26
    d-----      8.12.2021 г.     10:52                33
    d-----      8.12.2021 г.     10:53                39
    d-----      8.12.2021 г.     13:55                3b
    d-----      8.12.2021 г.     10:50                info
    d-----      8.12.2021 г.     10:50                pack

    $ cd a6 
    $ dir

    Mode                 LastWriteTime         Length Name
    ----                 -------------         ------ ----
    -ar---      8.12.2021 г.     13:55            181 cc8772b152ab7c2e40fd87dc944eab3ffb1e7d


#### 5. Decompress the commit object using the short or long hash

    $ git cat-file -p a6cc877
    tree 3b9ab3a0ee2124dd51d91161ab18c284c279c927
    parent d5d064a947ac9df07ed2113768f6ae894e102c0f
    author braboj <braboj@googlemail.com> 1638964501 +0200
    committer braboj <braboj@googlemail.com> 1638964501 +0200

## Migrate to another remote repository
https://rushabhshah065.medium.com/lets-move-repository-from-bitbucket-to-github-with-all-branches-and-commits-f93c7d3bda67

## Push to several remote repositories
https://jigarius.com/blog/multiple-git-remote-repositories#:~:text=Register%202nd%20push%20URL,with%20git%20fetch%20%2D%2Dall%20.
https://gist.github.com/rvl/c3f156e117e22a25f242

```
git remote set-url --add --push origin "httos://github.com/braboj/git-tutorial.git"
git remote set-url --add --push origin "https://gitlab.com/braboj/git-tutorial.git"
```
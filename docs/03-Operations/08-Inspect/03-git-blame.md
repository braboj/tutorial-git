[**Up**](../08-Inspect/inspect.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git blame

Display useful information about a line in a file using the last revision which modified it. 

-------------------------------------------------------------------------------
### Syntax
```
$ git blame file [<options>]
 
# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-e                  : Show authors e-mail
-L <start, end>     : Show info about a range of lines
-L :<regexp>        : Show info about lines containing <regexp> 
-M                  : Detect lines moved or copied in the same file
-C                  : Detect Lines copied from another file
--show-stats        : Additional statistics
```

-------------------------------------------------------------------------------
### Examples
```shell

# Show who worked on the README.md file
$ git blame README.md
7d3599a4 (braboj 2021-12-28 18:15:50 +0200  1) <p align='center'>
f314470b (braboj 2022-01-13 13:50:15 +0200  2)  <img src='Assets/banners/banner-bhai-branko.png' />
7d3599a4 (braboj 2021-12-28 18:15:50 +0200  3) </p>
4166563a (braboj 2021-12-28 12:49:54 +0200  4)
1f8716a4 (braboj 2022-01-11 12:26:13 +0200  5) ## Table of contents
4166563a (braboj 2021-12-28 12:49:54 +0200  6)
30a3d973 (braboj 2021-12-28 18:07:38 +0200  7) ### Introduction
3b7217de (braboj 2022-01-12 14:45:49 +0200  8) - [Overview](/01-Introduction/(tut-git-01-01)-git-features.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200  9) - [Installation for Windows](/01-Introduction/(tut-git-01-02)-windows-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 10) - [Installation for Linux](/01-Introduction/(tut-git-01-03)-linux-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 11) - [Hosting Services](/01-Introduction/(tut-git-01-04)-hosting-services.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 12) - [Dataflow Diagram](01-Introduction/(tut-git-01-05)-dataflow-overview.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 13) - [Operations Overview](01-Introduction/(tut-git-01-06)-operations-overview.md)
9b81cece (braboj 2022-01-02 11:43:43 +0200 14)
30a3d973 (braboj 2021-12-28 18:07:38 +0200 15) ### Concepts

# Show lines form 5 to 12
$ git blame -L 5,12 README.md
1f8716a4 (braboj            2022-01-11 12:26:13 +0200  5) ## Table of contents
4166563a (braboj 2021-12-28 12:49:54 +0200  6)
30a3d973 (braboj 2021-12-28 18:07:38 +0200  7) ### Introduction
3b7217de (braboj 2022-01-12 14:45:49 +0200  8) - [Overview](/01-Introduction/(tut-git-01-01)-git-features.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200  9) - [Installation for Windows](/01-Introduction/(tut-git-01-02)-windows-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 10) - [Installation for Linux](/01-Introduction/(tut-git-01-03)-linux-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 11) - [Hosting Services](/01-Introduction/(tut-git-01-04)-hosting-services.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 12) - [Dataflow Diagram](01-Introduction/(tut-git-01-05)-dataflow-overview.md)

# Show 5 lines starting from line 5
$ git blame -L 5,+5 README.md
1f8716a4 (braboj 2022-01-11 12:26:13 +0200  5) ## Table of contents
4166563a (braboj 2021-12-28 12:49:54 +0200  6)
30a3d973 (braboj 2021-12-28 18:07:38 +0200  7) ### Introduction
3b7217de (braboj 2022-01-12 14:45:49 +0200  8) - [Overview](/01-Introduction/(tut-git-01-01)-git-features.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200  9) - [Installation for Windows](/01-Introduction/(tut-git-01-02)-windows-installation.md)
```

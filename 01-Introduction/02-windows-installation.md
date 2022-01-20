[**Up**](introduction.md) |
[**Content**](../README.md) |
[**Intro**](../01-Introduction/introduction.md) |
[**Concepts**](../02-Concepts/concepts.md) |
[**Operations**](../03-Operations/operations.md) |
[**Dictionary**](../04-Appendix/dictionary.md)

-------------------------------------------------------------------------------
### Install on Windows

1. Browse to the official Git website: https://git-scm.com/downloads
2. Click the download link for Windows and allow the download to complete.
3. Browse to the download location
4. Double-click the file to launch the installer.
5. Follow the installation steps with the default options
6. Open PowerShell after the installation
7. Type ***git --version*** to test the installation

-------------------------------------------------------------------------------
### Install on Linux

#### Ubuntu
    apt-get install git

#### Fedora
    yum install git (up to Fedora 21)
    dnf install git (Fedora 22 and later)

#### Debian
    apt-get install git

#### Gentoo
    emerge --ask --verbose dev-vcs/git

#### Arch Linux
    pacman -S git

#### openSUSE
    zypper install git

#### Mageia
    urpmi git

#### Nix/NixOS
    nix-env -i git

#### FreeBSD
    pkg install git

#### Solaris 9/10/11 (OpenCSW)
    pkgutil -i git

#### Solaris 11 Express
    pkg install developer/versioning/git

#### OpenBSD
    pkg_add git

#### Alpine
    apk add git

#### Slitaz
    tazpkg get-install git
---
title: Version Control with Git
id: git
sidebar_label: Git
---

This document covers the Git Version Control System.

Git is a distributed Version Control System (VCS). In a DVCS (such as Git, Mercurial or Bazaar), clients don’t just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history. Thus, if any server dies, and these systems were collaborating via that server, any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data.

## Installing git

Git can be installed in the following way, on the following systems.

### Using a package manager

#### Arch Linux
Git on Arch Linux or derivative distributions (such as Manjaro, Arco, Endeavour, etc) can be installed simply via pacman.

```bash
sudo pacman -S git
```

#### Debian/Ubuntu
Git on Debian or it's derivative distributions (such as Ubuntu, Mint, Zorin, etc) can be installed via apt

```bash
sudo apt install git-all
```

#### RHEL/Fedora
Git on Red Hat Enterprise Linux or Fedora & it's derivatives (Rocky, CentOS 7, Oracle Linux, etc) can be installed via dnf

```bash
sudo dnf install git-all
```

#### Gentoo
Git on Gentoo and derivatives (Sabayon, Funtoo, Redcore Linux) can be installed via the portage package manager

```bash
emerge --ask dev-vcs/git
```

#### MacOS X
Git on apple MacOS X can be installed via [homebrew](https://brew.sh/).

```bash
brew install git
```

or you can also use [MacPorts](https://www.macports.org/)
```bash
sudo port install git
```

### Installing from Source Code

Some people may instead find it useful to install Git from source, because you’ll get the most recent version. If you do want to install Git from source, you need to have the following libraries that Git depends on: autotools, curl, zlib, openssl, expat, and libiconv.

On Fedora/RHEL based systems, you can use DNF to install them

```bash
sudo dnf install dh-autoreconf curl-devel expat-devel gettext-devel openssl-devel perl-devel zlib-devel
```

On Debian/Ubuntu based systems, you can use APT,

```bash
sudo apt install dh-autoreconf libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
```

On Arch based systems, you can use pacman to install the dependencies

```bash
sudo pacman -Sy curl expat perl perl-error perl-mailtools openssl pcre2 grep shadow zlib
```

When you have all the necessary dependencies, you can go ahead and grab the latest tagged release tarball from the mirror on the GitHub website, at https://github.com/git/git/releases.

You can then compile & install:

```bash
$ tar -zxf git-2.8.0.tar.gz
$ cd git-2.8.0
$ make configure
$ ./configure --prefix=/usr
$ make all doc info
$ sudo make install install-doc install-html install-info
```
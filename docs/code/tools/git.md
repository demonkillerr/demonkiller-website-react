---
title: Version Control with Git
id: git
sidebar_label: Git
---

This document covers the Git Version Control System.

Git is a distributed Version Control System (VCS). In a DVCS (such as Git, Mercurial or Bazaar), clients don’t just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history. Thus, if any server dies, and these systems were collaborating via that server, any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data.

## Installing Git

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

## Setting up Git

Before using git, the first thing that needs to be done is to set up your username and email address. This is important because every Git commit uses this information, and it’s immutably baked into the commits you start creating. You can set these global configuration variables like this:

```bash
git config --global user.name "DemonKiller"
git config --global user.email demonkiller@example.com
```

You can check you Git global configuration values with

```bash
git config --list
``` 

## Getting help with Git (man pages)

You can launch Git command man pages with <code>--help</code> flag. The syntax is

```bash
git <command> --help
```

For example, if you want help with the <code>git add</code> command, you can type

```bash
git add --help
```

## Git Usecases

There are two common scenarios where you would want to use Git as a VCS.
1. Start tracking existing local project with Git
2. Contribute/develop a remote existing project

### Track a local project

#### Start tracking project with git

Tracking a local project is extremely simple. You just have to initialise git in the project folder. Navigate to the project folder, and open a terminal in that folder. You can start tracking with 

```bash
git init
```

Running this will create a <code>.git</code> folder in that directory. Any file or folder that starts with a dot/period is hidden. You can access this folder by pressing <code><b>Control + H</b></code> in most major file managers like Dolphin (KDE Plasma), Nautilus (GNOME), Thunar (XFCE), Caja (MATE), etc. In the command line, you can see this file using the <code>-a</code> (all) flag.

```bash
ls -la
```

#### Stop tracking project

To stop tracking the said folder or project, simply remove the .git folder.

```bash
rm -rvf .git
```

:::tip
The <code>-r</code> flag is compulsary as it will recursively delete contents of the <code>.git</code> folder.

The <code>-v</code> flag is optional, yet recommended. It spits out verbose output on what is being deleted.

The <code>-f</code> flag is optional, yet recommended too. It forces deletion of any  nonexistent files and arguments.
:::

#### Know status of project files

In order to know status of project files, we can use

```bash
git status
```


#### Ignore files
Usually, there are files that we want to ignore in the project. These could be personal config files for example. We can create a <code>gitingore</code> file and list such files and folders in this file. The gitignore is a simple text file. This file is hidden and starts with a dot/period. 

```bash title=".gitignore"
*.conf
test.py
myfolder
```
You can check the status of files that are stated in gitignore with the the [status](#know-status-of-project-files) command.


#### Recording changes to the repository
Each file in your working directory can be in one of two states: tracked or untracked. Tracked files are files that were in the last snapshot, as well as any newly staged files; they can be unmodified, modified, or staged. In short, tracked files are files that Git knows about.

Untracked files are everything else — any files in your working directory that were not in your last snapshot and are not in your staging area. When you first clone a repository, all of your files will be tracked and unmodified because Git just checked them out and you haven’t edited anything.

As you edit files, Git sees them as modified, because you’ve changed them since your last commit. As you work, you selectively stage these modified files and then commit all those staged changes, and the cycle repeats.

#### Add files to staging area
In order to begin tracking a new file, you use the command <code>git add</code>.

```bash
$ git add <filename>

$ git add .

$ git add -A
```

You can add individual files or you can add all the files in the said directory.

:::tip
A dot or period means to add all the files in the folder/directory.
:::

You can check the status of the files with [Git Status](#know-status-of-project-files).

#### Remove files from the staging area
To remove files from the staging area, you can use 

```bash
git reset
```

Again, you can check status of the file with [Git Status](#know-status-of-project-files).

#### Commit Files
You can commit files with <code>git commit</code>.

```bash
git commit -m "Commit Message"
```

You can find information on past commits using

```bash
git log
```

### Track a remote project
A remote project is a one that is hosted on some online code repository hosting provider like Github/Gitlab.

#### Clone a project repository
In order to work locally on a remote project, you need to clone it. A project can be cloned in the following ways 

```bash
$ git clone <url> /dir/where/repo/will/be/cloned

$ git clone https://github.com/demonkillerr/example.git .

$ git clone /path/tp/directory/remote-repo.git .
```

:::tip
The dot/period indicates that you want to clone the repository in the current directory you are in. If you have a specified, you need to specify it instead of the period. For ex

```bash
git clone https://github.com/demonkillerr/example.git ~/Documents
```
:::

#### Viewing information regarding remote repository
You can view information regarding the remote repository, such as it's origins like this

```bash
git remote -v
```

#### Push changes to remote remote repository
In order to push changes to remote repository we need to

1. Commit changes locally as discussed [above](#track-a-local-project).
2. Then Push to remote

```bash
$ git add <filename>
$ git commit -m "Commit Message"
```

then

```bash
$ git pull origin master
$ git push origin master
```

## Common Workflow
What we have discussed till now is the basic of how to use Git in the two most common scenarios. Let's take a look at common workflow most open source projects follow. 

### Creating Branches for a desired feature
Nearly every VCS has some form of branching support. Branching means you diverge from the main line of development and continue to do work without messing with that main line.

In Git, you can create a branch like this

```bash
git branch <branch-name>
```

You can move to this branch from Master by

```bash
git checkout <branch-name>
```

#### Pushing new branch to remote
Till now the new branch that is made is created locally. In order to push the brnach to remote repository we can

```bash
git push -u origin <branch-name>
```

You can check the branches locally and remotely using

```bash
git branch -a
```

#### Merge Branch to Master
Once we are done with the development of a said feature on a said branch, we want to merge the changes of this branch with master. We can merge a branch with master like this

```bash
$ git checkout master #checkout to master branch

$ git pull origin master #pull in changes that might have been made in master 

$ git branch --merged #show previously merged branches

$ git merge <branch-name> #merge branch

$ git push origin master #push to remote
```

:::tip
The third step to see merged branches using <code>--merged</code> is optional, but recommended.
:::

#### Delete merged branch
Once a branch is merged, it is not required, hence best deleted. You can delete a branch like this

```bash
$ git branch --merged #check if branch has been merged

$ git branch -d <branch-name> #delete branch locally

$ git branch -a #look for branch in remote

$ git push origin --delete <branch-name> #delete branch from remote repository
```

### Fixing common mistakes
We as humans are prone to make errors. In this section we will see how to rectify them.

#### Undo recent changes made to a file
Undo changes to a file with checkout

```bash
git checkout <filename>
```

#### Undoing things
At any stage, you may want to undo something. One of the common undos takes place when you commit too early and possibly forget to add some
files, or you mess up your commit message. If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the <code>--amend</code> option.

```bash
git commit -amend -m "Commit Message"
```

:::note
Changing the commit message will change it's hash as well. Each commit message is part of the commit. Changing it will change the hash as well. This means that the Git history has been modified.
:::

#### Move commit made in master to another branch
Sometimes we are working on a feature that was meant to be commited to the feature's branch. But accidently it gets commited to master. To move the commit to the said branch, we can use the cherry-pick command.

Cherry-pick creates a new commit in the said branch based off the original commit. It does not delete the original commit.

```bash
$ git log #grab the hash (6-7 characters is fine)

$ git checkout <branch-name>

$ git cherry-pick <hash>

$ git log #check new commit (new commit has new hash)
```

The new feature will be in the said branch. But it is still on the master branch as well. We don't want that, it was never meant to be there. In order to remove the commit from master, we can use the Git reset command.

There are 3 types of reset.
1. Git reset soft (remove last commit but keeps changes in the staging directory)
2. Git reset mixed - default (remove last commit, and remove files from the staging area. Files are back in the working directory. Changes are kept.)
3. Git reset hard (Get rid of all changes till specified commit)

```bash
$ git checkout master #move to master branch

$ git reset --soft <hash of last desired commit>

$ git reset <hash of last desired commit>

$ git reset --hard <hash of last desired commit>
```

The reset command will handle tracked files.

#### Getting rid of untracked files
If we want to clear untracked files, we can use the clean command

```bash
git clean -df
```

:::tip
The <code>-d</code> flag removes untracked directories.
The <code>-f</code> flag removes untracked files.
:::

#### Undoing a commit without disturbing Git history
If a commit that has been pushed to a remote repository, needs to be undone, we can use the Git revert command. The revert command helps in keeping the Git history intact. 

```bash
git revert <hash of commit>
```

This will create a new commit based of the previous one with the revert commit message.
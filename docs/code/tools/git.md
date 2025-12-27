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

### Working with Branches
Nearly every VCS has some form of branching support. Branching means you diverge from the main line of development and continue to do work without messing with that main line.

#### Creating and Switching Branches

In Git, you can create a branch like this

```bash
git branch <branch-name>
```

You can move to this branch from Master by

```bash
git checkout <branch-name>
```

Or create and switch to a new branch in one command:

```bash
git checkout -b <branch-name>
```

Modern Git (2.23+) introduced the `switch` command for clearer semantics:

```bash
# Create and switch to new branch
git switch -c <branch-name>

# Switch to existing branch
git switch <branch-name>

# Switch to previous branch
git switch -
```

#### Listing Branches

View all local branches:

```bash
git branch
```

View all branches (local and remote):

```bash
git branch -a
```

View remote branches only:

```bash
git branch -r
```

View branches with last commit information:

```bash
git branch -v
```

View merged branches:

```bash
git branch --merged
```

View branches not yet merged:

```bash
git branch --no-merged
```

#### Renaming Branches

Rename the current branch:

```bash
git branch -m <new-branch-name>
```

Rename a different branch:

```bash
git branch -m <old-branch-name> <new-branch-name>
```

#### Comparing Branches

See differences between branches:

```bash
# See all different commits
git log main..feature-branch

# See commits in feature-branch not in main
git log main..feature-branch --oneline

# See commits in both branches
git log main...feature-branch

# See file differences
git diff main..feature-branch

# See which files changed
git diff --name-only main..feature-branch
```

#### Pushing new branch to remote
Till now the new branch that is made is created locally. In order to push the branch to remote repository we can

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

Force delete a branch (even if not merged):

```bash
git branch -D <branch-name>
```

:::warning
Use `-D` carefully as it will delete the branch even if it contains unmerged changes.
:::

### Rebasing

Rebasing is an alternative to merging that rewrites commit history. Instead of creating a merge commit, rebase moves or combines a sequence of commits to a new base commit.

#### Basic Rebase

```bash
# While on feature branch
git rebase main
```

This replays your feature branch commits on top of the main branch.

#### Rebase vs Merge

**Merge** creates a merge commit and preserves history:
```bash
git checkout main
git merge feature-branch
```

**Rebase** creates a linear history:
```bash
git checkout feature-branch
git rebase main
git checkout main
git merge feature-branch  # Fast-forward merge
```

:::tip
**When to use Rebase:**
- To maintain a clean, linear project history
- Before merging your feature branch to main
- To incorporate upstream changes into your feature branch

**When to use Merge:**
- For public/shared branches
- When you want to preserve exact history
- For integrating completed features
:::

#### Handling Rebase Conflicts

When conflicts occur during rebase:

```bash
# Fix conflicts in files, then
git add <conflicted-files>
git rebase --continue

# Or skip the conflicting commit
git rebase --skip

# Or abort the rebase
git rebase --abort
```

#### Interactive Rebase

Interactive rebase allows you to modify commits as they're being replayed. It's one of Git's most powerful features.

```bash
# Rebase last 5 commits
git rebase -i HEAD~5

# Rebase from a specific commit
git rebase -i <commit-hash>

# Rebase from the beginning of the branch
git rebase -i --root
```

When you run interactive rebase, Git opens an editor with a list of commits:

```
pick a1b2c3d Add feature X
pick e4f5g6h Fix typo
pick i7j8k9l Update documentation
pick m0n1o2p Refactor code

# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# d, drop = remove commit
```

**Common Interactive Rebase Operations:**

**Squash multiple commits:**
```
pick a1b2c3d Add feature X
squash e4f5g6h Fix typo
squash i7j8k9l Update documentation
pick m0n1o2p Refactor code
```

**Reword commit message:**
```
pick a1b2c3d Add feature X
reword e4f5g6h Fix typo
```

**Reorder commits:**
```
pick i7j8k9l Update documentation
pick a1b2c3d Add feature X
pick e4f5g6h Fix typo
```

**Edit a commit:**
```
pick a1b2c3d Add feature X
edit e4f5g6h Fix typo
```
When rebase stops at an `edit` commit:
```bash
# Make your changes
git add <files>
git commit --amend
git rebase --continue
```

**Split a commit:**
```
edit a1b2c3d Large commit with multiple changes
```
Then:
```bash
git reset HEAD~
git add <file1>
git commit -m "First part"
git add <file2>
git commit -m "Second part"
git rebase --continue
```

#### Autosquash

Git can automatically organize fixup commits:

```bash
# Create a fixup commit for a previous commit
git commit --fixup <commit-hash>

# When rebasing, automatically squash fixup commits
git rebase -i --autosquash HEAD~10
```

### Advanced Cherry-Picking

Cherry-picking allows you to apply specific commits from one branch to another.

#### Basic Cherry-Pick

```bash
# Apply a single commit
git cherry-pick <commit-hash>

# Apply multiple commits
git cherry-pick <commit1> <commit2> <commit3>

# Apply a range of commits
git cherry-pick <start-commit>..<end-commit>
```

#### Cherry-Pick Options

```bash
# Cherry-pick without committing (stage changes only)
git cherry-pick -n <commit-hash>
git cherry-pick --no-commit <commit-hash>

# Edit commit message while cherry-picking
git cherry-pick -e <commit-hash>
git cherry-pick --edit <commit-hash>

# Keep original author
git cherry-pick -x <commit-hash>
```

#### Handling Cherry-Pick Conflicts

```bash
# After resolving conflicts
git add <resolved-files>
git cherry-pick --continue

# Skip the current commit
git cherry-pick --skip

# Abort cherry-pick
git cherry-pick --abort
```

#### Cherry-Pick from Another Repository

```bash
# Add another repo as a remote
git remote add other-repo https://github.com/user/repo.git
git fetch other-repo

# Cherry-pick from the other repo
git cherry-pick other-repo/main~3
```

### Understanding Git Reset

Git reset moves the HEAD pointer and optionally modifies the staging area and working directory.

#### The Three Trees

Git manages three trees:
1. **HEAD** - Last commit snapshot, next parent
2. **Index** - Proposed next commit (staging area)
3. **Working Directory** - Sandbox where you make changes

#### Reset Modes

**Soft Reset** - Moves HEAD only:
```bash
git reset --soft HEAD~1
```
- Moves HEAD to previous commit
- Keeps staging area and working directory unchanged
- Previous commit's changes remain staged

**Mixed Reset** (default) - Moves HEAD and resets staging:
```bash
git reset HEAD~1
git reset --mixed HEAD~1
```
- Moves HEAD to previous commit
- Resets staging area to match HEAD
- Keeps working directory unchanged
- Previous commit's changes become unstaged

**Hard Reset** - Moves HEAD, resets staging and working directory:
```bash
git reset --hard HEAD~1
```
- Moves HEAD to previous commit
- Resets staging area to match HEAD
- Resets working directory to match HEAD
- ⚠️ Destroys uncommitted changes

:::danger
`git reset --hard` permanently discards changes. Make sure you want to lose those changes!
:::

#### Reset Use Cases

**Undo last commit but keep changes:**
```bash
git reset --soft HEAD~1
```

**Unstage all files:**
```bash
git reset
```

**Unstage specific file:**
```bash
git reset <file>
```

**Move branch pointer:**
```bash
git reset --hard <commit-hash>
```

**Undo multiple commits:**
```bash
git reset --hard HEAD~3
```

#### Reset vs Revert

- **Reset** rewrites history (don't use on public branches)
- **Revert** creates a new commit that undoes changes (safe for public branches)

```bash
# Reset (changes history)
git reset --hard HEAD~1

# Revert (preserves history)
git revert HEAD
```

## Fixing common mistakes
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

### Git Stash

Stashing takes your modified tracked files and staged changes and saves them on a stack of unfinished changes that you can reapply at any time.

#### Basic Stashing

```bash
# Stash current changes
git stash

# Stash with a message
git stash save "WIP: working on feature X"

# Stash including untracked files
git stash -u
git stash --include-untracked

# Stash including untracked and ignored files
git stash -a
git stash --all
```

#### Viewing Stashes

```bash
# List all stashes
git stash list

# Show stash contents
git stash show

# Show detailed stash contents
git stash show -p

# Show specific stash
git stash show stash@{2}
```

#### Applying Stashes

```bash
# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{2}

# Apply and remove from stash list (pop)
git stash pop

# Apply specific stash and pop
git stash pop stash@{2}
```

#### Managing Stashes

```bash
# Create a branch from stash
git stash branch <branch-name>

# Drop a specific stash
git stash drop stash@{1}

# Clear all stashes
git stash clear
```

#### Partial Stashing

```bash
# Interactively choose what to stash
git stash -p
git stash --patch

# Stash only staged changes
git stash --staged
```

### Git Reflog

The reflog records when the tips of branches and other references were updated in your local repository. It's your safety net for recovering "lost" commits.

#### Viewing Reflog

```bash
# Show reflog for HEAD
git reflog

# Show reflog for specific branch
git reflog <branch-name>

# Show reflog with dates
git reflog --relative-date

# Show reflog entries from last 2 weeks
git reflog --since="2 weeks ago"
```

#### Recovering Lost Commits

```bash
# Find the commit in reflog
git reflog

# Create a new branch from lost commit
git branch <branch-name> <commit-hash>

# Or reset to lost commit
git reset --hard <commit-hash>

# Or cherry-pick the lost commit
git cherry-pick <commit-hash>
```

#### Recovering Deleted Branch

```bash
# Find the branch tip in reflog
git reflog

# Recreate the branch
git branch <branch-name> <commit-hash>
```

#### Reflog Expiration

Reflog entries expire after 90 days by default (30 days for unreachable commits).

```bash
# Expire reflog now
git reflog expire --expire=now --all

# Expire unreachable reflog entries older than 2 weeks
git reflog expire --expire-unreachable=2.weeks.ago --all
```

### Git Bisect

Git bisect uses binary search to find which commit introduced a bug. It's incredibly powerful for debugging.

#### Basic Bisect Workflow

```bash
# Start bisecting
git bisect start

# Mark current commit as bad
git bisect bad

# Mark a known good commit (e.g., a tag or commit hash)
git bisect good v1.0

# Git checks out a commit in the middle
# Test if the bug exists, then mark it
git bisect good  # if no bug
git bisect bad   # if bug exists

# Continue until Git finds the first bad commit
# Git will output: "abc123 is the first bad commit"

# End bisect session
git bisect reset
```

#### Start Bisect with Commits

```bash
# Start and mark in one command
git bisect start HEAD v1.0
```

#### Automated Bisect

Run a script automatically:

```bash
# Start bisect
git bisect start HEAD v1.0

# Run automated test
git bisect run ./test.sh

# Git will automatically find the bad commit
```

The script should:
- Exit with 0 if commit is good
- Exit with 1-127 (except 125) if commit is bad
- Exit with 125 to skip commit

#### Bisect Visualize

```bash
# Visualize remaining commits to test
git bisect visualize
git bisect view
```

#### Skip Commits

```bash
# Skip current commit (e.g., won't compile)
git bisect skip

# Skip a range of commits
git bisect skip v1.0..v1.5
```

#### Bisect Log

```bash
# View bisect log
git bisect log

# Replay bisect from log
git bisect replay <logfile>
```

### Git Tags

Tags are references to specific points in Git history, commonly used to mark release versions.

#### Creating Tags

**Lightweight tags** (just a pointer to commit):
```bash
git tag v1.0
git tag v1.0 <commit-hash>
```

**Annotated tags** (full objects with metadata):
```bash
git tag -a v1.0 -m "Version 1.0 release"
git tag -a v1.0 <commit-hash> -m "Version 1.0"
```

#### Listing Tags

```bash
# List all tags
git tag

# List tags matching pattern
git tag -l "v1.8.*"

# Show tag information
git show v1.0
```

#### Pushing Tags

```bash
# Push specific tag
git push origin v1.0

# Push all tags
git push origin --tags

# Push annotated tags only
git push origin --follow-tags
```

#### Deleting Tags

```bash
# Delete local tag
git tag -d v1.0

# Delete remote tag
git push origin --delete v1.0
git push origin :refs/tags/v1.0
```

#### Checking Out Tags

```bash
# View files at tag (detached HEAD)
git checkout v1.0

# Create branch from tag
git checkout -b version1 v1.0
```

### Git Log Advanced

#### Formatting Log Output

```bash
# One line per commit
git log --oneline

# Show graph
git log --graph --oneline --all

# Show with dates
git log --pretty=format:"%h - %an, %ar : %s"

# Show commits with patches
git log -p

# Show stats
git log --stat

# Show specific number of commits
git log -5

# Custom format
git log --pretty=format:"%C(yellow)%h%C(reset) - %C(green)%an%C(reset), %C(blue)%ar%C(reset) : %s"
```

#### Filtering Log

```bash
# By author
git log --author="DemonKiller"

# By date
git log --since="2 weeks ago"
git log --after="2024-01-01"
git log --before="2024-12-31"

# By commit message
git log --grep="bug fix"

# By file
git log -- <file>

# Commits that added or removed a string
git log -S "function_name"

# Commits that added or removed a string (regex)
git log -G "regex_pattern"

# Show only merge commits
git log --merges

# Show only non-merge commits
git log --no-merges
```

#### Log Ranges

```bash
# Commits in branch2 not in branch1
git log branch1..branch2

# Commits in either branch but not both
git log branch1...branch2

# Show which branch each commit came from
git log --left-right branch1...branch2
```

### Git Diff Advanced

#### Diff Variations

```bash
# Diff working directory vs staging
git diff

# Diff staging vs last commit
git diff --staged
git diff --cached

# Diff working directory vs last commit
git diff HEAD

# Diff between commits
git diff <commit1> <commit2>

# Diff between branches
git diff branch1..branch2

# Diff specific file
git diff <file>

# Diff with word-level granularity
git diff --word-diff

# Show only changed file names
git diff --name-only

# Show file names with status
git diff --name-status
```

#### Diff Tools

```bash
# Use external diff tool
git difftool

# Configure diff tool
git config --global diff.tool vimdiff
git config --global difftool.prompt false
```

### Git Worktrees

Worktrees allow you to have multiple working directories attached to the same repository.

#### Creating Worktrees

```bash
# Create new worktree
git worktree add <path> <branch>

# Create new worktree with new branch
git worktree add <path> -b <new-branch>

# Create worktree from detached HEAD
git worktree add <path> <commit-hash>
```

#### Managing Worktrees

```bash
# List all worktrees
git worktree list

# Remove worktree
git worktree remove <path>

# Prune worktree records
git worktree prune
```

**Use cases:**
- Work on multiple branches simultaneously
- Test changes without switching branches
- Run long-running processes on one branch while working on another

### Git Submodules

Submodules allow you to keep a Git repository as a subdirectory of another Git repository.

#### Adding Submodules

```bash
# Add submodule
git submodule add <repository-url> <path>

# Add submodule to specific branch
git submodule add -b <branch> <repository-url> <path>
```

#### Cloning Repository with Submodules

```bash
# Clone and initialize submodules
git clone --recurse-submodules <repository-url>

# Or initialize after cloning
git clone <repository-url>
git submodule init
git submodule update
```

#### Updating Submodules

```bash
# Update all submodules
git submodule update --remote

# Update specific submodule
git submodule update --remote <submodule-path>

# Pull latest changes in all submodules
git submodule foreach git pull origin main
```

#### Removing Submodules

```bash
# Remove submodule
git submodule deinit <path>
git rm <path>
rm -rf .git/modules/<path>
```

### Git Aliases

Create shortcuts for common commands.

#### Setting Up Aliases

```bash
# Simple aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Complex aliases
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'

# Alias with parameters
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

Now you can use:
```bash
git co main
git br -a
git st
git lg
```

### Git Hooks

Git hooks are scripts that run automatically on certain Git events.

#### Common Hooks

Located in `.git/hooks/`:

**pre-commit** - Runs before commit is created:
```bash
#!/bin/bash
# .git/hooks/pre-commit
npm test
```

**prepare-commit-msg** - Runs before commit message editor opens:
```bash
#!/bin/bash
# .git/hooks/prepare-commit-msg
echo "# Please include ticket number" >> $1
```

**commit-msg** - Validate commit message:
```bash
#!/bin/bash
# .git/hooks/commit-msg
if ! grep -qE "^(feat|fix|docs|style|refactor|test|chore):" "$1"; then
    echo "Error: Commit message must start with type (feat|fix|docs|...)"
    exit 1
fi
```

**pre-push** - Runs before push:
```bash
#!/bin/bash
# .git/hooks/pre-push
npm run lint && npm test
```

**post-merge** - Runs after successful merge:
```bash
#!/bin/bash
# .git/hooks/post-merge
npm install
```

Make hooks executable:
```bash
chmod +x .git/hooks/pre-commit
```

### Git Configuration

#### Configuration Levels

```bash
# System-wide configuration
git config --system

# User-level configuration
git config --global

# Repository-level configuration
git config --local
```

#### Useful Configurations

```bash
# Set default branch name
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor vim

# Enable color output
git config --global color.ui auto

# Set diff tool
git config --global diff.tool vimdiff

# Set merge tool
git config --global merge.tool vimdiff

# Auto-correct mistyped commands
git config --global help.autocorrect 20

# Cache credentials for 1 hour
git config --global credential.helper 'cache --timeout=3600'

# Always rebase instead of merge when pulling
git config --global pull.rebase true

# Automatically prune deleted remote branches
git config --global fetch.prune true
```

#### View Configuration

```bash
# View all configuration
git config --list

# View specific setting
git config user.name

# View with source file
git config --list --show-origin
```

### Git Best Practices

#### Commit Messages

Follow conventional commits format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(auth): add password reset functionality

Implement password reset via email token.
Token expires after 1 hour.

Closes #123
```

#### Branching Strategy

**Git Flow:**
- `main` - production-ready code
- `develop` - integration branch
- `feature/*` - new features
- `release/*` - release preparation
- `hotfix/*` - emergency fixes

**GitHub Flow:**
- `main` - always deployable
- `feature/*` - short-lived feature branches
- Deploy from `main` after PR merge

**Trunk-Based Development:**
- `main` - single long-lived branch
- Short-lived feature branches (< 2 days)
- Feature flags for incomplete features

#### Do's and Don'ts

**Do:**
- Commit early and often
- Write meaningful commit messages
- Keep commits focused and atomic
- Use branches for features
- Pull before you push
- Review your changes before committing

**Don't:**
- Rewrite public history
- Commit large binary files
- Commit sensitive information
- Have huge commits with unrelated changes
- Force push to shared branches
- Commit commented-out code

## Advanced Workflows

#### Feature Branch Workflow

```bash
# Start new feature
git checkout -b feature/awesome-feature

# Make changes and commit
git add .
git commit -m "feat: add awesome feature"

# Keep feature branch updated with main
git checkout main
git pull origin main
git checkout feature/awesome-feature
git rebase main

# Push feature branch
git push -u origin feature/awesome-feature

# After PR approval, merge via GitHub/GitLab
# Or merge locally
git checkout main
git merge --no-ff feature/awesome-feature
git push origin main
git branch -d feature/awesome-feature
git push origin --delete feature/awesome-feature
```

#### Hotfix Workflow

```bash
# Create hotfix branch from main
git checkout -b hotfix/critical-bug main

# Fix the bug
git commit -am "fix: resolve critical bug"

# Merge to main
git checkout main
git merge --no-ff hotfix/critical-bug
git tag -a v1.0.1 -m "Hotfix release 1.0.1"

# Merge to develop
git checkout develop
git merge --no-ff hotfix/critical-bug

# Clean up
git branch -d hotfix/critical-bug
```

#### Resolving Merge Conflicts

```bash
# When merge conflicts occur
git status  # See conflicted files

# Open and edit conflicted files
# Look for conflict markers:
# <<<<<<< HEAD
# your changes
# =======
# their changes
# >>>>>>> branch-name

# After resolving
git add <resolved-files>
git commit  # or git merge --continue
```

#### Squash Commits Before Merge

```bash
# Squash last 3 commits
git rebase -i HEAD~3

# In editor, change 'pick' to 'squash' for commits to merge
# Save and edit the combined commit message

# Force push if already pushed
git push --force-with-lease
```

#### Split Repository History

If you need to split a subdirectory into its own repository:

```bash
# Filter branch to keep only specific directory
git filter-branch --subdirectory-filter <directory> -- --all

# Or use git filter-repo (recommended)
git filter-repo --path <directory>
```

### Troubleshooting

#### Undo Committed Changes

```bash
# Undo last commit, keep changes
git reset --soft HEAD~1

# Undo last commit, unstage changes
git reset HEAD~1

# Undo last commit, discard changes
git reset --hard HEAD~1

# Undo pushed commit (creates new commit)
git revert HEAD
git push origin main
```

#### Fix Wrong Commit Message

```bash
# Fix last commit message (not pushed)
git commit --amend -m "New message"

# Fix last commit message (already pushed)
git commit --amend -m "New message"
git push --force-with-lease

# Fix older commit message
git rebase -i HEAD~3  # Change 'pick' to 'reword'
```

#### Recover Deleted Files

```bash
# Find commit where file was deleted
git log --all --full-history -- <file>

# Restore file from before deletion
git checkout <commit-hash>~1 -- <file>

# Or use reflog
git reflog
git checkout <commit-hash> -- <file>
```

#### Fix Detached HEAD

```bash
# Create branch from detached HEAD
git branch temp-branch

# Or checkout existing branch
git checkout main
```

#### Remove File from Git History

```bash
# Remove file from all commits (use with caution!)
git filter-branch --tree-filter 'rm -f <file>' HEAD

# Better: use git filter-repo
git filter-repo --invert-paths --path <file>

# After removing, force push
git push --force --all
```

#### Unstage Accidentally Staged File

```bash
# Unstage specific file
git reset HEAD <file>

# Unstage all files
git reset
```

#### Discard Local Changes

```bash
# Discard changes in specific file
git checkout -- <file>
git restore <file>

# Discard all local changes
git reset --hard HEAD

# Discard all changes including untracked files
git clean -fd
git reset --hard HEAD
```

#### Sync Forked Repository

```bash
# Add upstream remote
git remote add upstream https://github.com/original/repo.git

# Fetch upstream changes
git fetch upstream

# Merge upstream changes
git checkout main
git merge upstream/main

# Or rebase
git rebase upstream/main

# Push to your fork
git push origin main
```

#### Fix "Diverged Branches" Error

```bash
# When local and remote have diverged
# Option 1: Merge
git pull origin main

# Option 2: Rebase
git pull --rebase origin main

# Option 3: Force push (only if you're sure!)
git push --force-with-lease origin main
```

#### Resolve "Refusing to Merge Unrelated Histories"

```bash
# When merging repos with no common ancestor
git pull origin main --allow-unrelated-histories
```

#### Large File Issues

```bash
# Remove large file from last commit
git rm --cached <large-file>
git commit --amend --no-edit

# Use Git LFS for large files
git lfs install
git lfs track "*.psd"
git add .gitattributes
```

### Performance Optimization

#### Shallow Clone

```bash
# Clone only recent history
git clone --depth 1 <repository-url>

# Fetch more history later
git fetch --depth=100
```

#### Partial Clone

```bash
# Clone without files (blob-less)
git clone --filter=blob:none <repository-url>

# Clone without any objects
git clone --filter=tree:0 <repository-url>
```

#### Garbage Collection

```bash
# Run garbage collection
git gc

# Aggressive garbage collection
git gc --aggressive --prune=now
```

#### Optimize Repository

```bash
# Verify integrity
git fsck

# Count objects
git count-objects -vH

# Prune old objects
git prune

# Cleanup unnecessary files
git clean -fdx
```

### Git Maintenance

#### Regular Maintenance Tasks

```bash
# Enable automatic maintenance
git maintenance start

# Run maintenance manually
git maintenance run

# Configure maintenance schedule
git config --global maintenance.auto true
```

#### Repository Backup

```bash
# Create bundle (complete backup)
git bundle create repo.bundle --all

# Restore from bundle
git clone repo.bundle restored-repo
```

#### Clean Up Old Branches

```bash
# Delete merged local branches
git branch --merged main | grep -v "main" | xargs git branch -d

# Remove remote-tracking branches that no longer exist
git fetch --prune

# Show stale branches
git branch -vv | grep ': gone]'
```

### Git Security

#### Signing Commits

```bash
# Generate GPG key
gpg --gen-key

# List GPG keys
gpg --list-secret-keys --keyid-format=long

# Configure Git to use GPG key
git config --global user.signingkey <GPG-key-ID>

# Sign commits
git commit -S -m "Signed commit"

# Always sign commits
git config --global commit.gpgsign true

# Verify signatures
git log --show-signature
```

#### Credential Management

```bash
# Cache credentials
git config --global credential.helper cache

# Store credentials (less secure)
git config --global credential.helper store

# Use OS keychain (macOS)
git config --global credential.helper osxkeychain

# Use credential manager (Windows)
git config --global credential.helper manager
```

## Quick Reference

#### Essential Commands Cheat Sheet

| Command | Description |
|---------|-------------|
| `git init` | Initialize repository |
| `git clone <url>` | Clone repository |
| `git status` | Check status |
| `git add <file>` | Stage file |
| `git commit -m "msg"` | Commit changes |
| `git push` | Push to remote |
| `git pull` | Pull from remote |
| `git branch` | List branches |
| `git checkout <branch>` | Switch branch |
| `git merge <branch>` | Merge branch |
| `git rebase <branch>` | Rebase branch |
| `git log` | View history |
| `git diff` | View changes |
| `git stash` | Stash changes |
| `git tag` | Manage tags |
| `git reset` | Undo changes |
| `git revert` | Revert commit |

#### Common Scenarios Quick Guide

**Start new feature:**
```bash
git checkout -b feature/name
```

**Update feature with latest main:**
```bash
git checkout main && git pull
git checkout feature/name
git rebase main
```

**Undo last commit (not pushed):**
```bash
git reset --soft HEAD~1
```

**Change last commit message:**
```bash
git commit --amend
```

**Discard local changes:**
```bash
git restore <file>
```

**View changes not staged:**
```bash
git diff
```

**View changes staged:**
```bash
git diff --staged
```

**Temporarily save changes:**
```bash
git stash
git stash pop
```

**Find a bug with binary search:**
```bash
git bisect start
git bisect bad
git bisect good <commit>
```

**Clean up merged branches:**
```bash
git branch --merged | xargs git branch -d
```

This comprehensive guide should serve as a solid reference for Git operations. Remember: practice makes perfect, and don't be afraid to experiment in a test repository!
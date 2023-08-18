"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,p=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(p,r(r({ref:t},m),{},{components:a})):n.createElement(p,r({ref:t},m))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={title:"Version Control with Git",id:"git",sidebar_label:"Git"},r=void 0,l={unversionedId:"code/tools/git",id:"code/tools/git",title:"Version Control with Git",description:"This document covers the Git Version Control System.",source:"@site/docs/code/tools/git.md",sourceDirName:"code/tools",slug:"/code/tools/git",permalink:"/demonkiller-website-react/docs/code/tools/git",draft:!1,tags:[],version:"current",frontMatter:{title:"Version Control with Git",id:"git",sidebar_label:"Git"},sidebar:"docs",previous:{title:"Tools & Utilities",permalink:"/demonkiller-website-react/docs/category/tools--utilities"},next:{title:"Markdown",permalink:"/demonkiller-website-react/docs/code/tools/markdown"}},s={},c=[{value:"Installing Git",id:"installing-git",level:2},{value:"Using a package manager",id:"using-a-package-manager",level:3},{value:"Arch Linux",id:"arch-linux",level:4},{value:"Debian/Ubuntu",id:"debianubuntu",level:4},{value:"RHEL/Fedora",id:"rhelfedora",level:4},{value:"Gentoo",id:"gentoo",level:4},{value:"MacOS X",id:"macos-x",level:4},{value:"Installing from Source Code",id:"installing-from-source-code",level:3},{value:"Setting up Git",id:"setting-up-git",level:2},{value:"Getting help with Git (man pages)",id:"getting-help-with-git-man-pages",level:2},{value:"Git Usecases",id:"git-usecases",level:2},{value:"Track a local project",id:"track-a-local-project",level:3},{value:"Start tracking project with git",id:"start-tracking-project-with-git",level:4},{value:"Stop tracking project",id:"stop-tracking-project",level:4},{value:"Know status of project files",id:"know-status-of-project-files",level:4},{value:"Ignore files",id:"ignore-files",level:4},{value:"Recording changes to the repository",id:"recording-changes-to-the-repository",level:4},{value:"Add files to staging area",id:"add-files-to-staging-area",level:4},{value:"Remove files from the staging area",id:"remove-files-from-the-staging-area",level:4},{value:"Commit Files",id:"commit-files",level:4},{value:"Track a remote project",id:"track-a-remote-project",level:3},{value:"Clone a project repository",id:"clone-a-project-repository",level:4},{value:"Viewing information regarding remote repository",id:"viewing-information-regarding-remote-repository",level:4},{value:"Push changes to remote remote repository",id:"push-changes-to-remote-remote-repository",level:4},{value:"Common Workflow",id:"common-workflow",level:2},{value:"Creating Branches for a desired feature",id:"creating-branches-for-a-desired-feature",level:3},{value:"Pushing new branch to remote",id:"pushing-new-branch-to-remote",level:4},{value:"Merge Branch to Master",id:"merge-branch-to-master",level:4},{value:"Delete merged branch",id:"delete-merged-branch",level:4},{value:"Fixing common mistakes",id:"fixing-common-mistakes",level:3},{value:"Undo recent changes made to a file",id:"undo-recent-changes-made-to-a-file",level:4},{value:"Undoing things",id:"undoing-things",level:4},{value:"Move commit made in master to another branch",id:"move-commit-made-in-master-to-another-branch",level:4},{value:"Getting rid of untracked files",id:"getting-rid-of-untracked-files",level:4},{value:"Undoing a commit without disturbing Git history",id:"undoing-a-commit-without-disturbing-git-history",level:4}],m={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document covers the Git Version Control System."),(0,o.kt)("p",null,"Git is a distributed Version Control System (VCS). In a DVCS (such as Git, Mercurial or Bazaar), clients don\u2019t just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history. Thus, if any server dies, and these systems were collaborating via that server, any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data."),(0,o.kt)("h2",{id:"installing-git"},"Installing Git"),(0,o.kt)("p",null,"Git can be installed in the following way, on the following systems."),(0,o.kt)("h3",{id:"using-a-package-manager"},"Using a package manager"),(0,o.kt)("h4",{id:"arch-linux"},"Arch Linux"),(0,o.kt)("p",null,"Git on Arch Linux or derivative distributions (such as Manjaro, Arco, Endeavour, etc) can be installed simply via pacman."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S git\n")),(0,o.kt)("h4",{id:"debianubuntu"},"Debian/Ubuntu"),(0,o.kt)("p",null,"Git on Debian or it's derivative distributions (such as Ubuntu, Mint, Zorin, etc) can be installed via apt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install git-all\n")),(0,o.kt)("h4",{id:"rhelfedora"},"RHEL/Fedora"),(0,o.kt)("p",null,"Git on Red Hat Enterprise Linux or Fedora & it's derivatives (Rocky, CentOS 7, Oracle Linux, etc) can be installed via dnf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install git-all\n")),(0,o.kt)("h4",{id:"gentoo"},"Gentoo"),(0,o.kt)("p",null,"Git on Gentoo and derivatives (Sabayon, Funtoo, Redcore Linux) can be installed via the portage package manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"emerge --ask dev-vcs/git\n")),(0,o.kt)("h4",{id:"macos-x"},"MacOS X"),(0,o.kt)("p",null,"Git on apple MacOS X can be installed via ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\n")),(0,o.kt)("p",null,"or you can also use ",(0,o.kt)("a",{parentName:"p",href:"https://www.macports.org/"},"MacPorts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo port install git\n")),(0,o.kt)("h3",{id:"installing-from-source-code"},"Installing from Source Code"),(0,o.kt)("p",null,"Some people may instead find it useful to install Git from source, because you\u2019ll get the most recent version. If you do want to install Git from source, you need to have the following libraries that Git depends on: autotools, curl, zlib, openssl, expat, and libiconv."),(0,o.kt)("p",null,"On Fedora/RHEL based systems, you can use DNF to install them"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install dh-autoreconf curl-devel expat-devel gettext-devel openssl-devel perl-devel zlib-devel\n")),(0,o.kt)("p",null,"On Debian/Ubuntu based systems, you can use APT,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install dh-autoreconf libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev\n")),(0,o.kt)("p",null,"On Arch based systems, you can use pacman to install the dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy curl expat perl perl-error perl-mailtools openssl pcre2 grep shadow zlib\n")),(0,o.kt)("p",null,"When you have all the necessary dependencies, you can go ahead and grab the latest tagged release tarball from the mirror on the GitHub website, at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/git/git/releases"},"https://github.com/git/git/releases"),"."),(0,o.kt)("p",null,"You can then compile & install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tar -zxf git-2.8.0.tar.gz\n$ cd git-2.8.0\n$ make configure\n$ ./configure --prefix=/usr\n$ make all doc info\n$ sudo make install install-doc install-html install-info\n")),(0,o.kt)("h2",{id:"setting-up-git"},"Setting up Git"),(0,o.kt)("p",null,"Before using git, the first thing that needs to be done is to set up your username and email address. This is important because every Git commit uses this information, and it\u2019s immutably baked into the commits you start creating. You can set these global configuration variables like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "DemonKiller"\ngit config --global user.email demonkiller@example.com\n')),(0,o.kt)("p",null,"You can check you Git global configuration values with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --list\n")),(0,o.kt)("h2",{id:"getting-help-with-git-man-pages"},"Getting help with Git (man pages)"),(0,o.kt)("p",null,"You can launch Git command man pages with ",(0,o.kt)("code",null,"--help")," flag. The syntax is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git <command> --help\n")),(0,o.kt)("p",null,"For example, if you want help with the ",(0,o.kt)("code",null,"git add")," command, you can type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git add --help\n")),(0,o.kt)("h2",{id:"git-usecases"},"Git Usecases"),(0,o.kt)("p",null,"There are two common scenarios where you would want to use Git as a VCS."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start tracking existing local project with Git"),(0,o.kt)("li",{parentName:"ol"},"Contribute/develop a remote existing project")),(0,o.kt)("h3",{id:"track-a-local-project"},"Track a local project"),(0,o.kt)("h4",{id:"start-tracking-project-with-git"},"Start tracking project with git"),(0,o.kt)("p",null,"Tracking a local project is extremely simple. You just have to initialise git in the project folder. Navigate to the project folder, and open a terminal in that folder. You can start tracking with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,o.kt)("p",null,"Running this will create a ",(0,o.kt)("code",null,".git")," folder in that directory. Any file or folder that starts with a dot/period is hidden. You can access this folder by pressing ",(0,o.kt)("code",null,(0,o.kt)("b",null,"Control + H"))," in most major file managers like Dolphin (KDE Plasma), Nautilus (GNOME), Thunar (XFCE), Caja (MATE), etc. In the command line, you can see this file using the ",(0,o.kt)("code",null,"-a")," (all) flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la\n")),(0,o.kt)("h4",{id:"stop-tracking-project"},"Stop tracking project"),(0,o.kt)("p",null,"To stop tracking the said folder or project, simply remove the .git folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rvf .git\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("code",null,"-r")," flag is compulsary as it will recursively delete contents of the ",(0,o.kt)("code",null,".git")," folder."),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("code",null,"-v")," flag is optional, yet recommended. It spits out verbose output on what is being deleted."),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("code",null,"-f")," flag is optional, yet recommended too. It forces deletion of any  nonexistent files and arguments.")),(0,o.kt)("h4",{id:"know-status-of-project-files"},"Know status of project files"),(0,o.kt)("p",null,"In order to know status of project files, we can use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,o.kt)("h4",{id:"ignore-files"},"Ignore files"),(0,o.kt)("p",null,"Usually, there are files that we want to ignore in the project. These could be personal config files for example. We can create a ",(0,o.kt)("code",null,"gitingore")," file and list such files and folders in this file. The gitignore is a simple text file. This file is hidden and starts with a dot/period. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".gitignore"',title:'".gitignore"'},"*.conf\ntest.py\nmyfolder\n")),(0,o.kt)("p",null,"You can check the status of files that are stated in gitignore with the the ",(0,o.kt)("a",{parentName:"p",href:"#know-status-of-project-files"},"status")," command."),(0,o.kt)("h4",{id:"recording-changes-to-the-repository"},"Recording changes to the repository"),(0,o.kt)("p",null,"Each file in your working directory can be in one of two states: tracked or untracked. Tracked files are files that were in the last snapshot, as well as any newly staged files; they can be unmodified, modified, or staged. In short, tracked files are files that Git knows about."),(0,o.kt)("p",null,"Untracked files are everything else \u2014 any files in your working directory that were not in your last snapshot and are not in your staging area. When you first clone a repository, all of your files will be tracked and unmodified because Git just checked them out and you haven\u2019t edited anything."),(0,o.kt)("p",null,"As you edit files, Git sees them as modified, because you\u2019ve changed them since your last commit. As you work, you selectively stage these modified files and then commit all those staged changes, and the cycle repeats."),(0,o.kt)("h4",{id:"add-files-to-staging-area"},"Add files to staging area"),(0,o.kt)("p",null,"In order to begin tracking a new file, you use the command ",(0,o.kt)("code",null,"git add"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git add <filename>\n\n$ git add .\n\n$ git add -A\n")),(0,o.kt)("p",null,"You can add individual files or you can add all the files in the said directory."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A dot or period means to add all the files in the folder/directory.")),(0,o.kt)("p",null,"You can check the status of the files with ",(0,o.kt)("a",{parentName:"p",href:"#know-status-of-project-files"},"Git Status"),"."),(0,o.kt)("h4",{id:"remove-files-from-the-staging-area"},"Remove files from the staging area"),(0,o.kt)("p",null,"To remove files from the staging area, you can use "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git reset\n")),(0,o.kt)("p",null,"Again, you can check status of the file with ",(0,o.kt)("a",{parentName:"p",href:"#know-status-of-project-files"},"Git Status"),"."),(0,o.kt)("h4",{id:"commit-files"},"Commit Files"),(0,o.kt)("p",null,"You can commit files with ",(0,o.kt)("code",null,"git commit"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "Commit Message"\n')),(0,o.kt)("p",null,"You can find information on past commits using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git log\n")),(0,o.kt)("h3",{id:"track-a-remote-project"},"Track a remote project"),(0,o.kt)("p",null,"A remote project is a one that is hosted on some online code repository hosting provider like Github/Gitlab."),(0,o.kt)("h4",{id:"clone-a-project-repository"},"Clone a project repository"),(0,o.kt)("p",null,"In order to work locally on a remote project, you need to clone it. A project can be cloned in the following ways "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone <url> /dir/where/repo/will/be/cloned\n\n$ git clone https://github.com/demonkillerr/example.git .\n\n$ git clone /path/tp/directory/remote-repo.git .\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The dot/period indicates that you want to clone the repository in the current directory you are in. If you have a specified, you need to specify it instead of the period. For ex"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/demonkillerr/example.git ~/Documents\n"))),(0,o.kt)("h4",{id:"viewing-information-regarding-remote-repository"},"Viewing information regarding remote repository"),(0,o.kt)("p",null,"You can view information regarding the remote repository, such as it's origins like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git remote -v\n")),(0,o.kt)("h4",{id:"push-changes-to-remote-remote-repository"},"Push changes to remote remote repository"),(0,o.kt)("p",null,"In order to push changes to remote repository we need to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Commit changes locally as discussed ",(0,o.kt)("a",{parentName:"li",href:"#track-a-local-project"},"above"),"."),(0,o.kt)("li",{parentName:"ol"},"Then Push to remote")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ git add <filename>\n$ git commit -m "Commit Message"\n')),(0,o.kt)("p",null,"then"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git pull origin master\n$ git push origin master\n")),(0,o.kt)("h2",{id:"common-workflow"},"Common Workflow"),(0,o.kt)("p",null,"What we have discussed till now is the basic of how to use Git in the two most common scenarios. Let's take a look at common workflow most open source projects follow. "),(0,o.kt)("h3",{id:"creating-branches-for-a-desired-feature"},"Creating Branches for a desired feature"),(0,o.kt)("p",null,"Nearly every VCS has some form of branching support. Branching means you diverge from the main line of development and continue to do work without messing with that main line."),(0,o.kt)("p",null,"In Git, you can create a branch like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git branch <branch-name>\n")),(0,o.kt)("p",null,"You can move to this branch from Master by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <branch-name>\n")),(0,o.kt)("h4",{id:"pushing-new-branch-to-remote"},"Pushing new branch to remote"),(0,o.kt)("p",null,"Till now the new branch that is made is created locally. In order to push the branch to remote repository we can"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin <branch-name>\n")),(0,o.kt)("p",null,"You can check the branches locally and remotely using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -a\n")),(0,o.kt)("h4",{id:"merge-branch-to-master"},"Merge Branch to Master"),(0,o.kt)("p",null,"Once we are done with the development of a said feature on a said branch, we want to merge the changes of this branch with master. We can merge a branch with master like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout master #checkout to master branch\n\n$ git pull origin master #pull in changes that might have been made in master \n\n$ git branch --merged #show previously merged branches\n\n$ git merge <branch-name> #merge branch\n\n$ git push origin master #push to remote\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The third step to see merged branches using ",(0,o.kt)("code",null,"--merged")," is optional, but recommended.")),(0,o.kt)("h4",{id:"delete-merged-branch"},"Delete merged branch"),(0,o.kt)("p",null,"Once a branch is merged, it is not required, hence best deleted. You can delete a branch like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch --merged #check if branch has been merged\n\n$ git branch -d <branch-name> #delete branch locally\n\n$ git branch -a #look for branch in remote\n\n$ git push origin --delete <branch-name> #delete branch from remote repository\n")),(0,o.kt)("h3",{id:"fixing-common-mistakes"},"Fixing common mistakes"),(0,o.kt)("p",null,"We as humans are prone to make errors. In this section we will see how to rectify them."),(0,o.kt)("h4",{id:"undo-recent-changes-made-to-a-file"},"Undo recent changes made to a file"),(0,o.kt)("p",null,"Undo changes to a file with checkout"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <filename>\n")),(0,o.kt)("h4",{id:"undoing-things"},"Undoing things"),(0,o.kt)("p",null,"At any stage, you may want to undo something. One of the common undos takes place when you commit too early and possibly forget to add some\nfiles, or you mess up your commit message. If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the ",(0,o.kt)("code",null,"--amend")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -amend -m "Commit Message"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Changing the commit message will change it's hash as well. Each commit message is part of the commit. Changing it will change the hash as well. This means that the Git history has been modified.")),(0,o.kt)("h4",{id:"move-commit-made-in-master-to-another-branch"},"Move commit made in master to another branch"),(0,o.kt)("p",null,"Sometimes we are working on a feature that was meant to be commited to the feature's branch. But accidently it gets commited to master. To move the commit to the said branch, we can use the cherry-pick command."),(0,o.kt)("p",null,"Cherry-pick creates a new commit in the said branch based off the original commit. It does not delete the original commit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log #grab the hash (6-7 characters is fine)\n\n$ git checkout <branch-name>\n\n$ git cherry-pick <hash>\n\n$ git log #check new commit (new commit has new hash)\n")),(0,o.kt)("p",null,"The new feature will be in the said branch. But it is still on the master branch as well. We don't want that, it was never meant to be there. In order to remove the commit from master, we can use the Git reset command."),(0,o.kt)("p",null,"There are 3 types of reset."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Git reset soft (remove last commit but keeps changes in the staging directory)"),(0,o.kt)("li",{parentName:"ol"},"Git reset mixed - default (remove last commit, and remove files from the staging area. Files are back in the working directory. Changes are kept.)"),(0,o.kt)("li",{parentName:"ol"},"Git reset hard (Get rid of all changes till specified commit)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout master #move to master branch\n\n$ git reset --soft <hash of last desired commit>\n\n$ git reset <hash of last desired commit>\n\n$ git reset --hard <hash of last desired commit>\n")),(0,o.kt)("p",null,"The reset command will handle tracked files."),(0,o.kt)("h4",{id:"getting-rid-of-untracked-files"},"Getting rid of untracked files"),(0,o.kt)("p",null,"If we want to clear untracked files, we can use the clean command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clean -df\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("code",null,"-d")," flag removes untracked directories.\nThe ",(0,o.kt)("code",null,"-f")," flag removes untracked files.")),(0,o.kt)("h4",{id:"undoing-a-commit-without-disturbing-git-history"},"Undoing a commit without disturbing Git history"),(0,o.kt)("p",null,"If a commit that has been pushed to a remote repository, needs to be undone, we can use the Git revert command. The revert command helps in keeping the Git history intact. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git revert <hash of commit>\n")),(0,o.kt)("p",null,"This will create a new commit based of the previous one with the revert commit message."))}u.isMDXComponent=!0}}]);
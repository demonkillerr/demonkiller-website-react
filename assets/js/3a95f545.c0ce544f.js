"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[370],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1805:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=o(7462),i=(o(7294),o(3905));const n={sidebar_position:1,title:"Build your own ALG ISO",id:"build-alg-iso",sidebar_label:"Build ALG ISO"},a="Build your own ALG ISO",l={unversionedId:"projects/arch-linux-gui/build-alg-iso",id:"projects/arch-linux-gui/build-alg-iso",title:"Build your own ALG ISO",description:"This document will guide you on how to build your own ALG ISO(s).",source:"@site/docs/projects/arch-linux-gui/build-alg.md",sourceDirName:"projects/arch-linux-gui",slug:"/projects/arch-linux-gui/build-alg-iso",permalink:"/docs/projects/arch-linux-gui/build-alg-iso",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Build your own ALG ISO",id:"build-alg-iso",sidebar_label:"Build ALG ISO"},sidebar:"docs",previous:{title:"Arch Linux GUI",permalink:"/docs/projects/arch-linux-gui/about-alg"},next:{title:"Build Installer",permalink:"/docs/projects/arch-linux-gui/installer"}},s={},u=[{value:"Video References",id:"video-references",level:2},{value:"Full Version",id:"full-version",level:3},{value:"Short Version",id:"short-version",level:3},{value:"1. Requirements",id:"1-requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"2. Clone repositories",id:"2-clone-repositories",level:2},{value:"3. Build the ISO",id:"3-build-the-iso",level:2},{value:"4. Debugging possible issues you may face",id:"4-debugging-possible-issues-you-may-face",level:2},{value:"No configurable repositories",id:"no-configurable-repositories",level:3},{value:"Configuring chaotic AUR repository",id:"configuring-chaotic-aur-repository",level:4},{value:"Unable to build ISO second time",id:"unable-to-build-iso-second-time",level:3},{value:"Certain packages do not exist",id:"certain-packages-do-not-exist",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-your-own-alg-iso"},"Build your own ALG ISO"),(0,i.kt)("p",null,"This document will guide you on how to build your own ALG ISO(s)."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The  ",(0,i.kt)("strong",{parentName:"p"},"ALG")," project has been discontinued since ",(0,i.kt)("inlineCode",{parentName:"p"},"July 2022"),". "),(0,i.kt)("p",{parentName:"admonition"},"The ALG repositories haven't been updated as of ",(0,i.kt)("inlineCode",{parentName:"p"},"October 2022"),". Many things are prone to break or simply not work. While I will try my best to fix the issues, things will go really slowly, from my end."),(0,i.kt)("p",{parentName:"admonition"},"You will have to take ",(0,i.kt)("em",{parentName:"p"},"extra steps")," than described in this document to make them work. Feel free to ask questions on the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/NgAFEw9Tkf"},"discord server")," or ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/joinchat/yODEBq7J8fA3ZWM1"},"telegram discussion group"),". Many members of the community build the ISOs and they will be able to help you.")),(0,i.kt)("h2",{id:"video-references"},"Video References"),(0,i.kt)("p",null,"Please note that I will update the videos."),(0,i.kt)("h3",{id:"full-version"},"Full Version"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Jqa7Bu6e4KM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"short-version"},"Short Version"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oiuAYuNeRWw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"1-requirements"},"1. Requirements"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"ISO building is a resource intensive process.")),(0,i.kt)("p",null,"While you can build the ISOs on a ",(0,i.kt)("em",{parentName:"p"},"potato")," system, ISO building will take a long time. I would recommend a system with at least:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 CPU threads (a good 4 core processor would suffice)"),(0,i.kt)("li",{parentName:"ul"},"NVMe SSD"),(0,i.kt)("li",{parentName:"ul"},"High Frequency RAM  ")),(0,i.kt)("h3",{id:"software"},"Software"),(0,i.kt)("p",null,"The system should have Arch Linux installed either by the help of ALG or via the official method. Please make sure you have the following packages installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"archiso\ngit\n")),(0,i.kt)("p",null,"If these aren't installed on your system, you can install them like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S archiso\n")),(0,i.kt)("h2",{id:"2-clone-repositories"},"2. Clone repositories"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"ALG has many editions. Understand the differences between them ",(0,i.kt)("a",{parentName:"p",href:"/docs/projects/arch-linux-gui/about-alg#difference-between-alg-editions"},"here"),".")),(0,i.kt)("p",null,"On the ALG ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arch-linux-gui"},"github")," page, search for the edition you want. You should be able to see a green code button on the top right of the edition's repository. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"Clone")," the repository on your local system."),(0,i.kt)("h2",{id:"3-build-the-iso"},"3. Build the ISO"),(0,i.kt)("p",null,"Navigate to the cloned repository and open a terminal in that directory. (Right click, ",(0,i.kt)("em",{parentName:"p"},"open in terminal"),")"),(0,i.kt)("p",null,"Build ISO by typing,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkarchiso -v .\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("code",null,"-v")," flag will print verbose output for you and ",(0,i.kt)("code",null," . (period)"),", will build the ISO in the same folder. Once the ISO build process is done, you will be have two new folders, ",(0,i.kt)("em",{parentName:"p"},"work")," and ",(0,i.kt)("em",{parentName:"p"},"out"),". ",(0,i.kt)("strong",{parentName:"p"},"Work")," will contain the uncompressed ISO files, for debugging purposes. You will be able to see the ISO's file system there. ",(0,i.kt)("strong",{parentName:"p"},"Out")," will contain the actual ISO file."),(0,i.kt)("h2",{id:"4-debugging-possible-issues-you-may-face"},"4. Debugging possible issues you may face"),(0,i.kt)("h3",{id:"no-configurable-repositories"},"No configurable repositories"),(0,i.kt)("p",null,"If the error when running command at ",(0,i.kt)("a",{parentName:"p",href:"#3-build-the-iso"},"step 3"),", says something like ",(0,i.kt)("em",{parentName:"p"},"no configurable repositories"),", simple copy the profile's pacman.conf to your system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp pacman.conf /etc/pacman.conf\n")),(0,i.kt)("p",null,"This will add the following repositories in your system's pacman.conf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[alg_repo]\nSigLevel = Optional TrustedOnly\nServer = https://arch-linux-gui.github.io/$repo/$arch\n\n[alg-settings]\nSigLevel = Optional TrustedOnly\nServer = https://arch-linux-gui.github.io/$repo/$arch\n\n[chaotic-aur]\nInclude = /etc/pacman.d/chaotic-mirrorlist\n")),(0,i.kt)("h4",{id:"configuring-chaotic-aur-repository"},"Configuring chaotic AUR repository"),(0,i.kt)("p",null,"While you can comment out the ",(0,i.kt)("code",null,"chaotic-aur")," repository, it is required to build some editions like the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projects/arch-linux-gui/about-alg#window-managers"},"Window Managers")," or Mate editions. To enable the chaotic-aur, type the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com\n\nsudo pacman-key --lsign-key FBA220DFC880C036\n\nsudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst\n")),(0,i.kt)("p",null,"or "),(0,i.kt)("p",null,"You can comment the ",(0,i.kt)("code",null,"chaotic-aur")," lines in the pacman.conf you just copied. Synchronize you repositories and install the keyring and mirrolist from ALG's repositories."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy chaotic-keying chaotic-mirrorlist\n")),(0,i.kt)("p",null,"and then uncomment ",(0,i.kt)("code",null,"chaotic-aur")," in /etc/pacman.conf."),(0,i.kt)("h3",{id:"unable-to-build-iso-second-time"},"Unable to build ISO second time"),(0,i.kt)("p",null,"Once an ISO is built, the files need to be removed, as the ",(0,i.kt)("em",{parentName:"p"},"work")," and ",(0,i.kt)("em",{parentName:"p"},"out")," folders are in the same directory as the profile. Hence you need to run the cleanup convinience script every time you want to make a new ISO."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./cleanup.sh\n")),(0,i.kt)("p",null,"You could also automate this by making a new script in your profile directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='makeiso.sh'",title:"'makeiso.sh'"},"./cleanup.sh\n\nsudo mkarchiso -v .\n")),(0,i.kt)("h3",{id:"certain-packages-do-not-exist"},"Certain packages do not exist"),(0,i.kt)("p",null,"The root cause of this issue is that pacstrap cannot find the packages in any of the repositories. If a repository has been say, removed from the official repositories you need to remove them too. For example, recently, the firmware for older intel wireless devices was removed. Since these packages are in packages.x86_64, you need to comment or remove them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='profile/packages.x86_64'",title:"'profile/packages.x86_64'"},"#ipw2100-fw\n#ipw2200-fw\n")))}p.isMDXComponent=!0}}]);
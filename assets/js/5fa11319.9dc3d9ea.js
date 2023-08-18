"use strict";(self.webpackChunkdemonkiller_portfolio=self.webpackChunkdemonkiller_portfolio||[]).push([[480],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=i.createContext({}),c=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(r.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,h=p["".concat(r,".").concat(d)]||p[d]||f[d]||a;return t?i.createElement(h,s(s({ref:n},u),{},{components:t})):i.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={title:"Configuring the installer",id:"installer-config",sidebar_label:"Installer Config"},s=void 0,l={unversionedId:"projects/arch-linux-gui/installer-config",id:"projects/arch-linux-gui/installer-config",title:"Configuring the installer",description:"The ALG project ships calamares configuration as a seperate package. There are two such packages, alg-theme-cala-config is the configuration repository for the themed editions, while the alg-pure-cala-config is the configuration repository used in the pure editions & window managers. You may find other calamares configurations in the ALG github organization, such as the zen-config or the net-config. The concepts explained in this document applies to them as well.",source:"@site/docs/projects/arch-linux-gui/config.md",sourceDirName:"projects/arch-linux-gui",slug:"/projects/arch-linux-gui/installer-config",permalink:"/demonkiller-website-react/docs/projects/arch-linux-gui/installer-config",draft:!1,tags:[],version:"current",frontMatter:{title:"Configuring the installer",id:"installer-config",sidebar_label:"Installer Config"},sidebar:"docs",previous:{title:"Build Installer",permalink:"/demonkiller-website-react/docs/projects/arch-linux-gui/build-installer"},next:{title:"Code",permalink:"/demonkiller-website-react/docs/category/code"}},r={},c=[{value:"Structure of a standard ALG cala config repository",id:"structure-of-a-standard-alg-cala-config-repository",level:2},{value:"Branding",id:"branding",level:3},{value:"Modules",id:"modules",level:3},{value:"launch.sh",id:"launchsh",level:3},{value:"settings.conf",id:"settingsconf",level:3},{value:"Customizing the config",id:"customizing-the-config",level:2},{value:"Based on appearence",id:"based-on-appearence",level:3},{value:"Based on functionality",id:"based-on-functionality",level:3},{value:"initcpio.conf",id:"initcpioconf",level:4},{value:"unpackfs.conf",id:"unpackfsconf",level:4},{value:"partition.conf",id:"partitionconf",level:4},{value:"mount.conf",id:"mountconf",level:4},{value:"packages.conf",id:"packagesconf",level:4},{value:"users.conf and removeuser.conf",id:"usersconf-and-removeuserconf",level:4},{value:"welcome.conf",id:"welcomeconf",level:4},{value:"Shellprocess",id:"shellprocess",level:4}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ALG project ships calamares configuration as a seperate package. There are two such packages, ",(0,o.kt)("code",null,"alg-theme-cala-config")," is the configuration repository for the ",(0,o.kt)("a",{parentName:"p",href:"/demonkiller-website-react/docs/projects/arch-linux-gui/about-alg#themed-editions"},"themed editions"),", while the ",(0,o.kt)("code",null,"alg-pure-cala-config")," is the configuration repository used in the ",(0,o.kt)("a",{parentName:"p",href:"/demonkiller-website-react/docs/projects/arch-linux-gui/about-alg#pure-editions"},"pure editions")," & ",(0,o.kt)("a",{parentName:"p",href:"/demonkiller-website-react/docs/projects/arch-linux-gui/about-alg#window-managers"},"window managers"),". You may find other calamares configurations in the ALG github organization, such as the zen-config or the net-config. The concepts explained in this document applies to them as well. "),(0,o.kt)("p",null,"This document will focus on the ALG themed-calamares-configuration repository."),(0,o.kt)("h2",{id:"structure-of-a-standard-alg-cala-config-repository"},"Structure of a standard ALG cala config repository"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is the exact structure of ",(0,o.kt)("strong",{parentName:"p"},"alg-theme-cala-config"),". Other calamares config repositories will be slightly different than this, however, concepts discussed in this document will apply to them as well.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alg-theme-cala-config/\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 calamares\n\u2502\xa0\xa0     \u251c\u2500\u2500 branding\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 archlinuxgui\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 branding.desc\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 icon.png\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 install.png\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 lang\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 calamares-default_ar.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 calamares-default_en.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 calamares-default_eo.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 calamares-default_fr.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 calamares-default_nl.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 logo.png\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 show.qml\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 Slide1.jpg\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 Slide2.jpg\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 Slide3.jpg\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 Slide4.jpg\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 Slide5.jpg\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 Slide6.jpg\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 stylesheet.qss\n\u2502\xa0\xa0     \u251c\u2500\u2500 launch.sh\n\u2502\xa0\xa0     \u251c\u2500\u2500 modules\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 initcpio.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 mount.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 packages.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 partition.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 removeuser.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 shellprocess-alg-mkinitcpio.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 shellprocess-remove-livecd.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 unpackfs.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 users.conf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 welcome.conf\n\u2502\xa0\xa0     \u2514\u2500\u2500 settings.conf\n\u2514\u2500\u2500 README.md\n")),(0,o.kt)("p",null,"The config files are packaged into the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"/etc/calamares"))," on the live system. This folder will have 2 files and 2 folders. These are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"branding"),(0,o.kt)("li",{parentName:"ul"},"modules"),(0,o.kt)("li",{parentName:"ul"},"launch.sh"),(0,o.kt)("li",{parentName:"ul"},"settings.conf")),(0,o.kt)("p",null,"Let's have a closer look."),(0,o.kt)("h3",{id:"branding"},"Branding"),(0,o.kt)("p",null,"The contents of the branding folder help in customizing the look of the installer. It contains a file, ",(0,o.kt)("em",{parentName:"p"},"branding.desc")," that specifies how the installer will look. This file specifies the logo, distribution name and other important variables to be displayed on the installer, including the color scheme. "),(0,o.kt)("p",null,"The show.qml specifies the sequence of the slide shows. The slide show is basically a loop of images you would like to show the end-user while the installer is running. It is recommended to keep the images in the same folder for easy referencing."),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"The modules folder contains various configuration files that specify behaviours of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/calamares/calamares/tree/calamares/src/modules"},"calamares modules"),". ALG keeps module configuration ",(0,o.kt)("a",{parentName:"p",href:"https://www.interaction-design.org/literature/topics/keep-it-simple-stupid"},"simple"),". Only the modules that require specified behaviour are configured. Each configuration file represents the module they affect. "),(0,o.kt)("p",null,"initcpio.conf for example belongs to the initcpio module, and will affect it's operational behaviour."),(0,o.kt)("h3",{id:"launchsh"},"launch.sh"),(0,o.kt)("p",null,"This is a simple script to launch calamares. This is called in the calamares .desktop file. See ",(0,o.kt)("a",{parentName:"p",href:"/demonkiller-website-react/docs/projects/arch-linux-gui/build-installer#get-the-pkgbuild-file"},"building"),"."),(0,o.kt)("h3",{id:"settingsconf"},"settings.conf"),(0,o.kt)("p",null,"This is the top level configuration file that specifies the order in which the modules are to be called. Some calamares modules are only to be shown as a front-end (keyboard and locale for example), while other modules are usually execuated. The following is the module execution steps used in ALG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# ALG Calamares settings configuration file\n# Configuration file for Calamares\n# Syntax is YAML 1.2\n---\n\nmodules-search: [ local ]\n\ninstances:\n- id:       algmkinitcpio\n  module:   shellprocess\n  config:   shellprocess-alg-mkinitcpio.conf\n- id:       remove-livecd\n  module:   shellprocess\n  config:   shellprocess-remove-livecd.conf\n\nsequence:\n- show:\n  - welcome\n  - locale\n  - keyboard\n  - partition\n  - users\n  - summary\n- exec:\n  - partition\n  - mount\n  - unpackfs\n  - machineid\n  - fstab\n  - locale\n  - keyboard\n  - localecfg\n  - luksbootkeyfile\n  - luksopenswaphookcfg\n  - shellprocess@algmkinitcpio\n  - initcpiocfg\n  - initcpio\n  - removeuser\n  - users\n  - displaymanager\n  - networkcfg\n  - hwclock\n  - services-systemd\n  - packages\n  - grubcfg\n  - bootloader\n  - shellprocess@remove-livecd\n  - umount\n- show:\n  - finished\n\nbranding: archlinuxgui\nprompt-install: false\ndont-chroot: false\ndisable-cancel: false\ndisable-cancel-during-exec: false\n")),(0,o.kt)("h2",{id:"customizing-the-config"},"Customizing the config"),(0,o.kt)("p",null,"Customizing the configuration can be done for two purposes, functionality or appearence."),(0,o.kt)("h3",{id:"based-on-appearence"},"Based on appearence"),(0,o.kt)("p",null,"Customizing this configuration is very easy. Replace files in the ",(0,o.kt)("a",{parentName:"p",href:"#branding"},"branding")," directory and you will end up with a custom look."),(0,o.kt)("h3",{id:"based-on-functionality"},"Based on functionality"),(0,o.kt)("p",null,"This will require basic understanding of what the configuration files do."),(0,o.kt)("h4",{id:"initcpioconf"},"initcpio.conf"),(0,o.kt)("p",null,"This module runs mkinitcpio with the given preset values. This configuration file defines the kernel to run the mkinitcpio command against. It needs to have the kernel specified in the preset. If the kernel specifies in the preset is ",(0,o.kt)("strong",{parentName:"p"},"not")," the stock kernel, then the value of key needs to be changed, for ex"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#key defines the kernel to be loaded\nkernel: linux-zen\n")),(0,o.kt)("h4",{id:"unpackfsconf"},"unpackfs.conf"),(0,o.kt)("p",null,'ALG installs Arch Linux offline, by compressing the entire root filesystem as a squash filesystem (squashfs). The unpackfs module "unpack" (unsquashes) this filesystem. The module configuration file specifies the squashed file to be used. The following configuration are for the stock kernel. Changes have to be made for a different kernel for ex'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'unpack:\n    -   source: "/run/archiso/bootmnt/arch/x86_64/airootfs.sfs"\n        sourcefs: "squashfs"\n        destination: ""\n    -   source: "/run/archiso/bootmnt/arch/boot/x86_64/vmlinuz-linux-zen"\n        sourcefs: "file"\n        destination: "/boot/vmlinuz-linux-zen"\n')),(0,o.kt)("h4",{id:"partitionconf"},"partition.conf"),(0,o.kt)("p",null,"This module paritions the selected disk. It's configuration file specifies things like the default EFI parition size, default SWAP size, encryption, etc."),(0,o.kt)("h4",{id:"mountconf"},"mount.conf"),(0,o.kt)("p",null,'This module mounts filesystems in the target (generally, before treating the target as a usable chroot / "live" system). Filesystems are automatically mounted from the partitioning module. This configuration file specifies extra file systems to mount.'),(0,o.kt)("h4",{id:"packagesconf"},"packages.conf"),(0,o.kt)("p",null,"This module uses the package manager, specified in the backend key, to install or remove packages. ALG uses this module to remove packages that are not required in the installed system. These include the installer itself, alongside, it's dependencies."),(0,o.kt)("h4",{id:"usersconf-and-removeuserconf"},"users.conf and removeuser.conf"),(0,o.kt)("p",null,"removeuser.conf is self-explanatory, it removes the liveuser."),(0,o.kt)("p",null,"Users module creates a user specified in the module's front end and sets permissions. The users.conf configuration file specifies the groups the user needs to be in, whether user would autologin, their default, shell, password & set root password."),(0,o.kt)("h4",{id:"welcomeconf"},"welcome.conf"),(0,o.kt)("p",null,"This is the configuration file for the welcome module. The welcome page displays some information from the branding file, ",(0,o.kt)("em",{parentName:"p"},"branding.desc"),". The welcome configuration file specifies the various buttons on the welcome page. It also specifies the list of conditions to be met before the installer can be actually used. "),(0,o.kt)("h4",{id:"shellprocess"},"Shellprocess"),(0,o.kt)("p",null,"Allows distro developers to run bash shell scripts for any given reason (ex: modify a file in the filesystem). ALG uses this for extra permissions, nvidia drivers, preset switching and cleaning up. ALG's shell scripts are stored in the profile's ",(0,o.kt)("code",null,"/usr/local/bin"),"."))}f.isMDXComponent=!0}}]);
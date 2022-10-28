---
sidebar_position: 2
title: Configuring the installer
id: config
sidebar_label: Installer Config
---

The ALG project ships calamares configuration as a seperate package. There are two such packages, <code>alg-theme-cala-config</code> is the configuration repository for the [themed editions](./about-alg.md#themed-editions), while the <code>alg-pure-cala-config</code> is the configuration repository used in the [pure editions](./about-alg.md#pure-editions) & [window managers](./about-alg.md#window-managers). You may find other calamares configurations in the ALG github organization, such as the zen-config or the net-config. The concepts explained in this document applies to them as well. 

This document will focus on the ALG themed-calamares-configuration repository.

## Structure of a standard ALG cala config repository

:::note

This is the exact structure of **alg-theme-cala-config**. Other calamares config repositories will be slightly different than this, however, concepts discussed in this document will apply to them as well.

:::

```bash
alg-theme-cala-config/
├── etc
│   └── calamares
│       ├── branding
│       │   └── archlinuxgui
│       │       ├── branding.desc
│       │       ├── icon.png
│       │       ├── install.png
│       │       ├── lang
│       │       │   ├── calamares-default_ar.ts
│       │       │   ├── calamares-default_en.ts
│       │       │   ├── calamares-default_eo.ts
│       │       │   ├── calamares-default_fr.ts
│       │       │   └── calamares-default_nl.ts
│       │       ├── logo.png
│       │       ├── show.qml
│       │       ├── Slide1.jpg
│       │       ├── Slide2.jpg
│       │       ├── Slide3.jpg
│       │       ├── Slide4.jpg
│       │       ├── Slide5.jpg
│       │       ├── Slide6.jpg
│       │       └── stylesheet.qss
│       ├── launch.sh
│       ├── modules
│       │   ├── initcpio.conf
│       │   ├── mount.conf
│       │   ├── packages.conf
│       │   ├── partition.conf
│       │   ├── removeuser.conf
│       │   ├── shellprocess-alg-mkinitcpio.conf
│       │   ├── shellprocess-remove-livecd.conf
│       │   ├── unpackfs.conf
│       │   ├── users.conf
│       │   └── welcome.conf
│       └── settings.conf
└── README.md
```

The config files are packaged into the **_/etc/calamares_** on the live system. This folder will have 2 files and 2 folders. These are:


* branding
* modules
* launch.sh
* settings.conf

Let's have a closer look.

### Branding
The contents of the branding folder help in customizing the look of the installer. It contains a file, *branding.desc* that specifies how the installer will look. This file specifies the logo, distribution name and other important variables to be displayed on the installer, including the color scheme. 

The show.qml specifies the sequence of the slide shows. The slide show is basically a loop of images you would like to show the end-user while the installer is running. It is recommended to keep the images in the same folder for easy referencing.

### Modules
The modules folder contains various configuration files that specify behaviours of [calamares modules](https://github.com/calamares/calamares/tree/calamares/src/modules). ALG keeps module configuration [simple](https://www.interaction-design.org/literature/topics/keep-it-simple-stupid). Only the modules that require specified behaviour are configured. Each configuration file represents the module they affect. 

initcpio.conf for example belongs to the initcpio module, and will affect it's operational behaviour.

### launch.sh
This is a simple script to launch calamares. This is called in the calamares .desktop file. See [building](./installer.md#get-the-pkgbuild-file).

### settings.conf
This is the top level configuration file that specifies the order in which the modules are to be called. Some calamares modules are only to be shown as a front-end (keyboard and locale for example), while other modules are usually execuated. The following is the module execution steps used in ALG

```bash
# ALG Calamares settings configuration file
# Configuration file for Calamares
# Syntax is YAML 1.2
---

modules-search: [ local ]

instances:
- id:       algmkinitcpio
  module:   shellprocess
  config:   shellprocess-alg-mkinitcpio.conf
- id:       remove-livecd
  module:   shellprocess
  config:   shellprocess-remove-livecd.conf

sequence:
- show:
  - welcome
  - locale
  - keyboard
  - partition
  - users
  - summary
- exec:
  - partition
  - mount
  - unpackfs
  - machineid
  - fstab
  - locale
  - keyboard
  - localecfg
  - luksbootkeyfile
  - luksopenswaphookcfg
  - shellprocess@algmkinitcpio
  - initcpiocfg
  - initcpio
  - removeuser
  - users
  - displaymanager
  - networkcfg
  - hwclock
  - services-systemd
  - packages
  - grubcfg
  - bootloader
  - shellprocess@remove-livecd
  - umount
- show:
  - finished

branding: archlinuxgui
prompt-install: false
dont-chroot: false
disable-cancel: false
disable-cancel-during-exec: false
```

## Customizing the config
Customizing the configuration can be done for two purposes, functionality or appearence.

### Based on appearence
Customizing this configuration is very easy. Replace files in the [branding](#branding) directory and you will end up with a custom look.

### Based on functionality

This will require basic understanding of what the configuration files do.

#### initcpio.conf

This module runs mkinitcpio with the given preset values. This configuration file defines the kernel to run the mkinitcpio command against. It needs to have the kernel specified in the preset. If the kernel specifies in the preset is **not** the stock kernel, then the value of key needs to be changed, for ex

```bash
#key defines the kernel to be loaded
kernel: linux-zen
```

#### unpackfs.conf

ALG installs Arch Linux offline, by compressing the entire root filesystem as a squash filesystem (squashfs). The unpackfs module "unpack" (unsquashes) this filesystem. The module configuration file specifies the squashed file to be used. The following configuration are for the stock kernel. Changes have to be made for a different kernel for ex

```bash
unpack:
    -   source: "/run/archiso/bootmnt/arch/x86_64/airootfs.sfs"
        sourcefs: "squashfs"
        destination: ""
    -   source: "/run/archiso/bootmnt/arch/boot/x86_64/vmlinuz-linux-zen"
        sourcefs: "file"
        destination: "/boot/vmlinuz-linux-zen"
```

#### partition.conf

This module paritions the selected disk. It's configuration file specifies things like the default EFI parition size, default SWAP size, encryption, etc.

#### mount.conf

This module mounts filesystems in the target (generally, before treating the target as a usable chroot / "live" system). Filesystems are automatically mounted from the partitioning module. This configuration file specifies extra file systems to mount.

#### packages.conf

This module uses the package manager, specified in the backend key, to install or remove packages. ALG uses this module to remove packages that are not required in the installed system. These include the installer itself, alongside, it's dependencies.


#### users.conf and removeuser.conf

removeuser.conf is self-explanatory, it removes the liveuser.

Users module creates a user specified in the module's front end and sets permissions. The users.conf configuration file specifies the groups the user needs to be in, whether user would autologin, their default, shell, password & set root password.


#### welcome.conf

This is the configuration file for the welcome module. The welcome page displays some information from the branding file, _branding.desc_. The welcome configuration file specifies the various buttons on the welcome page. It also specifies the list of conditions to be met before the installer can be actually used. 

#### Shellprocess

Allows distro developers to run bash shell scripts for any given reason (ex: modify a file in the filesystem). ALG uses this for extra permissions, nvidia drivers, preset switching and cleaning up. ALG's shell scripts are stored in the profile's <code>/usr/local/bin</code>.
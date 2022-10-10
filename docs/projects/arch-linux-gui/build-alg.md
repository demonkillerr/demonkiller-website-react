---
title: Build your own ALG ISO
id: build-alg-iso
sidebar_label: Build ALG ISO
---

# Build your own ALG ISO

This document will guide you on how to build your own ALG ISO(s).

:::caution

The  **ALG** project has been discontinued since `July 2022`. 

The ALG repositories haven't been updated as of `October 2022`. Many things are prone to break or simply not work. While I will try my best to fix the issues, things will go really slowly, from my end.

You will have to take _extra steps_ than described in this document to make them work. Feel free to ask questions on the [discord server](https://discord.com/invite/NgAFEw9Tkf) or [telegram discussion group](https://t.me/joinchat/yODEBq7J8fA3ZWM1). Many members of the community build the ISOs and they will be able to help you.

:::



## Video References
Please note that I will update the videos.

### Full Version
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jqa7Bu6e4KM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Short Version
<iframe width="560" height="315" src="https://www.youtube.com/embed/oiuAYuNeRWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 1. Requirements
### Hardware 
:::warning

ISO building is a resource intensive process.

:::

While you can build the ISOs on a _potato_ system, ISO building will take a long time. I would recommend a system with at least:

* 8 CPU threads (a good 4 core processor would suffice)
* NVMe SSD
* High Frequency RAM  

### Software

The system should have Arch Linux installed either by the help of ALG or via the official method. Please make sure you have the following packages installed.

```
archiso
git
```

If these aren't installed on your system, you can install them like this:
```bash
sudo pacman -S archiso
```


## 2. Clone repositories


:::note

ALG has many editions. Understand the differences between them [here](./intro.md#difference-between-alg-editions).

:::

On the ALG [github](https://github.com/arch-linux-gui) page, search for the edition you want. You should be able to see a green code button on the top right of the edition's repository. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the repository on your local system.

## 3. Build the ISO

Navigate to the cloned repository and open a terminal in that directory. (Right click, _open in terminal_)

Build ISO by typing,
```bash
sudo mkarchiso -v .
```

The <code>-v</code> flag will print verbose output for you and <code> . (period)</code>, will build the ISO in the same folder. Once the ISO build process is done, you will be have two new folders, _work_ and _out_. **Work** will contain the uncompressed ISO files, for debugging purposes. You will be able to see the ISO's file system there. **Out** will contain the actual ISO file.

## 4. Debugging possible issues you may face

### No configurable repositories
If the error when running command at [step 3](#3-build-the-iso), says something like _no configurable repositories_, simple copy the profile's pacman.conf to your system.

```bash
sudo cp pacman.conf /etc/pacman.conf
```
This will add the following repositories in your system's pacman.conf.

```
[alg_repo]
SigLevel = Optional TrustedOnly
Server = https://arch-linux-gui.github.io/$repo/$arch

[alg-settings]
SigLevel = Optional TrustedOnly
Server = https://arch-linux-gui.github.io/$repo/$arch

[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

#### Configuring chaotic AUR repository
While you can comment out the <code>chaotic-aur</code> repository, it is required to build some editions like the [Window Managers](./intro.md#window-managers) or Mate editions. To enable the chaotic-aur, type the following commands:

```bash
sudo pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com

sudo pacman-key --lsign-key FBA220DFC880C036

sudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst
```

or 

You can comment the <code>chaotic-aur</code> lines in the pacman.conf you just copied. Synchronize you repositories and install the keyring and mirrolist from ALG's repositories.

```bash
sudo pacman -Sy chaotic-keying chaotic-mirrorlist
```

and then uncomment <code>chaotic-aur</code> in /etc/pacman.conf.

### Unable to build ISO second time

Once an ISO is built, the files need to be removed, as the _work_ and _out_ folders are in the same directory as the profile. Hence you need to run the cleanup convinience script every time you want to make a new ISO.

```bash
./cleanup.sh
```

You could also automate this by making a new script in your profile directory

```bash title='makeiso.sh'
./cleanup.sh

sudo mkarchiso -v .
```

### Certain packages do not exist

The root cause of this issue is that pacstrap cannot find the packages in any of the repositories. If a repository has been say, removed from the official repositories you need to remove them too. For example, recently, the firmware for older intel wireless devices was removed. Since these packages are in packages.x86_64, you need to comment or remove them.

```bash title='profile/packages.x86_64'
#ipw2100-fw
#ipw2200-fw
```
---
title: Setup developement environment and first program
id: setupandfirstprogram
sidebar_label: Setup & First Program
---

This document covers setting up compilers and a text editor. It also covers a basic program, that can run to check if everything works.

C is a compiled language, so inorder to run your C program, you need a compiler. GCC (GNU Compiler Collection) is a widely used compiler because its free, open source, and widely available.

You also need a text editor to write your code. You can use anything from command line text editors like Vi(m), Nano or Emacs, to graphical text editors like VS-Code, KATE, Gedit, Notepad(++). This reference assumes you want to use VS-Code. This is because VS-Code is a good beginner's text editor and has support for a wide variety of plugins, some of which are used and mentioned in this reference document. This allows users to compile and run with the click of a button. VS-code is also widely available across many operating systems.

We will also be using Make, a powerfull build tool for automating C builds.

## Download and install GCC and Make
GCC and make are available in most linux distributions.

### Arch Linux
On Arch Linux or derivatives distributions, GCC can be looked for or installed by:
```bash
# Check if GCC and make are present in your system:
pacman -Qi gcc
pacman -Qi make

# If gcc is not present, install GCC
sudo pacman -S gcc make

# Install everything:
sudo pacman -S base-devel
```

### Debian/Ubuntu
On Debian, Ubuntu or it's derivatives,
```bash
# Check if GCC is present in your system:
apt search gcc
apt search make

# If gcc is not present, install GCC
sudo apt install gcc make

# Install everything:
sudo apt install build-essential
```

### Fedora/RHEL
For RHEL, Fedora, CentOS, or it's derivatives,
```bash
# Check if GCC is present in your system:
dnf info gcc
dnf info make

# If gcc is not present, install GCC
sudo dnf install gcc make

# Install everything:
sudo dnf groupinstall "Development Tools"
```

### MacOS X
For MacOS, download the [HomeBrew](https://brew.sh/) package manager and install gcc and make by:
```bash
brew install gcc make
```
### Windows 10/11
For Windows, ideally the best option is to use [Windows Subsystem for Linux - WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and then follow the steps for either [Debian/Ubuntu](#debianubuntu), [Arch](#arch-linux) or [Fedora](#fedorarhel).

Alternatively, you can install [MinGW](https://www.mingw-w64.org/), and a UNIX like terminal such as [MobaXTerm](https://mobaxterm.mobatek.net/).

## Download Visual Studio Code
Visual Studio Code, commonly referred to as VS Code, is an integrated development environment developed by Microsoft for Windows, Linux, MacOS and web browsers.

### Arch Linux
On Arch Linux or derivatives distributions, the [AUR version](https://aur.archlinux.org/packages/visual-studio-code-bin) should be installed. This is because the VS Code version in the repository doesn't have support for extensions.
```bash
# Install manually (requires git)
git clone https://aur.archlinux.org/visual-studio-code-bin.git
cd visual-studio-code-bin
makepkg -sirc

# If you have chaotic AUR enabled,
sudo pacman -S visual-studio-code-bin

# Use a build tool
paru visual-studio-code-bin
yay -S visual-studio-code-bin
```

### Debian/Ubuntu
On Debian, Ubuntu or their derivatives, you can [download](https://code.visualstudio.com/Download) the .deb file and install it using
```bash
sudo apt install ./<file>.deb
```

You can also enable Microsoft repositories. This allows you to update vs-code via <code>apt upgrade</code>.
```bash
sudo apt install wget gpg -y

wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /usr/share/keyrings/packages.microsoft.gpg > /dev/null

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null

sudo apt update

sudo apt install code -y
```

### Fedora/RHEL
For Fedora, RHEL, CentOS or derivative operating systems, you can [download](https://code.visualstudio.com/Download) .rpm file. You can install this file using dnf or rpm
```bash
# dnf
sudo dnf install ./vscode.rpm -y

# rpm
sudo rpm -i vscode.rpm
```

Just like Debian, you can optionally enable Microsoft repositories and get VS Code from there. This allows you to update vs-code via <code>dnf check-update</code>.
```bash
# Add Microsoft Repository
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

sudo tee /etc/yum.repos.d/vscode.repo <<EOF
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
EOF

# Update Package List:
sudo dnf check-update

# Install VS Code:
sudo dnf install code -y
```

### MacOS
VS Code can be installed on MacOS using [HomeBrew](https://brew.sh/).
```bash
brew install --cask visual-studio-code
```

### Windows
[Download](https://code.visualstudio.com/Download) VS Code, and follow the instructions to install VS Code on Windows.

## Setup VS Code
Once you open VS Code, press <code>CTRL + SHIFT + X</code> to open the extensions window. We will install the following extensions,
- Code Runner
- C/C++ extension from Microsoft (for Intellisense)
- Makefile tools

Search for these, and click on install to install them. You may need to restart VS Code in order for them to work properly.

## Enable run code in Code Runner
In Code runner, select the following settings:
- Clear Previous Output
- Run In Terminal
- Save File Before Run
- Show Run Command In Editor Title Menu

Some of them might have already been checked so just check the one's that aren't.

## First Program
Copy and paste the program below into a new text file in VS Code. Name the file hello.c.

```C
#include <stdio.h>  // Include standard I/O library

int main() {
    printf("Hello, World!\n");  // Print to console
    return 0;  // Exit program successfully
}
```

### Test Code Runner
Press the run button on the top right hand side of the editor.

### Test Make
In order to test make, create a new file, name it Makefile, and copy the following code in it. While this might seem like an overkill for just a simple program, it is an important tool for large applications.
```make
CC = gcc
CFLAGS = -Wall

all: hello

hello: hello.c
	$(CC) $(CFLAGS) -o hello hello.c

clean:
	rm -f hello
```

You can build and run using,
```bash
# Build the binary
make

# Run the binary
./hello

# Remove the binary
make clean
```

#### Directory Structure
```bash
.
├── hello.c
└── Makefile

1 directory, 2 files
```

### Program Explaination

#### Header File
```#include <stdio.h>``` is the C standard input and output library. It contains the function declation for the <code>printf()</code> function.
We will look at this in more details when we cover modular programming.

#### Functions
This program contains two functions. Functions will be covered later. The two functions are 
- main()
- printf()

```main()``` is the starting point of a C program. Every C program should have a main(). It is called at program startup in C. The type of this function in *int*.
In older C books, main is written without *int*. This is because older C compilers assumed the type of main to be *int*. However, in modern C, it is a good practice to set the type of main to *int*.


```printf()``` is a C standard library function that formats text and writes it to standard output.

#### Escape Sequence
**\n** is a newline escape sequence. It ensures that the next bit of text is printed on the newline.

#### Return Statement
Since the type of main() is *int*, it needs to return an integer. The return keyword specifies what the program should return. In this case, we want the program to return 0, which means that it ran successfully.
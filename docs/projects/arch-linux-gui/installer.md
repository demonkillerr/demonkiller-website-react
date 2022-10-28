---
title: Building the installer
id: installer
sidebar_label: Build Installer
---

The installer used in ALG is calamares. Calamares is a distribution independent operating system installer framework. It's written in C++/Qt. This document will show you how to setup calamares. Calamares has a comprehensive guide on it's <a href="https://github.com/calamares/calamares/wiki">wiki</a>.

## Building Calamares

Calamares needs to be compiled(built). Calamares can be built in the following steps. More details can be found on the calamares wiki, linked above.

```bash
$ git clone https://github.com/calamares/calamares.git
$ mkdir calamares/build
$ cd calamares/build
$ cmake -DCMAKE_BUILD_TYPE=Debug ..
$ make
```

Calamares can then be run either of the following ways
```bash
$ ./calamares -d
$ sudo ./calamares -d
$ pkexec ./calamares -d
```

## Packaging calamares for ALG
In order to be used by the <a href="https://wiki.archlinux.org/title/Arch_Build_System">Arch Build System</a>, calamares needs to be packaged. A package is a precompiled binary, that can be put on a repository and downloaded when building the ISO. 

### Get the PKGBUILD file

The PKGBUILD file used for calamares in ALG is shown below. Copy & save it in a file named <code>PKGBUILD</code>.

```bash
#calamares PKGBUILD for Arch Linux GUI

pkgname=calamares
pkgver=3.2.61
pkgrel=1
pkgdesc='Distribution-independent installer framework'
arch=('x86_64')
license=(GPL)
url="https://github.com/calamares/calamares/releases/download"
license=('LGPL')
depends=('kconfig' 'kcoreaddons' 'kiconthemes' 'ki18n' 'kio' 'solid' 'yaml-cpp' 'kpmcore' 'mkinitcpio-openswap'
         'boost-libs' 'ckbcomp' 'hwinfo' 'qt5-svg' 'polkit-qt5' 'gtk-update-icon-cache' 'plasma-framework'
         'qt5-xmlpatterns' 'squashfs-tools' 'libpwquality' 'boost') # 'pythonqt>=3.2')
makedepends=('extra-cmake-modules' 'qt5-tools' 'qt5-translations' 'git' 'boost')
backup=('usr/share/calamares/modules/bootloader.conf'
        'usr/share/calamares/modules/displaymanager.conf'
        'usr/share/calamares/modules/initcpio.conf'
        'usr/share/calamares/modules/unpackfs.conf')

source=("$pkgname-$pkgver-$pkgrel.tar.gz::$url/v$pkgver/calamares-$pkgver.tar.gz")
sha256sums=('9ec6c49f4e2316cd3058d402c2ab65efff02e3f09a0028d50f0359e5154e6c8c')

prepare() {
	cd ${srcdir}/calamares-${pkgver}
	sed -i -e 's/"Install configuration files" OFF/"Install configuration files" ON/' CMakeLists.txt
	sed -i -e 's/# DEBUG_FILESYSTEMS/DEBUG_FILESYSTEMS/' "$srcdir/${pkgname}-${pkgver}/CMakeLists.txt"

	# modify desktop file
	sed -i -e 's#Exec=sh.*#Exec=sh -c "/etc/calamares/launch.sh"#g' "$srcdir/${pkgname}-${pkgver}/calamares.desktop"
	sed -i -e 's#Name=.*#Name=Install Arch Linux#g' "$srcdir/${pkgname}-${pkgver}/calamares.desktop"
	sed -i -e 's#GenericName=.*#GenericName=Arch Linux Installer#g' "$srcdir/${pkgname}-${pkgver}/calamares.desktop"
	sed -i -e 's#Icon=.*#Icon=archlinux-logo#g' "$srcdir/${pkgname}-${pkgver}/calamares.desktop"
	sed -i -e 's#Comment=.*#Comment=Arch Linux Installer#g' "$srcdir/${pkgname}-${pkgver}/calamares.desktop"


	# patches here

	# change version
	_ver="$(cat CMakeLists.txt | grep -m3 -e "  VERSION" | grep -o "[[:digit:]]*" | xargs | sed s'/ /./g')"
	printf 'Version: %s-%s' "${_ver}" "${pkgrel}"
	sed -i -e "s|\${CALAMARES_VERSION_MAJOR}.\${CALAMARES_VERSION_MINOR}.\${CALAMARES_VERSION_PATCH}|${_ver}-${pkgrel}|g" CMakeLists.txt
	sed -i -e "s|CALAMARES_VERSION_RC 1|CALAMARES_VERSION_RC 0|g" CMakeLists.txt

}

build() {
	cd ${srcdir}/calamares-${pkgver}

	mkdir -p build
	cd build
        cmake .. \
              -DCMAKE_BUILD_TYPE=Release \
              -DCMAKE_INSTALL_PREFIX=/usr \
              -DCMAKE_INSTALL_LIBDIR=lib \
              -DWITH_PYTHONQT:BOOL=ON \
              -DBoost_NO_BOOST_CMAKE=ON \
              -DSKIP_MODULES="tracking webview interactiveterminal initramfs \
                              initramfscfg dracut dracutlukscfg \
                              dummyprocess dummypython dummycpp \
                              dummypythonqt services-openrc"
        make
}

package() {
	cd ${srcdir}/calamares-${pkgver}/build
	make DESTDIR="$pkgdir" install
	
}
```

### Making the calamares package
In order to make the calamares package for ALG, install the following packages:

```bash
sudo pacman -Sy yaml-cpp kpmcore hwinfo qt5-xmlpatterns libpwquality qt5-translations extra-cmake-modules squashfs-tools boost
```

The following packages are in the AUR. You can install them with yay or paru.
```bash
paru -S mkinitcpio-openswap ckbcomp
```

#### You can skip installing required packages manually and directly install them while building

:::danger

AUR packages might not install this way

:::

:::caution

Make sure you run the following command in the directory containing the PKGBUILD.

:::

```bash
makepkg -sc
```

### Make compilation faster

Make compilation faster by using all CPU threads availble on host system. In makepkg.conf allocate all cores like this. Make sure you uncomment <code>MAKEFLAGS</code>.

```bash title=/etc/makepkg.conf
MAKEFLAGS="-j$(nproc)"
```

### Undertand the yield

Once compilation is done, makepkg will yield the package itself and some other files. A package should be a tarball in .zstd format. You should see something like:

```
pkgname-pkgver-pkgrel-arch-pkg.tar.zst
calamares-3.2.61-1-x86_64.pkg.tar.zst
```

The <code>pkg</code> folder contains the uncompressed tarball and <code>src</code> contains the cloned repository. Make sure you cleanup this folder when making a new package. This package can be deployed on any repository.
version_history = {
    windows: [
        {
            version: 'v2.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/windows/jywjl_windows_v2.0.0.exe'
        },
        {
            version: 'v1.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/windows/jywjl_windows_v1.0.0.exe'
        }
    ],
    android: [
        {
            version: 'v3.0.0',
            time: '2020-01-30',
            description: '1.使用Kotlin重构；2.界面主色调改为蓝色',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/android/jywjl_android_v3.0.0.apk'
        },
        {
            version: 'v2.0.3',
            time: '2019-10-03',
            description: '1.新增IPv6地址支持;2.使用Go标准HTTP库;3.去掉127.0.0.1地址显示',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/android/jywjl_android_v2.0.3.apk'
        },
        {
            version: 'v2.0.2',
            time: '2019-09-22',
            description: '1.修复会员剩余时间显示',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/android/jywjl_android_v2.0.2.apk'
        },
        {
            version: 'v2.0.1',
            time: '2019-09-07',
            description: '1.迁移到androidx. 2.添加Android 10支持',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/android/jywjl_android_v2.0.1.apk'
        },
        {
            version: 'v2.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/android/jywjl_android_v2.0.0.apk'
        },
        {
            version: 'v1.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/android/jywjl_android_v1.0.0.apk'
        }
    ],
    mac: [
        {
            version: 'v2.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/mac/jywjl_mac_v2.0.0.zip'
        },
        {
            version: 'v1.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/mac/jywjl_mac_v1.0.0.zip'
        }
    ],
    linux: [
        {
            version: 'v2.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/linux/jywjl_linux_amd64_v2.0.0.tar.bz2'
        },
        {
            version: 'v1.0.0',
            time: '--',
            description: '',
            url: 'https://github.com/jywjl/jywjl.github.io/releases/download/linux/jywjl_linux_amd64_v1.0.0.tar.bz2'
        }
    ]
}

function compareVersionLeftBigger(a, b) {
    var as = a.split('.');
    var bs = b.split('.');
    for (var i = 0; i < a.length; i++) {
        var i1 = parseInt(as[i]);
        var i2 = parseInt(bs[i]);
        if (i1 > i2) {
            return true;
        }
    }
    return false;
}

function findLatest(versionList) {
    var max = versionList[0];
    for (var i = 0; i < versionList.length; i++) {
        if (compareVersionLeftBigger(versionList[i].version, max.version)) {
            max = versionList[i];
        }
    }
    return max;
}
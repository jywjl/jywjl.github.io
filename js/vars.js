version_history={
    windows:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v2.0.0.exe'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v1.0.0.exe'
        }
    ],
    android:[
        {
            version:'v2.0.2',
            time:'2019-09-22',
            description:'1.修复会员剩余时间显示',
            url:'http://jywjl.gitee.io/binaries/jywjl_v2.0.2.apk'
        },
        {
            version:'v2.0.1',
            time:'2019-09-07',
            description:'1.迁移到androidx. 2.添加Android 10支持',
            url:'http://jywjl.gitee.io/binaries/jywjl_v2.0.1.apk'
        },
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v2.0.0.apk'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v1.0.0.apk'
        }
    ],
    mac:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v2.0.0.zip'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v1.0.0.zip'
        }
    ],
    linux:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v2.0.0.tar.bz2'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'http://jywjl.gitee.io/binaries/jywjl_v1.0.0.tar.bz2'
        }
    ]
}

function compareVersionLeftBigger(a,b){
    var as=a.split('.');
    var bs=b.split('.');
    for(var i=0;i<a.length;i++){
        var i1=parseInt(as[i]);
        var i2=parseInt(bs[i]);
        if (i1>i2){
            return true;
        }
    }
    return false;
}

function findLatest(versionList){
    var max =versionList[0];
    for (var i=0;i<versionList.length;i++){
        if (compareVersionLeftBigger(versionList[i].version,max.version)){
            max=versionList[i];
        }
    }
    return max;
}
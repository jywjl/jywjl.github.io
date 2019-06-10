version_history={
    windows:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yEWAYN1NAQ-eZJXh7pw684.exe?token=9712770bd0ea697a5f815c109b201fc0&ts=1560136972&attname=jywjl_v2.0.0.exe&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yb2AP8nHAQ8E17THoo8338.exe?token=76d69fe14a04f5c5770dfdc8359fd57f&ts=1560136943&attname=jywjl_v1.0.0.exe&disposition=attachment'
        }
    ],
    android:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yXaAUBsmAMTJ-7EbLLI398.apk?token=555e34dcb81130e023d6ac5b943a6063&ts=1560137072&attname=jywjl_v2.0.0.apk&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yXaAT0XEAMJr5yC40EM219.apk?token=d6761e6b1bdb227a99dfabb09078cac3&ts=1560137048&attname=jywjl_v1.0.0.apk&disposition=attachment'
        }
    ],
    mac:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9x-WAc76FAKpUCqRacbE449.zip?token=b1f40d03865d217075fa342f051a3bfc&ts=1560137125&attname=jywjl_v2.0.0.zip&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9xteAD_a0AKi7dufDPxE055.zip?token=ad171575f807733b07487b153e8229a6&ts=1560137100&attname=jywjl_v1.0.0.zip&disposition=attachment'
        }
    ],
    linux:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yOaAe_alAEwDcXmaJ2E907.bz2?token=98a79a4a4be95514a9db65bae764cf2d&ts=1560137297&attname=jywjl_v2.0.0.tar.bz2&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yOaADk1IAEsgOxRqdaQ858.bz2?token=e08dc3c85f614c6ef4f9e050083291e7&ts=1560137230&attname=jywjl_v1.0.0.tar.bz2&disposition=attachment'
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
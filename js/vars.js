version_history={
    windows:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yEWAYN1NAQ-eZJXh7pw684.exe?token=2548e4712e5fb8ff3dd8a94a9f223648&ts=1565757875&attname=jywjl_v2.0.0.exe&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yb2AP8nHAQ8E17THoo8338.exe?token=fd511c1f962ec0510a44a571f69efc2e&ts=1565757896&attname=jywjl_v1.0.0.exe&disposition=attachment'
        }
    ],
    android:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yXaAUBsmAMTJ-7EbLLI398.apk?token=18ac1304c887023eb038d1351bf32e93&ts=1565757699&attname=jywjl_v2.0.0.apk&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yXaAT0XEAMJr5yC40EM219.apk?token=a4ff11b6cffc2e81bdf01d4ff5fbde18&ts=1565757756&attname=jywjl_v1.0.0.apk&disposition=attachment'
        }
    ],
    mac:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9x-WAc76FAKpUCqRacbE449.zip?token=5df610cd9ab8f9f8beb9558e7a0b2b17&ts=1565757836&attname=jywjl_v2.0.0.zip&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9xteAD_a0AKi7dufDPxE055.zip?token=ae887270591e5cec433b566da8e35bd3&ts=1565757857&attname=jywjl_v1.0.0.zip&disposition=attachment'
        }
    ],
    linux:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yOaAe_alAEwDcXmaJ2E907.bz2?token=f081d037ef7bc695e7af016a0b0fda9f&ts=1565757785&attname=jywjl_v2.0.0.tar.bz2&disposition=attachment'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://files.gitee.com/group1/M00/08/01/PaAvDFz9yOaADk1IAEsgOxRqdaQ858.bz2?token=5f850167c0e14015d45e285c166b146d&ts=1565757818&attname=jywjl_v1.0.0.tar.bz2&disposition=attachmenthttps://files.gitee.com/group1/M00/08/01/PaAvDFz9yOaADk1IAEsgOxRqdaQ858.bz2?token=e08dc3c85f614c6ef4f9e050083291e7&ts=1560137230&attname=jywjl_v1.0.0.tar.bz2&disposition=attachment'
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
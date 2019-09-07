version_history={
    windows:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/3158fccd-f6e4-41de-9d97-136cce0e0cee'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/5172a6bc-4612-4ef0-ae22-e8f3a25f6bc2'
        }
    ],
    android:[
        {
            version:'v2.0.1',
            time:'2019-09-07',
            description:'1.迁移到androidx. 2.添加Android 10支持',
            url:'https://coding.net/s/bd8116bd-1dbf-4035-a617-4abb5fd66c7c'
        },
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/9a2fe80c-07c1-4a9f-a078-f27a3a23f22d'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/66dd8b82-ab68-4828-b123-8b98979aa31e'
        }
    ],
    mac:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/b8d2393a-07ba-40a3-90e9-eda471ad1167'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/c65251ff-0e8a-43ed-b9c2-ad7c606a1868'
        }
    ],
    linux:[
        {
            version:'v2.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/487ec56b-a337-4e01-a392-7caa31175fc2'
        },
        {
            version:'v1.0.0',
            time:'--',
            description:'',
            url:'https://coding.net/s/37fd1a6d-fb45-472e-ac8e-783a6b450504'
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
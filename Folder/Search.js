var Data=[]
var GPS=[]

wait=function(){
    console.log("等待")
}
getData=function(){
    var mdata=JSON.stringify({});
    console.log(mdata);
    str="getData"
    $.post("http://127.0.0.1:80/"+str,mdata,function(data,status){
        console.log(data);
        Data=data["Data"];
    });
}

beginSearching=function(){
    var mcity="郑州";
    var center_x=113.657413;
    var center_y=34.867203;

    var transOptions = {
    city: mcity,
    policy: AMap.TransferPolicy.LEAST_TIME //乘车策略
    // policy: AMap.TransferPolicy.NO_SUBWAY //乘车策略
};

function sleep(delay) {
    var start = (new Date()).getTime();
    while((new Date()).getTime() - start < delay) {
        continue;
    }
}

//构造公交换乘类
var transfer = new AMap.Transfer(transOptions);

    for(var i=0;i<100;i++)
    {

        origin=Data[i][1]
        destination=Data[i][2]
        console.log("查询第"+i+"个:"+origin+"  "+destination)

        //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //公共交通API处理
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    // transfer.leaveAt("2019-6-10","22:00")
    transfer.search([
        {keyword: origin,city:mcity},
        //第一个元素city缺省时取transOptions的city属性
        {keyword: destination,city:mcity}
        //第二个元素city缺省时取transOptions的cityd属性
    ], function(status, result) {
        console.log(result)
        console.log(status)
        // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferResult
        if (status === 'complete') {
            GPS.push([result.origin.lng,result.origin.lat,result.destination.lng,result.destination.lat])
            log.success('绘制公交路线完成')
        } else {
            log.error('公交路线数据查询失败' + result)
        }
    });



    }
}

uploadResult=function(){
    for(var i=0;i<GPS.length;i++)
    {
        Data[i].push(GPS[i][0])
        Data[i].push(GPS[i][1])
        Data[i].push(GPS[i][2])
        Data[i].push(GPS[i][3])
    }


    var mdata=JSON.stringify(Data);
    console.log(mdata)
    var str='saveData';

    $.post("http://127.0.0.1:80/"+str,mdata,function(data,status){

    })
}
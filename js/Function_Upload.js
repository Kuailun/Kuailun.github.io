upload=function(){
    var sendPost=QueryCode.SendPost;

    var start = $("#Start").val();
    var end = $("#End").val();
    var questionID = $("#QuestionID").val();
    var starttime = $("#StartTime").val();
    if(questionID==""&&start==""&&end=="")
    {
        return;
    }
    else if(questionID=="")
    {
        sendPost=QueryCode.LocalSearch;
    }
    else if(start==""&&end=="")
    {
        sendPost=QueryCode.PostDelete;
    }
    else
    {
        sendPost=QueryCode.SendPost;
    }
    mJsonData["Driving"]["Self"]["Time"]=parseInt(mTableData.time_self_driving);
    mJsonData["Driving"]["Self"]["Distance"]=parseFloat(mTableData.dist_self_driving);

    mJsonData["Driving"]["Taxi"]["Time"]=parseInt(mTableData.time_taxi);
    mJsonData["Driving"]["Taxi"]["Distance"]=parseFloat(mTableData.dist_taxi);

    mJsonData["Transfer"]["Cost"]=parseInt(mTableData.cost_tran);
    mJsonData["Transfer"]["Bus"]["Dist"]=parseFloat(mTableData.dist_transit_bus);
    mJsonData["Transfer"]["Subway"]["Dist"]=parseFloat(mTableData.dist_transit_subway);
    mJsonData["Transfer"]["Walk"]["Dist"]=parseFloat(mTableData.dist_transit_walk);
    mJsonData["Transfer"]["Bus"]["Time"]=parseInt(mTableData.time_transit_bus);
    mJsonData["Transfer"]["Subway"]["Time"]=parseInt(mTableData.time_transit_subway);
    mJsonData["Transfer"]["Walk"]["Time"]=parseInt(mTableData.time_transit_walk);
    mJsonData["Transfer"]["Time"]=parseInt(mTableData.time_transit_bus)+parseInt(mTableData.time_transit_subway)+parseInt(mTableData.time_transit_walk);
    mJsonData["Transfer"]["Distance"]=parseFloat((parseFloat(mTableData.dist_transit_bus)+parseFloat(mTableData.dist_transit_subway)+parseFloat(mTableData.dist_transit_walk)).toFixed(1));

    mJsonData["Driving"]["Taxi"]["Cost"]=parseInt(mTableData.cost_taxi);

    mJsonData["Ride"]["Ride"]["Dist"]=parseFloat(mTableData.dist_riding);
    mJsonData["Ride"]["Ride"]["Time"]=parseInt(mTableData.time_riding);

    mJsonData["Ride"]["Walk"]["Dist"]=parseFloat(mTableData.dist_walk);
    mJsonData["Ride"]["Walk"]["Time"]=parseInt(mTableData.time_walk);

    mJsonData["Start"]=start;
    mJsonData["End"]=end;
    mJsonData["StartTime"]=starttime;

    mJsonData["QueryCode"]=sendPost;
    console.log(mJsonData);

    sendData=function(){
        var mdata=JSON.stringify(mJsonData);
        console.log(mdata)
        $.post("http://192.168.43.145:8000/",mdata,function(data,status){
            console.log(data)
        })
    }

    sendData();
}
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
    else if(questionID=="save"||questionID=="Save")
    {
        sendPost=QueryCode.ManualSave;
    }
    else if(start==""||end=="")
    {
        alert("起点及终点尚未提供");
        return;
        // sendPost=QueryCode.PostDelete;
    }
    else
    {
        sendPost=QueryCode.SendPost;
    }

    if(parseInt(mTableData.time_self_driving)==undefined)
    {
        alert("请先查询有关信息");
        return;
    }
    try
    {
        mJsonData["Driving"]["Self"]["Time"]=parseInt(mTableData.C_time_self_driving);
        mJsonData["Driving"]["Self"]["Distance"]=parseFloat(mTableData.C_dist_self_driving);

        mJsonData["Driving"]["Taxi"]["Time"]=parseInt(mTableData.C_time_taxi);
        mJsonData["Driving"]["Taxi"]["Distance"]=parseFloat(mTableData.C_dist_taxi);

        mJsonData["Transfer"]["Cost"]=parseInt(mTableData.C_cost_tran);
        mJsonData["Transfer"]["Bus"]["Dist"]=parseFloat(mTableData.C_dist_transit_bus);
        mJsonData["Transfer"]["Subway"]["Dist"]=parseFloat(mTableData.C_dist_transit_subway);
        mJsonData["Transfer"]["Walk"]["Dist"]=parseFloat(mTableData.C_dist_transit_walk);
        mJsonData["Transfer"]["Bus"]["Time"]=parseInt(mTableData.C_time_transit_bus);
        mJsonData["Transfer"]["Subway"]["Time"]=parseInt(mTableData.C_time_transit_subway);
        mJsonData["Transfer"]["Walk"]["Time"]=parseInt(mTableData.C_time_transit_walk);
        mJsonData["Transfer"]["Time"]=parseInt(mTableData.C_time_transit_bus)+parseInt(mTableData.C_time_transit_subway)+parseInt(mTableData.C_time_transit_walk);
        mJsonData["Transfer"]["Distance"]=parseFloat((parseFloat(mTableData.C_dist_transit_bus)+parseFloat(mTableData.C_dist_transit_subway)+parseFloat(mTableData.C_dist_transit_walk)).toFixed(1));

        mJsonData["Driving"]["Taxi"]["Cost"]=parseInt(mTableData.C_cost_taxi);

        mJsonData["Ride"]["Ride"]["Dist"]=parseFloat(mTableData.C_dist_riding);
        mJsonData["Ride"]["Ride"]["Time"]=parseInt(mTableData.C_time_riding);

        mJsonData["Ride"]["Walk"]["Dist"]=parseFloat(mTableData.C_dist_walk);
        mJsonData["Ride"]["Walk"]["Time"]=parseInt(mTableData.C_time_walk);

        mJsonData["Start"]=start;
        mJsonData["End"]=end;
        mJsonData["StartTime"]=starttime;
        mJsonData["Id"]=questionID;

        mJsonData["QueryCode"]=sendPost;
        console.log(mJsonData);

        sendData(mJsonData,0);
    }
    catch (e) {
        alert("请检查错误");
    }

}

sendData=function(d,f){
    var mdata=JSON.stringify(d);
    console.log(mdata)
    $.post("http://39.105.151.175:80/",mdata,function(data,status){
        if(f==0)
        {
            alert(data)
        }
        else if(f==1)
        {
            $("#QuestionID").val(data);
        }

    })
}

GetID=function(){
    var regString=/[a-zA-Z]+/;
    var questionID = $("#QuestionID").val();
    if(questionID=="")
    {
        alert("请输入要查询的ID代码");
        return;
    }
    if(questionID.length>1)
    {
        alert("请检查输入的ID代码，确保为一位字母，范围A-Y");
        return;
    }
    if(!regString.test(questionID))
    {
        alert("请检查输入的ID代码，确保为一位字母，范围A-Y");
        return;
    }
    questionID=questionID.toUpperCase();

    var IDData={};
    IDData["Id"]=questionID;
    IDData["QueryCode"]=QueryCode.getID;
    sendData(IDData,1);
}
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

        sendPosts(mJsonData,1);
    }
    catch (e) {
        alert("请检查错误");
    }

}

sendPosts=function(data,f){
    var mdata=JSON.stringify(data);
    console.log(mdata)
    var str='';
    switch (f) {
        case 0://获取ID
            str='public/id';
            break;
        case 1://提交数据
            str='public/submit';
            break;
        case 2://查询人数
            str='public/total';
            break;
        case 3:
            break;

    }
    $.post("http://127.0.0.1:80/"+str,mdata,function(data,status){
        if(f==0)
        {
            $("#QuestionID").val(data['Message']);
        }
        else if(f==2)
        {
        console.log(data);
            document.getElementById("Title").innerHTML="欢迎参与郑东新区实验!"+"          "+data['Message']+"/5000";
        }
        else
        {
            alert(data['Message']);
        }

    })
}

GetID=function(){
    var regString=/^[a-zA-Z]{2}/;
    var questionID = $("#QuestionID").val();
    if(questionID=="")
    {
        alert("请输入要查询的ID代码");
        return;
    }
    if(questionID.length!=2)
    {
        alert("请检查输入的ID代码，确保为两位字母，范围A-Z");
        return;
    }
    if(!regString.test(questionID))
    {
        alert("请检查输入的ID代码，确保为两位字母，范围A-Z");
        return;
    }
    questionID=questionID.toUpperCase();

    var IDData={};
    IDData["Id"]=questionID;
    IDData["QueryCode"]=QueryCode.getID;
    sendPosts(IDData,0);
}

window.onload=function(){
    sendPosts({},2);
}
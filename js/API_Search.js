var mcity="郑州";
var center_x=113.657413;
var center_y=34.867203;
var QueryCode={
    LocalSearch:1,
    SendPost:2,
    PostDelete:3,
    getID:4,
    ManualSave:5,
}
var selectValue=0;

var mTableData=
    {
        time_self_driving:0,
        time_taxi:0,
        time_transit_bus:0,
        time_transit_subway:0,
        time_transit_walk:0,
        time_riding:0,
        time_walk:0,
        dist_self_driving:0,
        dist_taxi:0,
        dist_transit_bus:0,
        dist_transit_subway:0,
        dist_transit_walk:0,
        dist_riding:0,
        dist_walk:0,
        cost_taxi:0,
        cost_tran:0
    }

var mJsonData={};
var options={};
options["Health"]={};
options["Health"]["Private"]=0;
options["Health"]["Taxi"]=0;
options["Health"]["TBus"]=0;
options["Health"]["TSubway"]=0;
options["Health"]["TWalk"]=0;
options["Health"]["Bike"]=0;
options["Health"]["Walk"]=0;

options["Social"]={};
options["Social"]["Private"]=0;
options["Social"]["Taxi"]=0;
options["Social"]["TBus"]=0;
options["Social"]["TSubway"]=0;
options["Social"]["TWalk"]=0;
options["Social"]["Bike"]=0;
options["Social"]["Walk"]=0;

options["Pollution1"]={};
options["Pollution1"]["Private"]=0;
options["Pollution1"]["Taxi"]=0;
options["Pollution1"]["TBus"]=0;
options["Pollution1"]["TSubway"]=0;
options["Pollution1"]["TWalk"]=0;
options["Pollution1"]["Bike"]=0;
options["Pollution1"]["Walk"]=0;

options["Pollution2"]={};
options["Pollution2"]["Private"]=0;
options["Pollution2"]["Taxi"]=0;
options["Pollution2"]["TBus"]=0;
options["Pollution2"]["TSubway"]=0;
options["Pollution2"]["TWalk"]=0;
options["Pollution2"]["Bike"]=0;
options["Pollution2"]["Walk"]=0;

$("#search").click(function(){
    mJsonData={};
    mJsonData["Driving"]={"Self":{},"Taxi":{}};
    mJsonData["Transfer"]={"Bus":{},"Subway":{},"Walk":{}};
    mJsonData["Ride"]={"Walk":{},"Ride":{}};

    var start = $("#Start").val();
    var end = $("#End").val();
    var questionID = $("#QuestionID").val();

    mJsonData["Id"]=questionID;

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //处理异常输入
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    if(questionID==""&&start==""&&end=="")
    {
        return;
    }
    if(start==""||end=="")
    {
        alert("请输入起点及终点")
        return;
    }

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //自驾车API处理
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    driving.search([
        {keyword: start,city:mcity,extensions:"all"},
        {keyword: end,city:mcity,extensions:"all"},

    ], function(status, result) {
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
            // console.log(result);
            var tb=document.getElementById("mtable");

            mTableData.time_self_driving=Math.round(result.routes[0].time/60);
            mTableData.dist_self_driving=(result.routes[0].distance/1000).toFixed(1);
            mTableData.time_taxi=Math.round(result.routes[0].time/60);
            mTableData.dist_taxi=(result.routes[0].distance/1000).toFixed(1);

            $("#input-time-1").val(mTableData.time_self_driving);
            var td=tb.rows[3].cells[1];
            td.innerHTML=mTableData.dist_self_driving;
            var td=tb.rows[5].cells[1];

            $("#input-time-2").val(mTableData.time_taxi);
            var td=tb.rows[3].cells[2];
            td.innerHTML=mTableData.dist_taxi;

            calculate(1);

            log.success('绘制驾车路线完成')
        } else {
            log.error('获取驾车数据失败：' + result)
        }
    });

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //公共交通API处理
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    // transfer.leaveAt("2019-6-10","22:00")
    transfer.search([
        {keyword: start,city:mcity},
        //第一个元素city缺省时取transOptions的city属性
        {keyword: end,city:mcity}
        //第二个元素city缺省时取transOptions的cityd属性
    ], function(status, result) {
        console.log(status)
        // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferResult
        if (status === 'complete') {
            var tb=document.getElementById("mtable");

            var bus_dist=0;
            var subway_dist=0;
            var walk_dist=0;
            var bus_t=0;
            var subway_t=0;
            var walk_t=0;

            var mPlan=result.plans[0].segments;
            for(var i=0;i<mPlan.length;i++)
            {
                switch(mPlan[i].transit_mode)
                {
                    case "WALK":
                        walk_dist=walk_dist+mPlan[i].distance;
                        walk_t=walk_t+mPlan[i].time;
                        break;
                    case "SUBWAY":
                        subway_dist=subway_dist+mPlan[i].distance;
                        subway_t=subway_t+mPlan[i].time;
                        break;
                    case "BUS":
                        bus_dist=bus_dist+mPlan[i].distance;
                        bus_t=bus_t+mPlan[i].time;
                        break;
                }
            }

            mTableData.dist_transit_bus=(bus_dist/1000).toFixed(1);
            mTableData.dist_transit_subway=(subway_dist/1000).toFixed(1);
            mTableData.dist_transit_walk=(walk_dist/1000).toFixed(1);
            mTableData.time_transit_bus=Math.round(bus_t/60);
            mTableData.time_transit_subway=Math.round(subway_t/60);
            mTableData.time_transit_walk=Math.round(walk_t/60);

            mTableData.cost_tran=Math.round(result.plans[0].cost);
            mTableData.cost_taxi=result.taxi_cost;

            $("#input-time-3").val(mTableData.time_transit_bus);
            var td=tb.rows[3].cells[4];
            td.innerHTML=mTableData.dist_transit_bus;

            $("#input-time-4").val(mTableData.time_transit_subway);
            var td=tb.rows[3].cells[5];
            td.innerHTML=mTableData.dist_transit_subway;

            $("#input-time-5").val(mTableData.time_transit_walk);
            var td=tb.rows[3].cells[6];
            td.innerHTML=mTableData.dist_transit_walk;

            var td=tb.rows[4].cells[4];
            td.innerHTML=mTableData.cost_tran;

            var td=tb.rows[4].cells[2];
            td.innerHTML=mTableData.cost_taxi;

            calculate(2);

            log.success('绘制公交路线完成')
        } else {
            log.error('公交路线数据查询失败' + result)
        }
    });

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //骑行API处理
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    riding.search([
        {keyword:start,city:mcity},
        {keyword: end,city:mcity}
    ], function(status,result) {
        // result即是对应的骑行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_RidingResult
        if (status === 'complete') {
            // console.log(result);
            var tb=document.getElementById("mtable");

            mTableData.time_riding=Math.round(result.routes[0].time/60);
            mTableData.dist_riding=(result.routes[0].distance/1000).toFixed(1);

            $("#input-time-6").val(mTableData.time_riding);
            var td=tb.rows[3].cells[8];
            td.innerHTML=mTableData.dist_riding;

            calculate(3);
            log.success('绘制骑行路线完成')
        } else {
            log.error('骑行路线数据查询失败' + result)
        }
    });

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    //步行API处理
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    walking.search([
        {keyword: start,city:mcity},
        {keyword: end,city:mcity}
    ], function(status, result) {
        // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        if (status === 'complete') {
            // console.log(result);
            var tb=document.getElementById("mtable");

            mTableData.time_walk=Math.round(result.routes[0].time/60);
            mTableData.dist_walk=(result.routes[0].distance/1000).toFixed(1);

            $("#input-time-7").val(mTableData.time_walk);
            var td=tb.rows[3].cells[9];
            td.innerHTML=mTableData.dist_walk;

            calculate(4);

            log.success('绘制步行路线完成')
        } else {
            log.error('步行路线数据查询失败' + result)
        }
    });
});


getValue=function()
{
    selectValue=$("#MSelect").val();
    if(selectValue==0)
    {
        document.getElementById("Options1").style.visibility="hidden";
        document.getElementById("Options2").style.visibility="hidden";
        document.getElementById("Options3").style.visibility="hidden";
        document.getElementById("Options4").style.visibility="hidden";
    }
    else if(selectValue==1)
    {
        document.getElementById("Options1").style.visibility="visible";
        document.getElementById("Options2").style.visibility="hidden";
        document.getElementById("Options3").style.visibility="hidden";
        document.getElementById("Options4").style.visibility="hidden";
    }
    else if(selectValue==2)
    {
        document.getElementById("Options2").style.visibility="visible";
        document.getElementById("Options1").style.visibility="hidden";
        document.getElementById("Options3").style.visibility="hidden";
        document.getElementById("Options4").style.visibility="hidden";
    }
    else
    {
        document.getElementById("Options3").style.visibility="visible";
        document.getElementById("Options4").style.visibility="visible";
        document.getElementById("Options1").style.visibility="hidden";
        document.getElementById("Options2").style.visibility="hidden";
    }
}

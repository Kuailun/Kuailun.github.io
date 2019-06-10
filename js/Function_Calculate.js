calculate=function(section)
{
    var tb=document.getElementById("mtable");

    mTableData.time_self_driving=$("#input-time-1").val();
    mTableData.time_taxi=$("#input-time-2").val();

    mTableData.time_transit_bus=$("#input-time-3").val();
    mTableData.time_transit_subway=$("#input-time-4").val();
    mTableData.time_transit_walk=$("#input-time-5").val();

    mTableData.time_riding=$("#input-time-6").val();
    mTableData.time_walk=$("#input-time-7").val();
    switch(section)
    {
        case 0:
            var td=tb.rows[5].cells[1];
            td.innerHTML=(mTableData.dist_self_driving*3.5).toFixed(1);
            var td=tb.rows[6].cells[1];
            td.innerHTML=(mTableData.dist_self_driving*270.57).toFixed(1);
            var td=tb.rows[7].cells[1];
            td.innerHTML=(mTableData.time_self_driving*0.152*200).toFixed(1);
            var td=tb.rows[8].cells[1];
            td.innerHTML=(mTableData.time_self_driving*0.152*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[2];
            td.innerHTML=(mTableData.dist_taxi*3.5).toFixed(1);
            var td=tb.rows[6].cells[2];
            td.innerHTML=(mTableData.dist_taxi*270.57).toFixed(1);
            var td=tb.rows[7].cells[2];
            td.innerHTML=(mTableData.time_taxi*0.152*200).toFixed(1);
            var td=tb.rows[8].cells[2];
            td.innerHTML=(mTableData.time_taxi*0.152*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[4];
            td.innerHTML=(mTableData.dist_transit_bus*5).toFixed(1);
            var td=tb.rows[6].cells[4];
            td.innerHTML=(mTableData.dist_transit_bus*180.38).toFixed(1);
            var td=tb.rows[7].cells[4];
            td.innerHTML=(mTableData.time_transit_bus*0.72*200).toFixed(1);
            var td=tb.rows[8].cells[4];
            td.innerHTML=(mTableData.time_transit_bus*0.72*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[5];
            td.innerHTML=(mTableData.dist_transit_subway*5).toFixed(1);
            var td=tb.rows[6].cells[5];
            td.innerHTML=(mTableData.dist_transit_subway*101.466).toFixed(1);
            var td=tb.rows[7].cells[5];
            td.innerHTML=(mTableData.time_transit_subway*0.3283*200).toFixed(1);
            var td=tb.rows[8].cells[5];
            td.innerHTML=(mTableData.time_transit_subway*0.3283*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[6];
            td.innerHTML=(mTableData.dist_transit_walk*73).toFixed(1);
            var td=tb.rows[6].cells[6];
            td.innerHTML=(mTableData.dist_transit_walk*0).toFixed(1);
            var td=tb.rows[7].cells[6];
            td.innerHTML=(mTableData.time_transit_walk*1*200).toFixed(1);
            var td=tb.rows[8].cells[6];
            td.innerHTML=(mTableData.time_transit_walk*1*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[8];
            td.innerHTML=(mTableData.dist_riding*30).toFixed(1);
            var td=tb.rows[6].cells[8];
            td.innerHTML=(mTableData.dist_riding*0).toFixed(1);
            var td=tb.rows[7].cells[8];
            td.innerHTML=(mTableData.time_riding*1*200).toFixed(1);
            var td=tb.rows[8].cells[8];
            td.innerHTML=(mTableData.time_riding*1*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[9];
            td.innerHTML=(mTableData.dist_walk*73).toFixed(1);
            var td=tb.rows[6].cells[9];
            td.innerHTML=(mTableData.dist_walk*0).toFixed(1);
            var td=tb.rows[7].cells[9];
            td.innerHTML=(mTableData.time_walk*1*200).toFixed(1);
            var td=tb.rows[8].cells[9];
            td.innerHTML=(mTableData.time_walk*1*200/22/24/60).toFixed(2);

            break;
        case 1:
            var td=tb.rows[5].cells[1];
            td.innerHTML=(mTableData.dist_self_driving*3.5).toFixed(1);
            var td=tb.rows[6].cells[1];
            td.innerHTML=(mTableData.dist_self_driving*270.57).toFixed(1);
            var td=tb.rows[7].cells[1];
            td.innerHTML=(mTableData.time_self_driving*0.152*200).toFixed(1);
            var td=tb.rows[8].cells[1];
            td.innerHTML=(mTableData.time_self_driving*0.152*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[2];
            td.innerHTML=(mTableData.dist_taxi*3.5).toFixed(1);
            var td=tb.rows[6].cells[2];
            td.innerHTML=(mTableData.dist_taxi*270.57).toFixed(1);
            var td=tb.rows[7].cells[2];
            td.innerHTML=(mTableData.time_taxi*0.152*200).toFixed(1);
            var td=tb.rows[8].cells[2];
            td.innerHTML=(mTableData.time_taxi*0.152*200/22/24/60).toFixed(2);
            break;
        case 2:
            var td=tb.rows[5].cells[4];
            td.innerHTML=(mTableData.dist_transit_bus*5).toFixed(1);
            var td=tb.rows[6].cells[4];
            td.innerHTML=(mTableData.dist_transit_bus*180.38).toFixed(1);
            var td=tb.rows[7].cells[4];
            td.innerHTML=(mTableData.time_transit_bus*0.72*200).toFixed(1);
            var td=tb.rows[8].cells[4];
            td.innerHTML=(mTableData.time_transit_bus*0.72*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[5];
            td.innerHTML=(mTableData.dist_transit_subway*5).toFixed(1);
            var td=tb.rows[6].cells[5];
            td.innerHTML=(mTableData.dist_transit_subway*101.466).toFixed(1);
            var td=tb.rows[7].cells[5];
            td.innerHTML=(mTableData.time_transit_subway*0.3283*200).toFixed(1);
            var td=tb.rows[8].cells[5];
            td.innerHTML=(mTableData.time_transit_subway*0.3283*200/22/24/60).toFixed(2);

            var td=tb.rows[5].cells[6];
            td.innerHTML=(mTableData.dist_transit_walk*73).toFixed(1);
            var td=tb.rows[6].cells[6];
            td.innerHTML=(mTableData.dist_transit_walk*0).toFixed(1);
            var td=tb.rows[7].cells[6];
            td.innerHTML=(mTableData.time_transit_walk*1*200).toFixed(1);
            var td=tb.rows[8].cells[6];
            td.innerHTML=(mTableData.time_transit_walk*1*200/22/24/60).toFixed(2);
            break;
        case 3:
            var td=tb.rows[5].cells[8];
            td.innerHTML=(mTableData.dist_riding*30).toFixed(1);
            var td=tb.rows[6].cells[8];
            td.innerHTML=(mTableData.dist_riding*0).toFixed(1);
            var td=tb.rows[7].cells[8];
            td.innerHTML=(mTableData.time_riding*1*200).toFixed(1);
            var td=tb.rows[8].cells[8];
            td.innerHTML=(mTableData.time_riding*1*200/22/24/60).toFixed(2);
            break;
        case 4:
            var td=tb.rows[5].cells[9];
            td.innerHTML=(mTableData.dist_walk*73).toFixed(1);
            var td=tb.rows[6].cells[9];
            td.innerHTML=(mTableData.dist_walk*0).toFixed(1);
            var td=tb.rows[7].cells[9];
            td.innerHTML=(mTableData.time_walk*1*200).toFixed(1);
            var td=tb.rows[8].cells[9];
            td.innerHTML=(mTableData.time_walk*1*200/22/24/60).toFixed(2);
            break;
    }

}
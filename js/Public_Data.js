/**
 * 修改此处参数
 * @type {{LocalSearch: number, getID: number, SendPost: number, ManualSave: number, PostDelete: number}}
 */
var AQI=117;

/**
 * 请勿修改此处参数
 * @type {{LocalSearch: number, getID: number, SendPost: number, ManualSave: number, PostDelete: number}}
 */

//回传服务器的代码号
var QueryCode={
    LocalSearch:1,
    SendPost:2,
    PostDelete:3,
    getID:4,
    ManualSave:5,
}

//下拉菜单的选项值
var selectValue=0;

//Json数据，回传服务器用
var mJsonData={};

//P-C关系
var rate_P_C={
    direct:[AQI*2*22*0.152, AQI*2*22*0.152,  AQI*2*22*0.72,   AQI*2*22*0.3381, AQI*2*22*1,  AQI*2*22*1,  AQI*2*22*1],
    equal:[AQI*2*0.152/24/60, AQI*2*0.152/24/60,  AQI*2*0.72/24/60,   AQI*2*0.3381/24/60, AQI*2*1/24/60,  AQI*2*1/24/60,  AQI*2*1/24/60],
}
var data_P=[];
var data_PE=[];
var table_P=[];
var table_PE=[];

//H-C关系
var rate_H_C={
    direct: [154,154,176,176,3212,1320,3212],
    equal:  [0.0198,0.0198,0.022629,0.022629,0.412971,0.169714,0.412971],
}
var data_H=[];
var data_HE=[];
var table_H=[];
var table_HE=[];

//S1-C关系
var rate_S1_C={
    direct:[132,132,528,440,0,0,0],
    equal:[1.27298,1.27298,5.09194,4.24328,0,0,0],
}
var data_S1=[];
var data_S1E=[];
var table_S1=[];
var table_S1E=[];

//S2-C关系
var rate_S2_C={
    direct:[11906.4,11906.4,7937.6,4466,0,0,0],
    equal:[0.65062,0.65062,0.433749,0.244043,0,0,0],
}
var data_S2=[];
var data_S2E=[];
var table_S2=[];
var table_S2E=[];

//表格数据
var mTableData=
{
    //C1:查询数据
    C_time_self_driving: 0,
    C_time_taxi: 0,
    C_time_transit_bus: 0,
    C_time_transit_subway: 0,
    C_time_transit_walk: 0,
    C_time_riding: 0,
    C_time_walk: 0,
    C_dist_self_driving: 0,
    C_dist_taxi: 0,
    C_dist_transit_bus: 0,
    C_dist_transit_subway: 0,
    C_dist_transit_walk: 0,
    C_dist_riding: 0,
    C_dist_walk: 0,
    C_cost_taxi: 0,
    C_cost_tran: 0,

    //P:污染暴露
    P_self_driving:0,
    P_taxi:0,
    P_transit_bus:0,
    P_transit_subway:0,
    P_transit_walk:0,
    P_riding:0,
    P_walk:0,

    //PE:污染暴露等价
    PE_self_driving:0,
    PE_taxi:0,
    PE_transit_bus:0,
    PE_transit_subway:0,
    PE_transit_walk:0,
    PE_riding:0,
    PE_walk:0,

    //H:健康情况
    H_self_driving:0,
    H_taxi:0,
    H_transit_bus:0,
    H_transit_subway:0,
    H_transit_walk:0,
    H_riding:0,
    H_walk:0,

    //HE:健康情况等价
    HE_self_driving:0,
    HE_taxi:0,
    HE_transit_bus:0,
    HE_transit_subway:0,
    HE_transit_walk:0,
    HE_riding:0,
    HE_walk:0,

    //S1:社会外部1
    S1_self_driving:0,
    S1_taxi:0,
    S1_transit_bus:0,
    S1_transit_subway:0,
    S1_transit_walk:0,
    S1_riding:0,
    S1_walk:0,

    //S1E:社会外部1等价
    S1E_self_driving:0,
    S1E_taxi:0,
    S1E_transit_bus:0,
    S1E_transit_subway:0,
    S1E_transit_walk:0,
    S1E_riding:0,
    S1E_walk:0,

    //S2:社会外部2
    S2_self_driving:0,
    S2_taxi:0,
    S2_transit_bus:0,
    S2_transit_subway:0,
    S2_transit_walk:0,
    S2_riding:0,
    S2_walk:0,

    //S2E:社会外部2等价
    S2E_self_driving:0,
    S2E_taxi:0,
    S2E_transit_bus:0,
    S2E_transit_subway:0,
    S2E_transit_walk:0,
    S2E_riding:0,
    S2E_walk:0,
}
//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// 自驾车地图显示
//===== ===== ===== ===== ===== ===== ===== ===== ===== =====

//基本地图加载
var map1 = new AMap.Map("map-1", {
    resizeEnable: true,
    center: [center_x, center_y],//地图中心点
    zoom: 13 //地图显示的缩放级别
});
//构造路线导航类
var driving = new AMap.Driving({
    map: map1,
    panel: "panel1"
});

//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// 公共交通地图显示
//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
var map2 = new AMap.Map("map-2", {
    resizeEnable: true,
    center: [center_x, center_y],//地图中心点
    zoom: 13
});
var transOptions = {
    map: map2,
    city: mcity,
    panel: 'panel2',
    policy: AMap.TransferPolicy.LEAST_TIME //乘车策略
    // policy: AMap.TransferPolicy.NO_SUBWAY //乘车策略
};
//构造公交换乘类
var transfer = new AMap.Transfer(transOptions);

//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// 骑行导航地图显示
//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
var map3 = new AMap.Map("map-4", {
    resizeEnable: true,
    center: [center_x,center_y],//地图中心点
    zoom: 13 //地图显示的缩放级别
});
//步行导航
var riding = new AMap.Riding({
    map: map3,
    panel: "panel4"
});

//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
// 步行导航地图显示
//===== ===== ===== ===== ===== ===== ===== ===== ===== =====
var map4 = new AMap.Map("map-5", {
    resizeEnable: true,
    center: [center_x, center_y],//地图中心点
    zoom: 13 //地图显示的缩放级别
});
//步行导航
var walking = new AMap.Walking({
    map: map4,
    panel: "panel5"
});
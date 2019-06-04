
// 百度地图API功能
var map = new BMap.Map("map-1");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);

var start = "百度大厦";
var end = "北京邮电大学西门";
var routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME,BMAP_TRANSIT_POLICY_LEAST_TRANSFER,BMAP_TRANSIT_POLICY_LEAST_WALKING,BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
var transit = new BMap.TransitRoute(map, {
    renderOptions: {map: map},
    policy: 0
});
$("#result").click(function(){
    map.clearOverlays();
    var i=$("#driving_way select").val();
    search(start,end,routePolicy[i]);
    function search(start,end,route){
        transit.setPolicy(route);
        transit.search(start,end);
    }
});
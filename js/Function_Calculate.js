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
var open_cover_img = function(url){
    // $("#cover_img").attr("src",url);
    // $("#cover_img").attr("width","50%");
    // $("#cover_img").attr("height","50%");
    // $("#cover_img").attr("src",url);


    var dom = document.getElementById("show_container");

    selectValue=$("#MSelect").val();

    var myChart = echarts.init(dom);
    var app = {};
    var ROOT_PATH=window.location.host;
    var Icons = {
        'Car': ROOT_PATH+'resource/automobile.png',
        'Bus': ROOT_PATH+'resource/buses.png',
        'Bike': ROOT_PATH+'resource/bicycle.png',
        'Walk': ROOT_PATH+'resource/walker.png'
    };
    option = null;
    if(selectValue==0)
    {
        $('#chart_title').text("出行方式对比：时间、距离");
        var seriesLabel = {
            normal: {
                show: true,
                textBorderColor: '#333',
                textBorderWidth: 2
            }
        }

        option = {
            // title: {
            //     text: '出行方式：时间、距离对比'
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['距离', '时间']
            },
            grid: {
                left: 100
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'value',
                name: '距离, 时间',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['Car', 'Bus','Bike','Walk'],
                axisLabel: {
                    formatter: function (value) {
                        return '{' + value + '| }\n{value|' + value + '}';
                    },
                    margin: 20,
                    rich: {
                        value: {
                            lineHeight: 30,
                            align: 'center'
                        },
                        Car: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Car
                            }
                        },
                        Bus: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Bus
                            }
                        },
                        Bike: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Bike
                            }
                        },
                        Walk: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Walk
                            }
                        }
                    }
                }
            },
            series: [
                {
                    name: '距离',
                    type: 'bar',
                    data: [7,5,12,15],
                    label: seriesLabel,
                    markPoint: {
                        symbolSize: 1,
                        symbolOffset: [0, '50%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                                backgroundColor: 'rgb(242,242,242)',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                padding: [4, 10],
                                lineHeight: 26,
                                // shadowBlur: 5,
                                // shadowColor: '#000',
                                // shadowOffsetX: 0,
                                // shadowOffsetY: 1,
                                position: 'right',
                                distance: 20,
                                rich: {
                                    a: {
                                        align: 'center',
                                        color: '#fff',
                                        fontSize: 18,
                                        textShadowBlur: 2,
                                        textShadowColor: '#000',
                                        textShadowOffsetX: 0,
                                        textShadowOffsetY: 1,
                                        textBorderColor: '#333',
                                        textBorderWidth: 2
                                    },
                                    b: {
                                        color: '#333'
                                    },
                                    c: {
                                        color: '#ff8811',
                                        textBorderColor: '#000',
                                        textBorderWidth: 1,
                                        fontSize: 22
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    name: '时间',
                    type: 'bar',
                    label: seriesLabel,
                    data: [35, 44, 65,120]
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    else if(selectValue==1)
    {
        var seriesLabel = {
            normal: {
                show: true,
                textBorderColor: '#333',
                textBorderWidth: 2
            }
        }

        option = {
            // title: {
            //     text: '出行方式：时间、距离对比'
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['距离', '时间']
            },
            grid: {
                left: 100
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'value',
                name: 'Days',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['Car', 'Bus','Bike','Walk'],
                axisLabel: {
                    formatter: function (value) {
                        return '{' + value + '| }\n{value|' + value + '}';
                    },
                    margin: 20,
                    rich: {
                        value: {
                            lineHeight: 30,
                            align: 'center'
                        },
                        Car: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Car
                            }
                        },
                        Bus: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Bus
                            }
                        },
                        Bike: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Bike
                            }
                        },
                        Walk: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: Icons.Walk
                            }
                        }
                    }
                }
            },
            series: [
                {
                    name: '距离',
                    type: 'bar',
                    data: [32,35,42,45],
                    label: seriesLabel,
                    markPoint: {
                        symbolSize: 1,
                        symbolOffset: [0, '50%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                                backgroundColor: 'rgb(242,242,242)',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                padding: [4, 10],
                                lineHeight: 26,
                                // shadowBlur: 5,
                                // shadowColor: '#000',
                                // shadowOffsetX: 0,
                                // shadowOffsetY: 1,
                                position: 'right',
                                distance: 20,
                                rich: {
                                    a: {
                                        align: 'center',
                                        color: '#fff',
                                        fontSize: 18,
                                        textShadowBlur: 2,
                                        textShadowColor: '#000',
                                        textShadowOffsetX: 0,
                                        textShadowOffsetY: 1,
                                        textBorderColor: '#333',
                                        textBorderWidth: 2
                                    },
                                    b: {
                                        color: '#333'
                                    },
                                    c: {
                                        color: '#ff8811',
                                        textBorderColor: '#000',
                                        textBorderWidth: 1,
                                        fontSize: 22
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    name: '时间',
                    type: 'bar',
                    label: seriesLabel,
                    data: [35, 44, 65,120]
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    $("#enlarge").show();
};
var close_cover_img = function(){
    $("#enlarge").hide();
};
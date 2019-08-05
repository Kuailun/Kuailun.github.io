calculate = function (section) {
    var tb = document.getElementById("mtable");

    mTableData.C_time_self_driving = $("#input-time-1").val();
    mTableData.C_time_taxi = $("#input-time-2").val();

    mTableData.C_time_transit_bus = $("#input-time-3").val();
    mTableData.C_time_transit_subway = $("#input-time-4").val();
    mTableData.C_time_transit_walk = $("#input-time-5").val();

    mTableData.C_dist_transit_bus=$("#input-dist-3").val();
    mTableData.C_dist_transit_subway=$("#input-dist-4").val();
    mTableData.C_dist_transit_walk=$("#input-dist-5").val();

    mTableData.C_time_riding = $("#input-time-6").val();
    mTableData.C_time_walk = $("#input-time-7").val();

    calculate_rate();
    calculate_P_C();
    calculate_H_C();
    calculate_S1_C();
    calculate_S2_C();
    getValue();

}
calculate_rate=function(){
    rate_P_C={
        direct:[AQI*2*22*0.152, AQI*2*22*0.152,  AQI*2*22*0.72,   AQI*2*22*0.3381, AQI*2*22*1,  AQI*2*22*1,  AQI*2*22*1],
        equal:[AQI*2*0.152/24/60, AQI*2*0.152/24/60,  AQI*2*0.72/24/60,   AQI*2*0.3381/24/60, AQI*2*1/24/60,  AQI*2*1/24/60,  AQI*2*1/24/60],
    }

}
calculate_P_C = function () {
    mTableData.P_self_driving   = (rate_P_C.direct[0] * mTableData.C_time_self_driving).toFixed(2);
    mTableData.P_taxi           = (rate_P_C.direct[1] * mTableData.C_time_taxi).toFixed(2);
    mTableData.P_transit_bus    = (rate_P_C.direct[2] * mTableData.C_time_transit_bus).toFixed(2);
    mTableData.P_transit_subway = (rate_P_C.direct[3] * mTableData.C_time_transit_subway).toFixed(2);
    mTableData.P_transit_walk   = (rate_P_C.direct[4] * mTableData.C_time_transit_walk).toFixed(2);
    mTableData.P_riding         = (rate_P_C.direct[5] * mTableData.C_time_riding).toFixed(2);
    mTableData.P_walk           = (rate_P_C.direct[6] * mTableData.C_time_walk).toFixed(2);
    data_P=[mTableData.P_self_driving,mTableData.P_taxi,mTableData.P_transit_bus,mTableData.P_transit_subway,mTableData.P_transit_walk,mTableData.P_riding,mTableData.P_walk];

    mTableData.PE_self_driving   = (rate_P_C.equal[0] * mTableData.C_time_self_driving).toFixed(2);
    mTableData.PE_taxi           = (rate_P_C.equal[1] * mTableData.C_time_taxi).toFixed(2);
    mTableData.PE_transit_bus    = (rate_P_C.equal[2] * mTableData.C_time_transit_bus).toFixed(2);
    mTableData.PE_transit_subway = (rate_P_C.equal[3] * mTableData.C_time_transit_subway).toFixed(2);
    mTableData.PE_transit_walk   = (rate_P_C.equal[4] * mTableData.C_time_transit_walk).toFixed(2);
    mTableData.PE_riding         = (rate_P_C.equal[5] * mTableData.C_time_riding).toFixed(2);
    mTableData.PE_walk           = (rate_P_C.equal[6] * mTableData.C_time_walk).toFixed(2);
    data_PE=[mTableData.PE_self_driving,mTableData.PE_taxi,mTableData.PE_transit_bus,mTableData.PE_transit_subway,mTableData.PE_transit_walk,mTableData.PE_riding,mTableData.PE_walk];
}
calculate_H_C=function(){
    mTableData.H_self_driving   = (rate_H_C.direct[0] * mTableData.C_time_self_driving).toFixed(2);
    mTableData.H_taxi           = (rate_H_C.direct[1] * mTableData.C_time_taxi).toFixed(2);
    mTableData.H_transit_bus    = (rate_H_C.direct[2] * mTableData.C_time_transit_bus).toFixed(2);
    mTableData.H_transit_subway = (rate_H_C.direct[3] * mTableData.C_time_transit_subway).toFixed(2);
    mTableData.H_transit_walk   = (rate_H_C.direct[4] * mTableData.C_time_transit_walk).toFixed(2);
    mTableData.H_riding         = (rate_H_C.direct[5] * mTableData.C_time_riding).toFixed(2);
    mTableData.H_walk           = (rate_H_C.direct[6] * mTableData.C_time_walk).toFixed(2);
    data_H=[mTableData.H_self_driving,mTableData.H_taxi,mTableData.H_transit_bus,mTableData.H_transit_subway,mTableData.H_transit_walk,mTableData.H_riding,mTableData.H_walk];

    mTableData.HE_self_driving   = (rate_H_C.equal[0] * mTableData.C_time_self_driving).toFixed(2);
    mTableData.HE_taxi           = (rate_H_C.equal[1] * mTableData.C_time_taxi).toFixed(2);
    mTableData.HE_transit_bus    = (rate_H_C.equal[2] * mTableData.C_time_transit_bus).toFixed(2);
    mTableData.HE_transit_subway = (rate_H_C.equal[3] * mTableData.C_time_transit_subway).toFixed(2);
    mTableData.HE_transit_walk   = (rate_H_C.equal[4] * mTableData.C_time_transit_walk).toFixed(2);
    mTableData.HE_riding         = (rate_H_C.equal[5] * mTableData.C_time_riding).toFixed(2);
    mTableData.HE_walk           = (rate_H_C.equal[6] * mTableData.C_time_walk).toFixed(2);
    data_HE=[mTableData.HE_self_driving,mTableData.HE_taxi,mTableData.HE_transit_bus,mTableData.HE_transit_subway,mTableData.HE_transit_walk,mTableData.HE_riding,mTableData.HE_walk];
}
calculate_S1_C=function(){
    mTableData.S1_self_driving   = (rate_S1_C.direct[0] * mTableData.C_dist_self_driving).toFixed(2);
    mTableData.S1_taxi           = (rate_S1_C.direct[1] * mTableData.C_dist_taxi).toFixed(2);
    mTableData.S1_transit_bus    = (rate_S1_C.direct[2] * mTableData.C_dist_transit_bus).toFixed(2);
    mTableData.S1_transit_subway = (rate_S1_C.direct[3] * mTableData.C_dist_transit_subway).toFixed(2);
    mTableData.S1_transit_walk   = (rate_S1_C.direct[4] * mTableData.C_dist_transit_walk).toFixed(2);
    mTableData.S1_riding         = (rate_S1_C.direct[5] * mTableData.C_dist_riding).toFixed(2);
    mTableData.S1_walk           = (rate_S1_C.direct[6] * mTableData.C_dist_walk).toFixed(2);
    data_S1=[mTableData.S1_self_driving,mTableData.S1_taxi,mTableData.S1_transit_bus,mTableData.S1_transit_subway,mTableData.S1_transit_walk,mTableData.S1_riding,mTableData.S1_walk];

    mTableData.S1E_self_driving   = (rate_S1_C.equal[0] * mTableData.C_dist_self_driving).toFixed(2);
    mTableData.S1E_taxi           = (rate_S1_C.equal[1] * mTableData.C_dist_taxi).toFixed(2);
    mTableData.S1E_transit_bus    = (rate_S1_C.equal[2] * mTableData.C_dist_transit_bus).toFixed(2);
    mTableData.S1E_transit_subway = (rate_S1_C.equal[3] * mTableData.C_dist_transit_subway).toFixed(2);
    mTableData.S1E_transit_walk   = (rate_S1_C.equal[4] * mTableData.C_dist_transit_walk).toFixed(2);
    mTableData.S1E_riding         = (rate_S1_C.equal[5] * mTableData.C_dist_riding).toFixed(2);
    mTableData.S1E_walk           = (rate_S1_C.equal[6] * mTableData.C_dist_walk).toFixed(2);
    data_S1E=[mTableData.S1E_self_driving,mTableData.S1E_taxi,mTableData.S1E_transit_bus,mTableData.S1E_transit_subway,mTableData.S1E_transit_walk,mTableData.S1E_riding,mTableData.S1E_walk];
}
calculate_S2_C=function(){
    mTableData.S2_self_driving   = (rate_S2_C.direct[0] * mTableData.C_dist_self_driving).toFixed(2);
    mTableData.S2_taxi           = (rate_S2_C.direct[1] * mTableData.C_dist_taxi).toFixed(2);
    mTableData.S2_transit_bus    = (rate_S2_C.direct[2] * mTableData.C_dist_transit_bus).toFixed(2);
    mTableData.S2_transit_subway = (rate_S2_C.direct[3] * mTableData.C_dist_transit_subway).toFixed(2);
    mTableData.S2_transit_walk   = (rate_S2_C.direct[4] * mTableData.C_dist_transit_walk).toFixed(2);
    mTableData.S2_riding         = (rate_S2_C.direct[5] * mTableData.C_dist_riding).toFixed(2);
    mTableData.S2_walk           = (rate_S2_C.direct[6] * mTableData.C_dist_walk).toFixed(2);
    data_S2=[mTableData.S2_self_driving,mTableData.S2_taxi,mTableData.S2_transit_bus,mTableData.S2_transit_subway,mTableData.S2_transit_walk,mTableData.S2_riding,mTableData.S2_walk];

    mTableData.S2E_self_driving   = (rate_S2_C.equal[0] * mTableData.C_dist_self_driving).toFixed(2);
    mTableData.S2E_taxi           = (rate_S2_C.equal[1] * mTableData.C_dist_taxi).toFixed(2);
    mTableData.S2E_transit_bus    = (rate_S2_C.equal[2] * mTableData.C_dist_transit_bus).toFixed(2);
    mTableData.S2E_transit_subway = (rate_S2_C.equal[3] * mTableData.C_dist_transit_subway).toFixed(2);
    mTableData.S2E_transit_walk   = (rate_S2_C.equal[4] * mTableData.C_dist_transit_walk).toFixed(2);
    mTableData.S2E_riding         = (rate_S2_C.equal[5] * mTableData.C_dist_riding).toFixed(2);
    mTableData.S2E_walk           = (rate_S2_C.equal[6] * mTableData.C_dist_walk).toFixed(2);
    data_S2E=[mTableData.S2E_self_driving,mTableData.S2E_taxi,mTableData.S2E_transit_bus,mTableData.S2E_transit_subway,mTableData.S2E_transit_walk,mTableData.S2E_riding,mTableData.S2E_walk];
}
calculate_money=function(mean,std_dev){
    var money=mean+(randomNormalDistribution()*std_dev);
    if (money <= 1) {
        money= 1;
    }
    else if (money > 50) {
        money=50;
    }
    money=Math.floor(money);
    alert("恭喜您获得"+money+"元红包奖励！");
}

function randomNormalDistribution() {
    var u = 0.0, v = 0.0, w = 0.0, c = 0.0;
    do {
        //获得两个（-1,1）的独立随机变量
        u = Math.random() * 2 - 1.0;
        v = Math.random() * 2 - 1.0;
        w = u * u + v * v;
    } while (w == 0.0 || w >= 1.0)
    //这里就是 Box-Muller转换
    c = Math.sqrt((-2 * Math.log(w)) / w);
    //返回2个标准正态分布的随机数，封装进一个数组返回
    //当然，因为这个函数运行较快，也可以扔掉一个
    //return [u*c,v*c];
    return u * c;
}
var put_data_in_Grid=function(num,d){
    var td;
    if(num==1)
    {
        td=$("#Options1 td");
    }
    else if(num==2)
    {
        td=$("#Options2 td");
    }
    d=round_data(d);
    $(td[0]).html(d[0]);
    $(td[1]).html(d[1]);
    $(td[3]).html(d[2]);
    $(td[4]).html(d[3]);
    $(td[5]).html(d[4]);
    $(td[7]).html(d[5]);
    $(td[8]).html(d[6]);
}
var round_data=function(d){
    for(var i=0;i<d.length;i++)
    {
        if(d[i]/1000>=1)
        {
            d[i]=Math.floor(d[i]);
        }
    }
    return d;
}
var merge_data=function(s,t){
    t=[parseFloat(s[0]),(parseFloat(s[2])+parseFloat(s[3])+parseFloat(s[4])).toFixed(2),parseFloat(s[5]),parseFloat(s[6])];
    return t;
}
var open_cover_img0 = function (url) {
    var dom = document.getElementById("show_container0");

    selectValue = $("#MSelect").val();

    var myChart = echarts.init(dom);
    var app = {};
    var ROOT_PATH = window.location.host;
    var Icons = {
        'Car': ROOT_PATH + 'resource/automobile.png',
        'Bus': ROOT_PATH + 'resource/buses.png',
        'Bike': ROOT_PATH + 'resource/bicycle.png',
        'Walk': ROOT_PATH + 'resource/walker.png'
    };
    option = null;
    if(selectValue==0)
    {

    }
    else if (selectValue == 1) {
        $('#chart_title0').text("预期减重(千克/月)");
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
                data: ['预期减重']
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
                name: '千克/月',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['机动车', '公交交通', '骑行', '步行'],
                axisLabel: {
                    formatter: function (value) {
                        return '\n{value|' + value + '}';
                    },
                    margin: 20,
                    rich: {
                        value: {
                            lineHeight: 30,
                            align: 'center'
                        },
                        机动车: {
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
                    name: '减重量',
                    type: 'bar',
                    data: table_HE,
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
                // {
                //     name: '时间',
                //     type: 'bar',
                //     label: seriesLabel,
                //     data: [35, 44, 65, 120]
                // }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    else if (selectValue == 2) {
        $('#chart_title0').text("香烟燃烧根数(根/月)");
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
                data: ['燃烧数量']
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
                name: '燃烧数量',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['机动车', '公交交通', '骑行', '步行'],
                axisLabel: {
                    formatter: function (value) {
                        return '\n{value|' + value + '}';
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
                    name: '燃烧根数',
                    type: 'bar',
                    data: table_S1E,
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
                                        fontSize: 28,
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
                // {
                //     name: '时间',
                //     type: 'bar',
                //     label: seriesLabel,
                //     data: [35, 44, 65, 120]
                // }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    else if (selectValue == 3) {
        $('#chart_title0').text("吸收所需树木(棵/月)");
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
                data: ['吸烟数量']
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
                name: '树木数量',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['机动车', '公交交通', '骑行', '步行'],
                axisLabel: {
                    formatter: function (value) {
                        return '\n{value|' + value + '}';
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
                    name: '树木根数',
                    type: 'bar',
                    data: table_S2E,
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
                                        fontSize: 28,
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
                // {
                //     name: '时间',
                //     type: 'bar',
                //     label: seriesLabel,
                //     data: [35, 44, 65, 120]
                // }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    else if (selectValue == 4) {
        $('#chart_title0').text("吸烟数量(根/月)");
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
                data: ['吸烟数量']
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
                name: '吸烟数量',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['机动车', '公交交通', '骑行', '步行'],
                axisLabel: {
                    formatter: function (value) {
                        return '\n{value|' + value + '}';
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
                    name: '吸烟根数',
                    type: 'bar',
                    data: table_PE,
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
                                        fontSize: 28,
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
                // {
                //     name: '时间',
                //     type: 'bar',
                //     label: seriesLabel,
                //     data: [35, 44, 65, 120]
                // }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    $("#enlarge0").show();
};
var open_cover_img1 = function () {
    $("#enlarge1").show();
}
var open_cover=function(f){
    if(f==0)
    {
        selectValue = $("#MSelect").val();
        if(selectValue<=4)
        {
            open_cover_img0("");
        }
        else {
            open_cover_img1();
        }
    }
    else if(f==1)
    {
        $("#enlarge2").show();
    }

}
var close_cover_img = function (d) {
    if(d==0)
    {
        $("#enlarge0").hide();
    }
    else if(d==1)
    {
        $("#enlarge1").hide();
    }
    else if(d==2)
    {
        var vid = document.getElementById("mVideo");
        vid.pause();
        $("#enlarge2").hide();
    }

};
var switchData=function(num){
    var dom = document.getElementById("show_container1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    if(num==0)
    {
        $('#chart_title1').text("样本采集");
        option = {
            title: {
                text: '样本统计',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    }
                }
            },
            legend: {
                data:["累计样本量", "每日样本量"]
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: {
                show: false,
                start: 0,
                end: 100
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: ["2019/7/9","2019/7/10","2019/7/11","2019/7/12","2019/7/13","2019/7/14","2019/7/15","2019/7/16","2019/7/17","2019/7/18","2019/7/19","2019/7/20","2019/7/21","2019/7/22","2019/7/23","2019/7/24","2019/7/25"]
                },
                {
                    type: 'category',
                    boundaryGap: true,
                    data: ["","","","","","","","","","","","","","","","",""]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '每日样本量',
                    max: 400,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },
                {
                    type: 'value',
                    scale: true,
                    name: '样本总量',
                    max: 3000,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                }

            ],
            series: [
                {
                    name:"每日样本量",
                    type:'bar',
                    data:[251,358,398,191,86,0,0,85,110,177,261,0,0,279,201,229,163]
                },
                {
                    name:"累计样本量",
                    type:'line',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data:[251,609,1007,1198,1284,1284,1284,1369,1479,1656,1917,1917,1917,2196,2397,2626,2789]
                }
            ]
        };

        myChart.setOption(option);
    }
    else if(num==1)
    {
        $('#chart_title1').text("样本构成");
        var builderJson = {
            "all": 1500,
            "charts": {
                "<= 20岁 ": 61,
                "(20,25]  ": 565,
                "(25,30]  ": 1125,
                "(30,35]  ": 517,
                "(35,40]  ": 258,
                "(40,45]  ": 129,
                "(45,50]  ": 90,
                "> 50岁 ": 48,
            },
            "components": {
                "初中及以下": 51,
                "高中或中专": 244,
                "大专": 730,
                "大学本科": 1414,
                "硕士": 323,
                "博士及以上": 6,
            },
        };

        var downloadJson = {
            "女": 1469,
            "男": 1305,
        };

        var themeJson = {
            "已婚": 1557,
            "未婚": 1215,
        };

        var waterMarkText = 'ECHARTS';

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = 100;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.08;
        ctx.font = '20px Microsoft Yahei';
        ctx.translate(50, 50);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(waterMarkText, 0, 0);

        option = {
            backgroundColor: {
                type: 'pattern',
                image: canvas,
                repeat: 'repeat'
            },
            tooltip: {},
            title: [{
                text: '年龄 & 受教育程度',
                subtext: '总计 2793 ',
                x: '25%',
                textAlign: 'center'
            }, {
                text: '性别构成',
                subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
                    return all + downloadJson[key];
                }, 0),
                x: '75%',
                textAlign: 'center'
            }, {
                text: '婚姻状况',
                subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
                    return all + themeJson[key];
                }, 0),
                x: '75%',
                y: '50%',
                textAlign: 'center'
            }],
            grid: [{
                top: 50,
                width: '50%',
                bottom: '45%',
                left: 10,
                containLabel: true
            }, {
                top: '55%',
                width: '50%',
                bottom: 0,
                left: 10,
                containLabel: true
            }],
            xAxis: [{
                type: 'value',
                max: builderJson.all,
                splitLine: {
                    show: false
                }
            }, {
                type: 'value',
                max: builderJson.all,
                gridIndex: 1,
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                data: Object.keys(builderJson.charts),
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                type: 'category',
                data: Object.keys(builderJson.components),
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                type: 'bar',
                stack: 'chart',
                z: 3,
                label: {
                    normal: {
                        position: 'right',
                        show: true
                    }
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                    return builderJson.charts[key];
                })
            }, {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                    normal: {
                        color: '#eee'
                    }
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                    return builderJson.all - builderJson.charts[key];
                })
            }, {
                type: 'bar',
                stack: 'component',
                xAxisIndex: 1,
                yAxisIndex: 1,
                z: 3,
                label: {
                    normal: {
                        position: 'right',
                        show: true
                    }
                },
                data: Object.keys(builderJson.components).map(function (key) {
                    return builderJson.components[key];
                })
            }, {
                type: 'bar',
                stack: 'component',
                silent: true,
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#eee'
                    }
                },
                data: Object.keys(builderJson.components).map(function (key) {
                    return builderJson.all - builderJson.components[key];
                })
            }, {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '25%'],
                data: Object.keys(downloadJson).map(function (key) {
                    return {
                        name: key.replace('.js', ''),
                        value: downloadJson[key]
                    }
                })
            }, {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '75%'],
                data: Object.keys(themeJson).map(function (key) {
                    return {
                        name: key.replace('.js', ''),
                        value: themeJson[key]
                    }
                })
            }]
        }
    }
    else if(num==2)
    {
        $('#chart_title1').text("地理分布");
        var app = {};
        option = null;
        var COLORS = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#ffffff"];
        var lngExtent = [34.65, 34.85];
        var latExtent = [113.5, 113.85];
        var cellCount = [50, 50];
        var cellSizeCoord = [
            (lngExtent[1] - lngExtent[0]) / cellCount[0],
            (latExtent[1] - latExtent[0]) / cellCount[1]
        ];
        var gapSize = 0;
        var data = [[0, 0, 5], [1, 0, 5], [2, 0, 5], [3, 0, 5], [4, 0, 5], [5, 0, 5], [6, 0, 5], [7, 0, 5], [8, 0, 5], [9, 0, 5], [10, 0, 5], [11, 0, 5], [12, 0, 5], [13, 0, 5], [14, 0, 5], [15, 0, 5], [16, 0, 5], [17, 0, 5], [18, 0, 5], [19, 0, 5], [20, 0, 5], [21, 0, 5], [22, 0, 5], [23, 0, 5], [24, 0, 5], [25, 0, 5], [26, 0, 5], [27, 0, 5], [28, 0, 5], [29, 0, 5], [30, 0, 5], [31, 0, 5], [32, 0, 5], [33, 0, 5], [34, 0, 5], [35, 0, 5], [36, 0, 5], [37, 0, 5], [38, 0, 5], [39, 0, 5], [40, 0, 5], [41, 0, 5], [42, 0, 5], [43, 0, 5], [44, 0, 5], [45, 0, 5], [46, 0, 5], [47, 0, 5], [48, 0, 5], [49, 0, 5], [0, 1, 5], [1, 1, 5], [2, 1, 5], [3, 1, 5], [4, 1, 5], [5, 1, 5], [6, 1, 5], [7, 1, 5], [8, 1, 5], [9, 1, 5], [10, 1, 5], [11, 1, 5], [12, 1, 5], [13, 1, 5], [14, 1, 5], [15, 1, 5], [16, 1, 5], [17, 1, 5], [18, 1, 5], [19, 1, 5], [20, 1, 5], [21, 1, 5], [22, 1, 5], [23, 1, 5], [24, 1, 5], [25, 1, 5], [26, 1, 5], [27, 1, 5], [28, 1, 5], [29, 1, 5], [30, 1, 5], [31, 1, 5], [32, 1, 5], [33, 1, 5], [34, 1, 5], [35, 1, 5], [36, 1, 5], [37, 1, 5], [38, 1, 5], [39, 1, 5], [40, 1, 5], [41, 1, 5], [42, 1, 5], [43, 1, 5], [44, 1, 5], [45, 1, 5], [46, 1, 5], [47, 1, 5], [48, 1, 5], [49, 1, 5], [0, 2, 5], [1, 2, 5], [2, 2, 5], [3, 2, 5], [4, 2, 5], [5, 2, 5], [6, 2, 5], [7, 2, 5], [8, 2, 5], [9, 2, 5], [10, 2, 5], [11, 2, 5], [12, 2, 5], [13, 2, 5], [14, 2, 5], [15, 2, 5], [16, 2, 5], [17, 2, 5], [18, 2, 5], [19, 2, 5], [20, 2, 5], [21, 2, 5], [22, 2, 5], [23, 2, 5], [24, 2, 5], [25, 2, 5], [26, 2, 5], [27, 2, 5], [28, 2, 5], [29, 2, 5], [30, 2, 5], [31, 2, 5], [32, 2, 5], [33, 2, 5], [34, 2, 5], [35, 2, 5], [36, 2, 5], [37, 2, 5], [38, 2, 5], [39, 2, 5], [40, 2, 5], [41, 2, 5], [42, 2, 5], [43, 2, 5], [44, 2, 5], [45, 2, 5], [46, 2, 5], [47, 2, 5], [48, 2, 5], [49, 2, 5], [0, 3, 5], [1, 3, 5], [2, 3, 5], [3, 3, 5], [4, 3, 5], [5, 3, 5], [6, 3, 5], [7, 3, 5], [8, 3, 5], [9, 3, 5], [10, 3, 5], [11, 3, 5], [12, 3, 5], [13, 3, 5], [14, 3, 5], [15, 3, 5], [16, 3, 5], [17, 3, 5], [18, 3, 5], [19, 3, 5], [20, 3, 5], [21, 3, 5], [22, 3, 5], [23, 3, 5], [24, 3, 5], [25, 3, 5], [26, 3, 5], [27, 3, 5], [28, 3, 5], [29, 3, 5], [30, 3, 5], [31, 3, 5], [32, 3, 5], [33, 3, 5], [34, 3, 5], [35, 3, 5], [36, 3, 5], [37, 3, 5], [38, 3, 5], [39, 3, 4], [40, 3, 5], [41, 3, 5], [42, 3, 5], [43, 3, 5], [44, 3, 5], [45, 3, 5], [46, 3, 5], [47, 3, 5], [48, 3, 5], [49, 3, 5], [0, 4, 5], [1, 4, 5], [2, 4, 5], [3, 4, 5], [4, 4, 5], [5, 4, 5], [6, 4, 5], [7, 4, 5], [8, 4, 5], [9, 4, 5], [10, 4, 5], [11, 4, 5], [12, 4, 5], [13, 4, 5], [14, 4, 5], [15, 4, 5], [16, 4, 5], [17, 4, 5], [18, 4, 5], [19, 4, 5], [20, 4, 5], [21, 4, 5], [22, 4, 5], [23, 4, 5], [24, 4, 5], [25, 4, 5], [26, 4, 5], [27, 4, 5], [28, 4, 5], [29, 4, 5], [30, 4, 5], [31, 4, 5], [32, 4, 5], [33, 4, 5], [34, 4, 5], [35, 4, 5], [36, 4, 5], [37, 4, 5], [38, 4, 5], [39, 4, 5], [40, 4, 5], [41, 4, 5], [42, 4, 5], [43, 4, 5], [44, 4, 5], [45, 4, 5], [46, 4, 5], [47, 4, 5], [48, 4, 5], [49, 4, 5], [0, 5, 5], [1, 5, 5], [2, 5, 5], [3, 5, 5], [4, 5, 5], [5, 5, 5], [6, 5, 5], [7, 5, 5], [8, 5, 5], [9, 5, 5], [10, 5, 5], [11, 5, 5], [12, 5, 5], [13, 5, 5], [14, 5, 5], [15, 5, 5], [16, 5, 5], [17, 5, 5], [18, 5, 5], [19, 5, 5], [20, 5, 5], [21, 5, 5], [22, 5, 5], [23, 5, 5], [24, 5, 5], [25, 5, 5], [26, 5, 5], [27, 5, 5], [28, 5, 5], [29, 5, 5], [30, 5, 5], [31, 5, 5], [32, 5, 5], [33, 5, 5], [34, 5, 5], [35, 5, 5], [36, 5, 5], [37, 5, 5], [38, 5, 5], [39, 5, 5], [40, 5, 5], [41, 5, 5], [42, 5, 5], [43, 5, 5], [44, 5, 5], [45, 5, 4], [46, 5, 5], [47, 5, 5], [48, 5, 5], [49, 5, 5], [0, 6, 5], [1, 6, 5], [2, 6, 5], [3, 6, 5], [4, 6, 5], [5, 6, 5], [6, 6, 5], [7, 6, 5], [8, 6, 5], [9, 6, 5], [10, 6, 5], [11, 6, 5], [12, 6, 5], [13, 6, 5], [14, 6, 5], [15, 6, 5], [16, 6, 5], [17, 6, 5], [18, 6, 5], [19, 6, 5], [20, 6, 5], [21, 6, 5], [22, 6, 5], [23, 6, 5], [24, 6, 5], [25, 6, 5], [26, 6, 5], [27, 6, 5], [28, 6, 4], [29, 6, 5], [30, 6, 5], [31, 6, 5], [32, 6, 5], [33, 6, 5], [34, 6, 5], [35, 6, 5], [36, 6, 5], [37, 6, 5], [38, 6, 5], [39, 6, 5], [40, 6, 5], [41, 6, 5], [42, 6, 5], [43, 6, 5], [44, 6, 5], [45, 6, 5], [46, 6, 5], [47, 6, 5], [48, 6, 5], [49, 6, 5], [0, 7, 5], [1, 7, 5], [2, 7, 5], [3, 7, 5], [4, 7, 5], [5, 7, 5], [6, 7, 5], [7, 7, 5], [8, 7, 5], [9, 7, 5], [10, 7, 5], [11, 7, 5], [12, 7, 5], [13, 7, 5], [14, 7, 5], [15, 7, 5], [16, 7, 5], [17, 7, 5], [18, 7, 5], [19, 7, 5], [20, 7, 5], [21, 7, 5], [22, 7, 5], [23, 7, 5], [24, 7, 5], [25, 7, 5], [26, 7, 5], [27, 7, 5], [28, 7, 5], [29, 7, 5], [30, 7, 5], [31, 7, 5], [32, 7, 5], [33, 7, 5], [34, 7, 5], [35, 7, 5], [36, 7, 5], [37, 7, 5], [38, 7, 5], [39, 7, 5], [40, 7, 5], [41, 7, 5], [42, 7, 5], [43, 7, 5], [44, 7, 5], [45, 7, 5], [46, 7, 5], [47, 7, 5], [48, 7, 5], [49, 7, 5], [0, 8, 5], [1, 8, 5], [2, 8, 5], [3, 8, 5], [4, 8, 5], [5, 8, 5], [6, 8, 5], [7, 8, 5], [8, 8, 5], [9, 8, 5], [10, 8, 5], [11, 8, 5], [12, 8, 5], [13, 8, 5], [14, 8, 5], [15, 8, 5], [16, 8, 5], [17, 8, 5], [18, 8, 5], [19, 8, 5], [20, 8, 5], [21, 8, 5], [22, 8, 5], [23, 8, 5], [24, 8, 5], [25, 8, 5], [26, 8, 5], [27, 8, 5], [28, 8, 5], [29, 8, 5], [30, 8, 5], [31, 8, 5], [32, 8, 5], [33, 8, 5], [34, 8, 5], [35, 8, 5], [36, 8, 5], [37, 8, 5], [38, 8, 5], [39, 8, 5], [40, 8, 5], [41, 8, 5], [42, 8, 5], [43, 8, 5], [44, 8, 5], [45, 8, 5], [46, 8, 5], [47, 8, 5], [48, 8, 5], [49, 8, 5], [0, 9, 5], [1, 9, 5], [2, 9, 5], [3, 9, 5], [4, 9, 5], [5, 9, 5], [6, 9, 5], [7, 9, 5], [8, 9, 5], [9, 9, 5], [10, 9, 5], [11, 9, 5], [12, 9, 5], [13, 9, 5], [14, 9, 5], [15, 9, 5], [16, 9, 5], [17, 9, 5], [18, 9, 5], [19, 9, 5], [20, 9, 5], [21, 9, 5], [22, 9, 5], [23, 9, 5], [24, 9, 5], [25, 9, 5], [26, 9, 5], [27, 9, 5], [28, 9, 5], [29, 9, 5], [30, 9, 5], [31, 9, 5], [32, 9, 5], [33, 9, 5], [34, 9, 5], [35, 9, 5], [36, 9, 5], [37, 9, 5], [38, 9, 5], [39, 9, 5], [40, 9, 5], [41, 9, 5], [42, 9, 5], [43, 9, 4], [44, 9, 5], [45, 9, 5], [46, 9, 5], [47, 9, 5], [48, 9, 5], [49, 9, 5], [0, 10, 5], [1, 10, 5], [2, 10, 5], [3, 10, 5], [4, 10, 5], [5, 10, 5], [6, 10, 5], [7, 10, 5], [8, 10, 5], [9, 10, 5], [10, 10, 5], [11, 10, 5], [12, 10, 5], [13, 10, 5], [14, 10, 5], [15, 10, 5], [16, 10, 5], [17, 10, 5], [18, 10, 5], [19, 10, 5], [20, 10, 5], [21, 10, 5], [22, 10, 5], [23, 10, 5], [24, 10, 5], [25, 10, 5], [26, 10, 5], [27, 10, 4], [28, 10, 5], [29, 10, 5], [30, 10, 5], [31, 10, 5], [32, 10, 5], [33, 10, 5], [34, 10, 5], [35, 10, 5], [36, 10, 5], [37, 10, 5], [38, 10, 5], [39, 10, 5], [40, 10, 5], [41, 10, 5], [42, 10, 5], [43, 10, 5], [44, 10, 5], [45, 10, 5], [46, 10, 5], [47, 10, 5], [48, 10, 5], [49, 10, 5], [0, 11, 5], [1, 11, 5], [2, 11, 5], [3, 11, 5], [4, 11, 5], [5, 11, 5], [6, 11, 5], [7, 11, 5], [8, 11, 5], [9, 11, 5], [10, 11, 5], [11, 11, 5], [12, 11, 5], [13, 11, 5], [14, 11, 5], [15, 11, 5], [16, 11, 5], [17, 11, 5], [18, 11, 5], [19, 11, 5], [20, 11, 5], [21, 11, 5], [22, 11, 5], [23, 11, 5], [24, 11, 5], [25, 11, 5], [26, 11, 5], [27, 11, 5], [28, 11, 5], [29, 11, 5], [30, 11, 5], [31, 11, 5], [32, 11, 5], [33, 11, 5], [34, 11, 5], [35, 11, 5], [36, 11, 5], [37, 11, 5], [38, 11, 5], [39, 11, 5], [40, 11, 5], [41, 11, 5], [42, 11, 5], [43, 11, 5], [44, 11, 5], [45, 11, 5], [46, 11, 5], [47, 11, 5], [48, 11, 5], [49, 11, 5], [0, 12, 5], [1, 12, 5], [2, 12, 5], [3, 12, 5], [4, 12, 5], [5, 12, 5], [6, 12, 5], [7, 12, 5], [8, 12, 5], [9, 12, 5], [10, 12, 5], [11, 12, 5], [12, 12, 5], [13, 12, 5], [14, 12, 5], [15, 12, 5], [16, 12, 5], [17, 12, 5], [18, 12, 5], [19, 12, 5], [20, 12, 5], [21, 12, 5], [22, 12, 5], [23, 12, 5], [24, 12, 5], [25, 12, 5], [26, 12, 5], [27, 12, 5], [28, 12, 5], [29, 12, 5], [30, 12, 5], [31, 12, 5], [32, 12, 5], [33, 12, 5], [34, 12, 5], [35, 12, 5], [36, 12, 5], [37, 12, 5], [38, 12, 5], [39, 12, 5], [40, 12, 5], [41, 12, 5], [42, 12, 5], [43, 12, 5], [44, 12, 5], [45, 12, 5], [46, 12, 5], [47, 12, 5], [48, 12, 5], [49, 12, 5], [0, 13, 5], [1, 13, 5], [2, 13, 5], [3, 13, 5], [4, 13, 5], [5, 13, 5], [6, 13, 5], [7, 13, 5], [8, 13, 5], [9, 13, 5], [10, 13, 5], [11, 13, 5], [12, 13, 5], [13, 13, 5], [14, 13, 5], [15, 13, 5], [16, 13, 5], [17, 13, 5], [18, 13, 5], [19, 13, 5], [20, 13, 5], [21, 13, 5], [22, 13, 5], [23, 13, 5], [24, 13, 5], [25, 13, 5], [26, 13, 5], [27, 13, 3], [28, 13, 5], [29, 13, 4], [30, 13, 5], [31, 13, 4], [32, 13, 4], [33, 13, 5], [34, 13, 5], [35, 13, 5], [36, 13, 5], [37, 13, 5], [38, 13, 5], [39, 13, 5], [40, 13, 5], [41, 13, 5], [42, 13, 5], [43, 13, 5], [44, 13, 5], [45, 13, 5], [46, 13, 5], [47, 13, 5], [48, 13, 5], [49, 13, 5], [0, 14, 5], [1, 14, 5], [2, 14, 5], [3, 14, 5], [4, 14, 5], [5, 14, 5], [6, 14, 5], [7, 14, 5], [8, 14, 5], [9, 14, 5], [10, 14, 5], [11, 14, 5], [12, 14, 5], [13, 14, 5], [14, 14, 5], [15, 14, 5], [16, 14, 5], [17, 14, 5], [18, 14, 5], [19, 14, 5], [20, 14, 5], [21, 14, 5], [22, 14, 5], [23, 14, 5], [24, 14, 5], [25, 14, 5], [26, 14, 5], [27, 14, 5], [28, 14, 5], [29, 14, 5], [30, 14, 5], [31, 14, 3], [32, 14, 4], [33, 14, 5], [34, 14, 5], [35, 14, 5], [36, 14, 5], [37, 14, 4], [38, 14, 5], [39, 14, 5], [40, 14, 5], [41, 14, 5], [42, 14, 5], [43, 14, 5], [44, 14, 5], [45, 14, 5], [46, 14, 5], [47, 14, 5], [48, 14, 5], [49, 14, 5], [0, 15, 5], [1, 15, 5], [2, 15, 5], [3, 15, 5], [4, 15, 5], [5, 15, 5], [6, 15, 5], [7, 15, 5], [8, 15, 5], [9, 15, 5], [10, 15, 5], [11, 15, 5], [12, 15, 5], [13, 15, 5], [14, 15, 5], [15, 15, 5], [16, 15, 5], [17, 15, 5], [18, 15, 5], [19, 15, 5], [20, 15, 5], [21, 15, 5], [22, 15, 5], [23, 15, 5], [24, 15, 5], [25, 15, 5], [26, 15, 5], [27, 15, 5], [28, 15, 4], [29, 15, 5], [30, 15, 5], [31, 15, 5], [32, 15, 5], [33, 15, 5], [34, 15, 5], [35, 15, 5], [36, 15, 5], [37, 15, 5], [38, 15, 5], [39, 15, 5], [40, 15, 5], [41, 15, 5], [42, 15, 5], [43, 15, 5], [44, 15, 5], [45, 15, 5], [46, 15, 5], [47, 15, 5], [48, 15, 5], [49, 15, 5], [0, 16, 5], [1, 16, 5], [2, 16, 5], [3, 16, 5], [4, 16, 5], [5, 16, 5], [6, 16, 5], [7, 16, 5], [8, 16, 5], [9, 16, 5], [10, 16, 5], [11, 16, 5], [12, 16, 5], [13, 16, 5], [14, 16, 5], [15, 16, 5], [16, 16, 5], [17, 16, 5], [18, 16, 4], [19, 16, 5], [20, 16, 5], [21, 16, 5], [22, 16, 5], [23, 16, 5], [24, 16, 5], [25, 16, 4], [26, 16, 5], [27, 16, 5], [28, 16, 5], [29, 16, 5], [30, 16, 4], [31, 16, 5], [32, 16, 5], [33, 16, 4], [34, 16, 5], [35, 16, 5], [36, 16, 5], [37, 16, 5], [38, 16, 5], [39, 16, 5], [40, 16, 5], [41, 16, 5], [42, 16, 5], [43, 16, 5], [44, 16, 5], [45, 16, 5], [46, 16, 5], [47, 16, 5], [48, 16, 5], [49, 16, 5], [0, 17, 5], [1, 17, 5], [2, 17, 5], [3, 17, 5], [4, 17, 5], [5, 17, 5], [6, 17, 5], [7, 17, 5], [8, 17, 5], [9, 17, 5], [10, 17, 5], [11, 17, 5], [12, 17, 5], [13, 17, 5], [14, 17, 5], [15, 17, 5], [16, 17, 5], [17, 17, 4], [18, 17, 5], [19, 17, 5], [20, 17, 5], [21, 17, 5], [22, 17, 5], [23, 17, 5], [24, 17, 5], [25, 17, 4], [26, 17, 5], [27, 17, 5], [28, 17, 5], [29, 17, 5], [30, 17, 5], [31, 17, 5], [32, 17, 5], [33, 17, 5], [34, 17, 5], [35, 17, 5], [36, 17, 5], [37, 17, 5], [38, 17, 5], [39, 17, 5], [40, 17, 5], [41, 17, 5], [42, 17, 5], [43, 17, 5], [44, 17, 5], [45, 17, 4], [46, 17, 5], [47, 17, 5], [48, 17, 5], [49, 17, 5], [0, 18, 5], [1, 18, 5], [2, 18, 5], [3, 18, 5], [4, 18, 5], [5, 18, 5], [6, 18, 5], [7, 18, 5], [8, 18, 5], [9, 18, 5], [10, 18, 5], [11, 18, 5], [12, 18, 5], [13, 18, 5], [14, 18, 5], [15, 18, 5], [16, 18, 4], [17, 18, 4], [18, 18, 4], [19, 18, 5], [20, 18, 5], [21, 18, 5], [22, 18, 5], [23, 18, 5], [24, 18, 5], [25, 18, 5], [26, 18, 5], [27, 18, 5], [28, 18, 5], [29, 18, 5], [30, 18, 5], [31, 18, 5], [32, 18, 5], [33, 18, 5], [34, 18, 5], [35, 18, 4], [36, 18, 5], [37, 18, 4], [38, 18, 5], [39, 18, 5], [40, 18, 5], [41, 18, 5], [42, 18, 5], [43, 18, 5], [44, 18, 5], [45, 18, 5], [46, 18, 5], [47, 18, 5], [48, 18, 5], [49, 18, 5], [0, 19, 5], [1, 19, 5], [2, 19, 5], [3, 19, 5], [4, 19, 5], [5, 19, 5], [6, 19, 5], [7, 19, 5], [8, 19, 5], [9, 19, 5], [10, 19, 5], [11, 19, 5], [12, 19, 5], [13, 19, 5], [14, 19, 5], [15, 19, 5], [16, 19, 5], [17, 19, 5], [18, 19, 5], [19, 19, 5], [20, 19, 5], [21, 19, 5], [22, 19, 5], [23, 19, 5], [24, 19, 5], [25, 19, 5], [26, 19, 5], [27, 19, 4], [28, 19, 5], [29, 19, 5], [30, 19, 5], [31, 19, 5], [32, 19, 5], [33, 19, 5], [34, 19, 5], [35, 19, 5], [36, 19, 5], [37, 19, 5], [38, 19, 3], [39, 19, 5], [40, 19, 5], [41, 19, 5], [42, 19, 5], [43, 19, 4], [44, 19, 5], [45, 19, 5], [46, 19, 5], [47, 19, 5], [48, 19, 5], [49, 19, 5], [0, 20, 5], [1, 20, 5], [2, 20, 5], [3, 20, 5], [4, 20, 5], [5, 20, 5], [6, 20, 5], [7, 20, 5], [8, 20, 5], [9, 20, 5], [10, 20, 5], [11, 20, 5], [12, 20, 5], [13, 20, 5], [14, 20, 5], [15, 20, 5], [16, 20, 5], [17, 20, 5], [18, 20, 5], [19, 20, 5], [20, 20, 5], [21, 20, 5], [22, 20, 5], [23, 20, 5], [24, 20, 5], [25, 20, 5], [26, 20, 5], [27, 20, 5], [28, 20, 5], [29, 20, 4], [30, 20, 5], [31, 20, 5], [32, 20, 5], [33, 20, 4], [34, 20, 5], [35, 20, 5], [36, 20, 5], [37, 20, 5], [38, 20, 5], [39, 20, 5], [40, 20, 5], [41, 20, 5], [42, 20, 4], [43, 20, 4], [44, 20, 5], [45, 20, 5], [46, 20, 5], [47, 20, 5], [48, 20, 5], [49, 20, 5], [0, 21, 5], [1, 21, 5], [2, 21, 5], [3, 21, 5], [4, 21, 5], [5, 21, 5], [6, 21, 5], [7, 21, 5], [8, 21, 5], [9, 21, 5], [10, 21, 5], [11, 21, 5], [12, 21, 5], [13, 21, 5], [14, 21, 5], [15, 21, 5], [16, 21, 5], [17, 21, 5], [18, 21, 5], [19, 21, 5], [20, 21, 5], [21, 21, 5], [22, 21, 5], [23, 21, 5], [24, 21, 4], [25, 21, 5], [26, 21, 5], [27, 21, 5], [28, 21, 5], [29, 21, 5], [30, 21, 5], [31, 21, 5], [32, 21, 5], [33, 21, 5], [34, 21, 5], [35, 21, 5], [36, 21, 5], [37, 21, 5], [38, 21, 5], [39, 21, 4], [40, 21, 5], [41, 21, 5], [42, 21, 5], [43, 21, 5], [44, 21, 5], [45, 21, 4], [46, 21, 5], [47, 21, 4], [48, 21, 5], [49, 21, 5], [0, 22, 5], [1, 22, 5], [2, 22, 5], [3, 22, 5], [4, 22, 5], [5, 22, 5], [6, 22, 5], [7, 22, 5], [8, 22, 5], [9, 22, 5], [10, 22, 5], [11, 22, 5], [12, 22, 5], [13, 22, 5], [14, 22, 5], [15, 22, 3], [16, 22, 5], [17, 22, 5], [18, 22, 5], [19, 22, 5], [20, 22, 5], [21, 22, 5], [22, 22, 5], [23, 22, 5], [24, 22, 5], [25, 22, 5], [26, 22, 5], [27, 22, 5], [28, 22, 5], [29, 22, 5], [30, 22, 5], [31, 22, 5], [32, 22, 5], [33, 22, 5], [34, 22, 5], [35, 22, 5], [36, 22, 5], [37, 22, 4], [38, 22, 5], [39, 22, 5], [40, 22, 5], [41, 22, 5], [42, 22, 5], [43, 22, 5], [44, 22, 5], [45, 22, 5], [46, 22, 5], [47, 22, 5], [48, 22, 5], [49, 22, 5], [0, 23, 5], [1, 23, 5], [2, 23, 5], [3, 23, 5], [4, 23, 5], [5, 23, 5], [6, 23, 5], [7, 23, 5], [8, 23, 5], [9, 23, 5], [10, 23, 5], [11, 23, 5], [12, 23, 5], [13, 23, 5], [14, 23, 5], [15, 23, 4], [16, 23, 5], [17, 23, 5], [18, 23, 5], [19, 23, 5], [20, 23, 5], [21, 23, 5], [22, 23, 5], [23, 23, 5], [24, 23, 5], [25, 23, 5], [26, 23, 2], [27, 23, 5], [28, 23, 5], [29, 23, 5], [30, 23, 5], [31, 23, 5], [32, 23, 5], [33, 23, 5], [34, 23, 5], [35, 23, 5], [36, 23, 5], [37, 23, 5], [38, 23, 5], [39, 23, 5], [40, 23, 5], [41, 23, 5], [42, 23, 5], [43, 23, 5], [44, 23, 5], [45, 23, 5], [46, 23, 5], [47, 23, 5], [48, 23, 5], [49, 23, 5], [0, 24, 5], [1, 24, 5], [2, 24, 5], [3, 24, 5], [4, 24, 5], [5, 24, 5], [6, 24, 5], [7, 24, 5], [8, 24, 5], [9, 24, 5], [10, 24, 5], [11, 24, 5], [12, 24, 5], [13, 24, 5], [14, 24, 5], [15, 24, 5], [16, 24, 5], [17, 24, 5], [18, 24, 5], [19, 24, 5], [20, 24, 5], [21, 24, 5], [22, 24, 5], [23, 24, 5], [24, 24, 4], [25, 24, 5], [26, 24, 5], [27, 24, 5], [28, 24, 5], [29, 24, 5], [30, 24, 5], [31, 24, 4], [32, 24, 5], [33, 24, 5], [34, 24, 5], [35, 24, 5], [36, 24, 4], [37, 24, 5], [38, 24, 5], [39, 24, 4], [40, 24, 5], [41, 24, 5], [42, 24, 3], [43, 24, 5], [44, 24, 5], [45, 24, 5], [46, 24, 5], [47, 24, 5], [48, 24, 4], [49, 24, 5], [0, 25, 5], [1, 25, 5], [2, 25, 5], [3, 25, 5], [4, 25, 5], [5, 25, 5], [6, 25, 5], [7, 25, 5], [8, 25, 5], [9, 25, 5], [10, 25, 5], [11, 25, 5], [12, 25, 5], [13, 25, 5], [14, 25, 5], [15, 25, 5], [16, 25, 5], [17, 25, 4], [18, 25, 5], [19, 25, 5], [20, 25, 5], [21, 25, 5], [22, 25, 4], [23, 25, 5], [24, 25, 5], [25, 25, 5], [26, 25, 5], [27, 25, 5], [28, 25, 5], [29, 25, 5], [30, 25, 5], [31, 25, 5], [32, 25, 5], [33, 25, 5], [34, 25, 5], [35, 25, 5], [36, 25, 3], [37, 25, 5], [38, 25, 5], [39, 25, 5], [40, 25, 5], [41, 25, 5], [42, 25, 5], [43, 25, 5], [44, 25, 5], [45, 25, 5], [46, 25, 5], [47, 25, 5], [48, 25, 5], [49, 25, 5], [0, 26, 5], [1, 26, 5], [2, 26, 5], [3, 26, 5], [4, 26, 5], [5, 26, 5], [6, 26, 5], [7, 26, 5], [8, 26, 5], [9, 26, 5], [10, 26, 5], [11, 26, 5], [12, 26, 5], [13, 26, 5], [14, 26, 5], [15, 26, 5], [16, 26, 5], [17, 26, 5], [18, 26, 4], [19, 26, 5], [20, 26, 5], [21, 26, 5], [22, 26, 4], [23, 26, 5], [24, 26, 4], [25, 26, 5], [26, 26, 5], [27, 26, 5], [28, 26, 5], [29, 26, 5], [30, 26, 5], [31, 26, 5], [32, 26, 4], [33, 26, 5], [34, 26, 5], [35, 26, 5], [36, 26, 5], [37, 26, 5], [38, 26, 5], [39, 26, 5], [40, 26, 5], [41, 26, 5], [42, 26, 5], [43, 26, 5], [44, 26, 5], [45, 26, 5], [46, 26, 3], [47, 26, 5], [48, 26, 5], [49, 26, 5], [0, 27, 5], [1, 27, 5], [2, 27, 5], [3, 27, 5], [4, 27, 5], [5, 27, 5], [6, 27, 5], [7, 27, 5], [8, 27, 5], [9, 27, 5], [10, 27, 5], [11, 27, 5], [12, 27, 5], [13, 27, 5], [14, 27, 5], [15, 27, 4], [16, 27, 5], [17, 27, 5], [18, 27, 5], [19, 27, 5], [20, 27, 4], [21, 27, 5], [22, 27, 5], [23, 27, 5], [24, 27, 5], [25, 27, 5], [26, 27, 5], [27, 27, 5], [28, 27, 5], [29, 27, 4], [30, 27, 5], [31, 27, 2], [32, 27, 5], [33, 27, 5], [34, 27, 5], [35, 27, 4], [36, 27, 5], [37, 27, 5], [38, 27, 5], [39, 27, 4], [40, 27, 4], [41, 27, 4], [42, 27, 5], [43, 27, 5], [44, 27, 5], [45, 27, 5], [46, 27, 5], [47, 27, 5], [48, 27, 5], [49, 27, 5], [0, 28, 5], [1, 28, 5], [2, 28, 5], [3, 28, 5], [4, 28, 5], [5, 28, 5], [6, 28, 5], [7, 28, 5], [8, 28, 5], [9, 28, 5], [10, 28, 5], [11, 28, 5], [12, 28, 5], [13, 28, 4], [14, 28, 5], [15, 28, 5], [16, 28, 4], [17, 28, 5], [18, 28, 5], [19, 28, 5], [20, 28, 5], [21, 28, 5], [22, 28, 4], [23, 28, 4], [24, 28, 4], [25, 28, 5], [26, 28, 4], [27, 28, 4], [28, 28, 5], [29, 28, 4], [30, 28, 5], [31, 28, 5], [32, 28, 1], [33, 28, 5], [34, 28, 5], [35, 28, 4], [36, 28, 5], [37, 28, 5], [38, 28, 5], [39, 28, 5], [40, 28, 3], [41, 28, 5], [42, 28, 5], [43, 28, 5], [44, 28, 5], [45, 28, 5], [46, 28, 5], [47, 28, 5], [48, 28, 5], [49, 28, 5], [0, 29, 5], [1, 29, 5], [2, 29, 5], [3, 29, 5], [4, 29, 5], [5, 29, 5], [6, 29, 5], [7, 29, 5], [8, 29, 5], [9, 29, 5], [10, 29, 5], [11, 29, 5], [12, 29, 5], [13, 29, 5], [14, 29, 5], [15, 29, 5], [16, 29, 5], [17, 29, 5], [18, 29, 5], [19, 29, 5], [20, 29, 4], [21, 29, 5], [22, 29, 5], [23, 29, 5], [24, 29, 5], [25, 29, 4], [26, 29, 2], [27, 29, 5], [28, 29, 1], [29, 29, 3], [30, 29, 5], [31, 29, 4], [32, 29, 2], [33, 29, 5], [34, 29, 5], [35, 29, 4], [36, 29, 5], [37, 29, 5], [38, 29, 5], [39, 29, 5], [40, 29, 5], [41, 29, 5], [42, 29, 5], [43, 29, 5], [44, 29, 5], [45, 29, 5], [46, 29, 5], [47, 29, 5], [48, 29, 5], [49, 29, 5], [0, 30, 5], [1, 30, 5], [2, 30, 5], [3, 30, 5], [4, 30, 5], [5, 30, 5], [6, 30, 5], [7, 30, 5], [8, 30, 5], [9, 30, 5], [10, 30, 5], [11, 30, 5], [12, 30, 5], [13, 30, 5], [14, 30, 4], [15, 30, 4], [16, 30, 5], [17, 30, 5], [18, 30, 5], [19, 30, 5], [20, 30, 5], [21, 30, 5], [22, 30, 5], [23, 30, 5], [24, 30, 4], [25, 30, 4], [26, 30, 5], [27, 30, 4], [28, 30, 3], [29, 30, 5], [30, 30, 4], [31, 30, 5], [32, 30, 5], [33, 30, 5], [34, 30, 5], [35, 30, 5], [36, 30, 5], [37, 30, 5], [38, 30, 5], [39, 30, 5], [40, 30, 5], [41, 30, 5], [42, 30, 5], [43, 30, 5], [44, 30, 5], [45, 30, 5], [46, 30, 5], [47, 30, 5], [48, 30, 5], [49, 30, 5], [0, 31, 5], [1, 31, 5], [2, 31, 5], [3, 31, 5], [4, 31, 5], [5, 31, 5], [6, 31, 5], [7, 31, 5], [8, 31, 5], [9, 31, 5], [10, 31, 5], [11, 31, 5], [12, 31, 5], [13, 31, 5], [14, 31, 5], [15, 31, 5], [16, 31, 5], [17, 31, 4], [18, 31, 5], [19, 31, 5], [20, 31, 5], [21, 31, 5], [22, 31, 5], [23, 31, 4], [24, 31, 5], [25, 31, 5], [26, 31, 4], [27, 31, 5], [28, 31, 5], [29, 31, 5], [30, 31, 5], [31, 31, 5], [32, 31, 5], [33, 31, 5], [34, 31, 5], [35, 31, 5], [36, 31, 5], [37, 31, 5], [38, 31, 5], [39, 31, 5], [40, 31, 5], [41, 31, 5], [42, 31, 5], [43, 31, 5], [44, 31, 5], [45, 31, 5], [46, 31, 5], [47, 31, 5], [48, 31, 5], [49, 31, 5], [0, 32, 5], [1, 32, 5], [2, 32, 5], [3, 32, 5], [4, 32, 5], [5, 32, 5], [6, 32, 5], [7, 32, 5], [8, 32, 5], [9, 32, 5], [10, 32, 5], [11, 32, 5], [12, 32, 5], [13, 32, 5], [14, 32, 5], [15, 32, 5], [16, 32, 5], [17, 32, 5], [18, 32, 5], [19, 32, 5], [20, 32, 5], [21, 32, 5], [22, 32, 5], [23, 32, 5], [24, 32, 5], [25, 32, 5], [26, 32, 5], [27, 32, 5], [28, 32, 5], [29, 32, 5], [30, 32, 5], [31, 32, 5], [32, 32, 5], [33, 32, 5], [34, 32, 5], [35, 32, 5], [36, 32, 5], [37, 32, 5], [38, 32, 5], [39, 32, 5], [40, 32, 5], [41, 32, 5], [42, 32, 5], [43, 32, 5], [44, 32, 5], [45, 32, 5], [46, 32, 5], [47, 32, 5], [48, 32, 5], [49, 32, 5], [0, 33, 5], [1, 33, 5], [2, 33, 5], [3, 33, 5], [4, 33, 5], [5, 33, 5], [6, 33, 5], [7, 33, 5], [8, 33, 5], [9, 33, 5], [10, 33, 5], [11, 33, 5], [12, 33, 5], [13, 33, 5], [14, 33, 5], [15, 33, 5], [16, 33, 5], [17, 33, 5], [18, 33, 5], [19, 33, 4], [20, 33, 5], [21, 33, 5], [22, 33, 2], [23, 33, 5], [24, 33, 4], [25, 33, -4], [26, 33, 1], [27, 33, 5], [28, 33, 5], [29, 33, 5], [30, 33, 4], [31, 33, 5], [32, 33, 5], [33, 33, 5], [34, 33, 5], [35, 33, 5], [36, 33, 5], [37, 33, 5], [38, 33, 5], [39, 33, 5], [40, 33, 5], [41, 33, 5], [42, 33, 5], [43, 33, 5], [44, 33, 5], [45, 33, 5], [46, 33, 5], [47, 33, 5], [48, 33, 5], [49, 33, 5], [0, 34, 5], [1, 34, 5], [2, 34, 5], [3, 34, 5], [4, 34, 5], [5, 34, 5], [6, 34, 5], [7, 34, 5], [8, 34, 5], [9, 34, 5], [10, 34, 5], [11, 34, 5], [12, 34, 5], [13, 34, 5], [14, 34, 5], [15, 34, 5], [16, 34, 5], [17, 34, 5], [18, 34, 5], [19, 34, 5], [20, 34, 5], [21, 34, 5], [22, 34, 5], [23, 34, 3], [24, 34, 5], [25, 34, 5], [26, 34, 5], [27, 34, 4], [28, 34, 5], [29, 34, 5], [30, 34, 5], [31, 34, 5], [32, 34, 5], [33, 34, 5], [34, 34, 3], [35, 34, 5], [36, 34, 5], [37, 34, 5], [38, 34, 5], [39, 34, 5], [40, 34, 5], [41, 34, 5], [42, 34, 5], [43, 34, 5], [44, 34, 5], [45, 34, 5], [46, 34, 5], [47, 34, 5], [48, 34, 5], [49, 34, 5], [0, 35, 5], [1, 35, 5], [2, 35, 5], [3, 35, 5], [4, 35, 5], [5, 35, 5], [6, 35, 5], [7, 35, 5], [8, 35, 5], [9, 35, 5], [10, 35, 5], [11, 35, 5], [12, 35, 5], [13, 35, 5], [14, 35, 5], [15, 35, 5], [16, 35, 5], [17, 35, 4], [18, 35, 5], [19, 35, 5], [20, 35, 5], [21, 35, 5], [22, 35, -1], [23, 35, 4], [24, 35, 5], [25, 35, 5], [26, 35, 5], [27, 35, 5], [28, 35, 4], [29, 35, 5], [30, 35, 5], [31, 35, 5], [32, 35, 5], [33, 35, 4], [34, 35, 5], [35, 35, 5], [36, 35, 5], [37, 35, 5], [38, 35, 5], [39, 35, 5], [40, 35, 5], [41, 35, 5], [42, 35, 5], [43, 35, 5], [44, 35, 5], [45, 35, 5], [46, 35, 5], [47, 35, 5], [48, 35, 5], [49, 35, 5], [0, 36, 5], [1, 36, 5], [2, 36, 5], [3, 36, 5], [4, 36, 5], [5, 36, 5], [6, 36, 5], [7, 36, 5], [8, 36, 5], [9, 36, 5], [10, 36, 5], [11, 36, 5], [12, 36, 5], [13, 36, 5], [14, 36, 5], [15, 36, 5], [16, 36, 5], [17, 36, 5], [18, 36, 5], [19, 36, 5], [20, 36, 5], [21, 36, 5], [22, 36, 5], [23, 36, 4], [24, 36, 5], [25, 36, 5], [26, 36, 5], [27, 36, 5], [28, 36, 5], [29, 36, 5], [30, 36, 5], [31, 36, 5], [32, 36, 5], [33, 36, 5], [34, 36, 5], [35, 36, 5], [36, 36, 5], [37, 36, 5], [38, 36, 5], [39, 36, 5], [40, 36, 5], [41, 36, 5], [42, 36, 5], [43, 36, 5], [44, 36, 5], [45, 36, 5], [46, 36, 5], [47, 36, 5], [48, 36, 5], [49, 36, 5], [0, 37, 5], [1, 37, 5], [2, 37, 5], [3, 37, 5], [4, 37, 5], [5, 37, 5], [6, 37, 5], [7, 37, 5], [8, 37, 5], [9, 37, 5], [10, 37, 5], [11, 37, 5], [12, 37, 5], [13, 37, 5], [14, 37, 5], [15, 37, 5], [16, 37, 5], [17, 37, 5], [18, 37, 5], [19, 37, 5], [20, 37, 5], [21, 37, 5], [22, 37, 5], [23, 37, 5], [24, 37, 5], [25, 37, 5], [26, 37, 5], [27, 37, 4], [28, 37, 5], [29, 37, 5], [30, 37, 5], [31, 37, 3], [32, 37, 5], [33, 37, 5], [34, 37, 5], [35, 37, 4], [36, 37, 5], [37, 37, 5], [38, 37, 5], [39, 37, 5], [40, 37, 5], [41, 37, 5], [42, 37, 4], [43, 37, 5], [44, 37, 5], [45, 37, 5], [46, 37, 5], [47, 37, 5], [48, 37, 5], [49, 37, 5], [0, 38, 5], [1, 38, 5], [2, 38, 5], [3, 38, 5], [4, 38, 5], [5, 38, 5], [6, 38, 5], [7, 38, 5], [8, 38, 5], [9, 38, 5], [10, 38, 5], [11, 38, 5], [12, 38, 5], [13, 38, 5], [14, 38, 5], [15, 38, 5], [16, 38, 5], [17, 38, 5], [18, 38, 5], [19, 38, 5], [20, 38, 5], [21, 38, 5], [22, 38, 5], [23, 38, 5], [24, 38, 4], [25, 38, 5], [26, 38, 5], [27, 38, 5], [28, 38, 5], [29, 38, 5], [30, 38, 2], [31, 38, 4], [32, 38, 1], [33, 38, 5], [34, 38, 5], [35, 38, 4], [36, 38, 4], [37, 38, 5], [38, 38, 5], [39, 38, 5], [40, 38, 5], [41, 38, 4], [42, 38, 5], [43, 38, 5], [44, 38, 5], [45, 38, 5], [46, 38, 5], [47, 38, 5], [48, 38, 5], [49, 38, 5], [0, 39, 5], [1, 39, 5], [2, 39, 5], [3, 39, 5], [4, 39, 5], [5, 39, 5], [6, 39, 5], [7, 39, 5], [8, 39, 5], [9, 39, 5], [10, 39, 5], [11, 39, 5], [12, 39, 5], [13, 39, 5], [14, 39, 5], [15, 39, 5], [16, 39, 5], [17, 39, 5], [18, 39, 5], [19, 39, 5], [20, 39, 5], [21, 39, 5], [22, 39, 4], [23, 39, 5], [24, 39, 5], [25, 39, 5], [26, 39, 5], [27, 39, 5], [28, 39, 5], [29, 39, 5], [30, 39, 5], [31, 39, 4], [32, 39, 4], [33, 39, 5], [34, 39, 5], [35, 39, 5], [36, 39, 5], [37, 39, 5], [38, 39, 5], [39, 39, 5], [40, 39, 5], [41, 39, 5], [42, 39, 5], [43, 39, 5], [44, 39, 5], [45, 39, 5], [46, 39, 5], [47, 39, 5], [48, 39, 5], [49, 39, 5], [0, 40, 5], [1, 40, 5], [2, 40, 5], [3, 40, 5], [4, 40, 5], [5, 40, 5], [6, 40, 5], [7, 40, 5], [8, 40, 5], [9, 40, 5], [10, 40, 5], [11, 40, 5], [12, 40, 5], [13, 40, 5], [14, 40, 5], [15, 40, 5], [16, 40, 5], [17, 40, 5], [18, 40, 5], [19, 40, 5], [20, 40, 5], [21, 40, 5], [22, 40, 5], [23, 40, 5], [24, 40, 5], [25, 40, 5], [26, 40, 5], [27, 40, 5], [28, 40, 5], [29, 40, 5], [30, 40, 4], [31, 40, 3], [32, 40, 5], [33, 40, 5], [34, 40, 5], [35, 40, 5], [36, 40, 5], [37, 40, 5], [38, 40, 5], [39, 40, 5], [40, 40, 5], [41, 40, 5], [42, 40, 5], [43, 40, 5], [44, 40, 5], [45, 40, 5], [46, 40, 5], [47, 40, 5], [48, 40, 5], [49, 40, 5], [0, 41, 5], [1, 41, 5], [2, 41, 5], [3, 41, 5], [4, 41, 5], [5, 41, 5], [6, 41, 5], [7, 41, 5], [8, 41, 5], [9, 41, 5], [10, 41, 5], [11, 41, 5], [12, 41, 5], [13, 41, 5], [14, 41, 5], [15, 41, 5], [16, 41, 5], [17, 41, 5], [18, 41, 5], [19, 41, 5], [20, 41, 5], [21, 41, 5], [22, 41, 5], [23, 41, 5], [24, 41, 5], [25, 41, 5], [26, 41, 5], [27, 41, 5], [28, 41, 5], [29, 41, 5], [30, 41, 5], [31, 41, 5], [32, 41, 5], [33, 41, 5], [34, 41, 4], [35, 41, 5], [36, 41, 4], [37, 41, 5], [38, 41, 5], [39, 41, 5], [40, 41, 5], [41, 41, 5], [42, 41, 5], [43, 41, 5], [44, 41, 5], [45, 41, 5], [46, 41, 5], [47, 41, 5], [48, 41, 5], [49, 41, 5], [0, 42, 5], [1, 42, 5], [2, 42, 5], [3, 42, 5], [4, 42, 5], [5, 42, 5], [6, 42, 5], [7, 42, 5], [8, 42, 5], [9, 42, 5], [10, 42, 5], [11, 42, 5], [12, 42, 5], [13, 42, 5], [14, 42, 5], [15, 42, 5], [16, 42, 5], [17, 42, 5], [18, 42, 5], [19, 42, 5], [20, 42, 5], [21, 42, 5], [22, 42, 5], [23, 42, 5], [24, 42, 5], [25, 42, 5], [26, 42, 5], [27, 42, 5], [28, 42, 5], [29, 42, 5], [30, 42, 5], [31, 42, 5], [32, 42, 5], [33, 42, 5], [34, 42, 5], [35, 42, 5], [36, 42, 5], [37, 42, 5], [38, 42, 5], [39, 42, 2], [40, 42, 5], [41, 42, 3], [42, 42, 5], [43, 42, 5], [44, 42, 5], [45, 42, 5], [46, 42, 5], [47, 42, 5], [48, 42, 5], [49, 42, 5], [0, 43, 5], [1, 43, 5], [2, 43, 5], [3, 43, 5], [4, 43, 5], [5, 43, 5], [6, 43, 5], [7, 43, 5], [8, 43, 5], [9, 43, 5], [10, 43, 5], [11, 43, 5], [12, 43, 5], [13, 43, 5], [14, 43, 5], [15, 43, 5], [16, 43, 5], [17, 43, 5], [18, 43, 5], [19, 43, 5], [20, 43, 5], [21, 43, 5], [22, 43, 5], [23, 43, 5], [24, 43, 5], [25, 43, 5], [26, 43, 5], [27, 43, 5], [28, 43, 5], [29, 43, 5], [30, 43, 5], [31, 43, 5], [32, 43, 5], [33, 43, 5], [34, 43, 5], [35, 43, 5], [36, 43, 5], [37, 43, 5], [38, 43, 5], [39, 43, 5], [40, 43, 5], [41, 43, 5], [42, 43, 5], [43, 43, 5], [44, 43, 5], [45, 43, 5], [46, 43, 5], [47, 43, 5], [48, 43, 5], [49, 43, 5], [0, 44, 5], [1, 44, 5], [2, 44, 5], [3, 44, 5], [4, 44, 5], [5, 44, 5], [6, 44, 5], [7, 44, 5], [8, 44, 5], [9, 44, 5], [10, 44, 5], [11, 44, 5], [12, 44, 5], [13, 44, 5], [14, 44, 5], [15, 44, 5], [16, 44, 5], [17, 44, 5], [18, 44, 5], [19, 44, 5], [20, 44, 5], [21, 44, 5], [22, 44, 5], [23, 44, 5], [24, 44, 5], [25, 44, 5], [26, 44, 3], [27, 44, 4], [28, 44, 5], [29, 44, 4], [30, 44, 4], [31, 44, 5], [32, 44, 5], [33, 44, 5], [34, 44, 5], [35, 44, 5], [36, 44, 5], [37, 44, 5], [38, 44, 4], [39, 44, 5], [40, 44, 5], [41, 44, 5], [42, 44, 5], [43, 44, 5], [44, 44, 5], [45, 44, 5], [46, 44, 5], [47, 44, 5], [48, 44, 5], [49, 44, 5], [0, 45, 5], [1, 45, 5], [2, 45, 5], [3, 45, 5], [4, 45, 5], [5, 45, 5], [6, 45, 5], [7, 45, 5], [8, 45, 5], [9, 45, 5], [10, 45, 5], [11, 45, 5], [12, 45, 5], [13, 45, 5], [14, 45, 5], [15, 45, 5], [16, 45, 5], [17, 45, 5], [18, 45, 5], [19, 45, 5], [20, 45, 5], [21, 45, 5], [22, 45, 5], [23, 45, 5], [24, 45, 5], [25, 45, 5], [26, 45, 5], [27, 45, 5], [28, 45, 5], [29, 45, 5], [30, 45, 5], [31, 45, 5], [32, 45, 5], [33, 45, 5], [34, 45, 5], [35, 45, 5], [36, 45, 5], [37, 45, 5], [38, 45, 5], [39, 45, 5], [40, 45, 5], [41, 45, 5], [42, 45, 5], [43, 45, 5], [44, 45, 5], [45, 45, 5], [46, 45, 5], [47, 45, 5], [48, 45, 5], [49, 45, 5], [0, 46, 5], [1, 46, 5], [2, 46, 5], [3, 46, 5], [4, 46, 5], [5, 46, 5], [6, 46, 5], [7, 46, 5], [8, 46, 5], [9, 46, 5], [10, 46, 5], [11, 46, 5], [12, 46, 5], [13, 46, 5], [14, 46, 5], [15, 46, 5], [16, 46, 5], [17, 46, 5], [18, 46, 5], [19, 46, 5], [20, 46, 5], [21, 46, 5], [22, 46, 5], [23, 46, 5], [24, 46, 5], [25, 46, 5], [26, 46, 5], [27, 46, 5], [28, 46, 5], [29, 46, 5], [30, 46, 5], [31, 46, 5], [32, 46, 5], [33, 46, 5], [34, 46, 5], [35, 46, 5], [36, 46, 5], [37, 46, 3], [38, 46, 5], [39, 46, 5], [40, 46, 5], [41, 46, 5], [42, 46, 5], [43, 46, 5], [44, 46, 5], [45, 46, 5], [46, 46, 5], [47, 46, 5], [48, 46, 5], [49, 46, 5], [0, 47, 5], [1, 47, 5], [2, 47, 5], [3, 47, 5], [4, 47, 5], [5, 47, 5], [6, 47, 5], [7, 47, 5], [8, 47, 5], [9, 47, 5], [10, 47, 5], [11, 47, 5], [12, 47, 4], [13, 47, 5], [14, 47, 5], [15, 47, 5], [16, 47, 5], [17, 47, 5], [18, 47, 5], [19, 47, 5], [20, 47, 5], [21, 47, 5], [22, 47, 5], [23, 47, 5], [24, 47, 5], [25, 47, 5], [26, 47, 5], [27, 47, 5], [28, 47, 5], [29, 47, 5], [30, 47, 5], [31, 47, 5], [32, 47, 5], [33, 47, 5], [34, 47, 5], [35, 47, 5], [36, 47, 5], [37, 47, 5], [38, 47, 5], [39, 47, 5], [40, 47, 5], [41, 47, 5], [42, 47, 5], [43, 47, 5], [44, 47, 5], [45, 47, 5], [46, 47, 5], [47, 47, 5], [48, 47, 5], [49, 47, 5], [0, 48, 5], [1, 48, 5], [2, 48, 5], [3, 48, 5], [4, 48, 5], [5, 48, 5], [6, 48, 5], [7, 48, 5], [8, 48, 5], [9, 48, 5], [10, 48, 5], [11, 48, 5], [12, 48, 5], [13, 48, 5], [14, 48, 5], [15, 48, 5], [16, 48, 5], [17, 48, 5], [18, 48, 5], [19, 48, 5], [20, 48, 5], [21, 48, 5], [22, 48, 5], [23, 48, 5], [24, 48, 5], [25, 48, 5], [26, 48, 5], [27, 48, 5], [28, 48, 5], [29, 48, 5], [30, 48, 5], [31, 48, 5], [32, 48, 5], [33, 48, 5], [34, 48, 5], [35, 48, 5], [36, 48, 5], [37, 48, 5], [38, 48, 5], [39, 48, 5], [40, 48, 5], [41, 48, 5], [42, 48, 5], [43, 48, 5], [44, 48, 5], [45, 48, 5], [46, 48, 5], [47, 48, 5], [48, 48, 5], [49, 48, 5], [0, 49, 5], [1, 49, 5], [2, 49, 5], [3, 49, 5], [4, 49, 5], [5, 49, 5], [6, 49, 5], [7, 49, 5], [8, 49, 5], [9, 49, 5], [10, 49, 5], [11, 49, 5], [12, 49, 5], [13, 49, 5], [14, 49, 5], [15, 49, 5], [16, 49, 5], [17, 49, 5], [18, 49, 5], [19, 49, 5], [20, 49, 5], [21, 49, 5], [22, 49, 5], [23, 49, 5], [24, 49, 5], [25, 49, 5], [26, 49, 5], [27, 49, 5], [28, 49, 5], [29, 49, 5], [30, 49, 5], [31, 49, 5], [32, 49, 5], [33, 49, 5], [34, 49, 5], [35, 49, 5], [36, 49, 5], [37, 49, 5], [38, 49, 5], [39, 49, 5], [40, 49, 5], [41, 49, 5], [42, 49, 5], [43, 49, 5], [44, 49, 5], [45, 49, 5], [46, 49, 5], [47, 49, 5], [48, 49, 5], [49, 49, 5]];
        function renderItem(params, api) {
            var context = params.context;
            var lngIndex = api.value(0);
            var latIndex = api.value(1);
            var coordLeftTop = [
                +(latExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6),
                +(lngExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6)
            ];
            var pointLeftTop = getCoord(params, api, lngIndex, latIndex);
            var pointRightBottom = getCoord(params, api, lngIndex + 1, latIndex + 1);

            return {
                type: 'rect',
                shape: {
                    x: pointLeftTop[0],
                    y: pointLeftTop[1],
                    width: pointRightBottom[0] - pointLeftTop[0],
                    height: pointRightBottom[1] - pointLeftTop[1]
                },
                style: api.style({
                    stroke: 'rgba(0,0,0,0.1)'
                }),
                styleEmphasis: api.styleEmphasis()
            };
        }

        function getCoord(params, api, lngIndex, latIndex) {
            var coords = params.context.coords || (params.context.coords = []);
            var key = lngIndex + '-' + latIndex;

            // bmap returns point in integer, which makes cell width unstable.
            // So we have to use right bottom point.
            return coords[key] || (coords[key] = api.coord([
                +(latExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6),
                +(lngExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6)
            ]));
        }

        option = {
            tooltip: {},
            visualMap: {
                type: 'piecewise',
                inverse: true,
                top: 10,
                left: 10,
                pieces: [{
                    value: 0, color: COLORS[0]
                }, {
                    value: 1, color: COLORS[1]
                }, {
                    value: 2, color: COLORS[2]
                }, {
                    value: 3, color: COLORS[3]
                }, {
                    value: 4, color: COLORS[4]
                }, {
                    value: 5, color: COLORS[5]
                }],
                borderColor: '#ccc',
                borderWidth: 2,
                backgroundColor: '#eee',
                dimension: 2,
                inRange: {
                    color: COLORS,
                    opacity: 0.7
                }
            },
            series: [
                {
                    type: 'custom',
                    coordinateSystem: 'bmap',
                    renderItem: renderItem,
                    animation: false,
                    itemStyle: {
                        emphasis: {
                            color: 'yellow'
                        }
                    },
                    encode: {
                        tooltip: 2
                    },
                    data: data
                }
            ],
            bmap: {
                center: [113.70, 34.75],
                zoom: 13,
                roam: true,
                mapStyle: {
                    styleJson: [{
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'land',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#f3f3f3'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#999999'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'poi',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': 'rgba(0,0,0,0)'
                        }
                    }]
                }
            }
        };;
    }
    else if(num==3)
    {
        $('#chart_title1').text("交通比例");
        var ROOT_PATH = window.location.host;
        var Icons = {
            'Car': ROOT_PATH + 'resource/automobile.png',
            'Bus': ROOT_PATH + 'resource/buses.png',
            'Bike': ROOT_PATH + 'resource/bicycle.png',
            'Walk': ROOT_PATH + 'resource/walker.png'
        };
        var pathSymbols = {
            reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
            plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
            train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
            ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
            car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
        };

        var labelSetting = {
            normal: {
                show: true,
                position: 'right',
                offset: [10, 0],
                textStyle: {
                    fontSize: 16
                }
            }
        };


        option = {
            title: {
                text: '通勤交通方式'
            },
            legend: {
                data: ['政府', '企业', '商场']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                containLabel: true,
                left: 20
            },
            yAxis: {
                data: ['步行', '骑行', '电动车', '公交/地铁', '机动车'],
                inverse: true,
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {
                    margin: 30,
                    textStyle: {
                        fontSize: 14
                    }
                },
                axisPointer: {
                    label: {
                        show: true,
                        margin: 30
                    }
                }
            },
            xAxis: {
                splitLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                axisLine: {show: false}
            },
            series: [{
                name: '政府',
                type: 'pictorialBar',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                barCategoryGap: '40%',
                data: [{
                    value: 60,
                    symbol: pathSymbols.reindeer
                }, {
                    value: 65,
                    symbol: pathSymbols.ship
                }, {
                    value: 248,
                    symbol: pathSymbols.plane
                }, {
                    value: 284,
                    symbol: pathSymbols.train
                }, {
                    value: 323,
                    symbol: pathSymbols.car
                }]
            }, {
                name: '企业',
                type: 'pictorialBar',
                barGap: '10%',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                data: [{
                    value: 72,
                    symbol: pathSymbols.reindeer
                }, {
                    value: 87,
                    symbol: pathSymbols.ship
                }, {
                    value: 188,
                    symbol: pathSymbols.plane
                }, {
                    value: 497,
                    symbol: pathSymbols.train
                }, {
                    value: 388,
                    symbol: pathSymbols.car
                }]
            }, {
                name: '商场',
                type: 'pictorialBar',
                barGap: '10%',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                data: [{
                    value: 45,
                    symbol: pathSymbols.reindeer
                }, {
                    value: 38,
                    symbol: pathSymbols.ship
                }, {
                    value: 111,
                    symbol: pathSymbols.plane
                }, {
                    value: 120,
                    symbol: pathSymbols.train
                }, {
                    value: 81,
                    symbol: pathSymbols.car
                }]
            }
            ]
        };
    }

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
var open_datashow=function(num){
    switchData(num);
    $("#enlarge2").show();
}
var close_datashow=function () {
    $("#enlarge2").hide();
}

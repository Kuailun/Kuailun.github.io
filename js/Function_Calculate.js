calculate = function (section) {
    var tb = document.getElementById("mtable");

    mTableData.C_time_self_driving = $("#input-time-1").val();
    mTableData.C_time_taxi = $("#input-time-2").val();

    mTableData.C_time_transit_bus = $("#input-time-3").val();
    mTableData.C_time_transit_subway = $("#input-time-4").val();
    mTableData.C_time_transit_walk = $("#input-time-5").val();

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
    mTableData.H_self_driving   = (rate_H_C.direct[0] * mTableData.C_dist_self_driving).toFixed(2);
    mTableData.H_taxi           = (rate_H_C.direct[1] * mTableData.C_dist_taxi).toFixed(2);
    mTableData.H_transit_bus    = (rate_H_C.direct[2] * mTableData.C_dist_transit_bus).toFixed(2);
    mTableData.H_transit_subway = (rate_H_C.direct[3] * mTableData.C_dist_transit_subway).toFixed(2);
    mTableData.H_transit_walk   = (rate_H_C.direct[4] * mTableData.C_dist_transit_walk).toFixed(2);
    mTableData.H_riding         = (rate_H_C.direct[5] * mTableData.C_dist_riding).toFixed(2);
    mTableData.H_walk           = (rate_H_C.direct[6] * mTableData.C_dist_walk).toFixed(2);
    data_H=[mTableData.H_self_driving,mTableData.H_taxi,mTableData.H_transit_bus,mTableData.H_transit_subway,mTableData.H_transit_walk,mTableData.H_riding,mTableData.H_walk];

    mTableData.HE_self_driving   = (rate_H_C.equal[0] * mTableData.C_dist_self_driving).toFixed(2);
    mTableData.HE_taxi           = (rate_H_C.equal[1] * mTableData.C_dist_taxi).toFixed(2);
    mTableData.HE_transit_bus    = (rate_H_C.equal[2] * mTableData.C_dist_transit_bus).toFixed(2);
    mTableData.HE_transit_subway = (rate_H_C.equal[3] * mTableData.C_dist_transit_subway).toFixed(2);
    mTableData.HE_transit_walk   = (rate_H_C.equal[4] * mTableData.C_dist_transit_walk).toFixed(2);
    mTableData.HE_riding         = (rate_H_C.equal[5] * mTableData.C_dist_riding).toFixed(2);
    mTableData.HE_walk           = (rate_H_C.equal[6] * mTableData.C_dist_walk).toFixed(2);
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
    t=[parseFloat(s[0]),parseFloat(s[2])+parseFloat(s[3])+parseFloat(s[4]),parseFloat(s[5]),parseFloat(s[6])];
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
                data: ['Car', 'Bus', 'Bike', 'Walk'],
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
                data: ['Car', 'Bus', 'Bike', 'Walk'],
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
                data: ['Car', 'Bus', 'Bike', 'Walk'],
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
                data: ['Car', 'Bus', 'Bike', 'Walk'],
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
    var ROOT_PATH = window.location.host;
    var dom = document.getElementById("show_container1");
    // $("#cover_img1").src=ROOT_PATH+'resource/Nutrient.jpg';
    $("#enlarge1").show();
}
var open_cover=function(){
    selectValue = $("#MSelect").val();
    if(selectValue<=4)
    {
        open_cover_img0("");
    }
    else {
        open_cover_img1();
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

};
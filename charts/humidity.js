window.onload=function(){
	var myChart = echarts.init(document.getElementById('main'));
	option = {
//	    title: {
//	        text: '温度变化',
//	        subtext: '温度'
//	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['根系湿度','土表湿度','温室湿度']
	    },
	  toolbox: {
	      show: true,
//	      feature: {
//	          dataZoom: {
//	              yAxisIndex: 'none'
//	          },
//	          dataView: {readOnly: false}
//	          magicType: {type: ['line', 'bar']},
//	          restore: {},
//	          saveAsImage: {}
//	      }
	  },
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data: ['8:00','9:00','10:00','11:00','12:00','1:00','2:00']
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value} °C'
	        }
	    },
	    series: [
	        {
	            name:'根系湿度',
	            type:'line',
	            data:[11, 11, 15, 13, 12, 13, 10],
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'}
	                ]
	                
	            }
	        },
	        {
	            name:'土表湿度',
	            type:'line',
	            data:[1, 4, 5, 7, 6, 9, 10],
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'},
	                    [{
	                        symbol: 'none',
	                        x: '90%',
	                        yAxis: 'max'
	                    }, {
	                        symbol: 'circle',
	                        label: {
	                            normal: {
	                                position: 'start',
	                                formatter: '最大值'
	                            }
	                        },
	                        type: 'max',
	                        name: '最高点'
	                    }]
	                ]
	            }
	        },
	                {
	            name:'温室湿度',
	            type:'line',
	            data:[8, 9, 6, 7, 7, 9, 10],
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'},
	                    [{
	                        symbol: 'none',
	                        x: '90%',
	                        yAxis: 'max'
	                    }, {
	                        symbol: 'circle',
	                        label: {
	                            normal: {
	                                position: 'start',
	                                formatter: '最大值'
	                            }
	                        },
	                        type: 'max',
	                        name: '最高点'
	                    }]
	                ]
	            }
	        }
	    ]
};

myChart.setOption(option);

}

import {Component, Input, OnInit, Output} from '@angular/core';
import {GetdataService} from '../../serve/getdata.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-assaydata',
  templateUrl: './assaydata.component.html',
  styleUrls: ['./assaydata.component.css']
})
export class AssaydataComponent implements OnInit {
  public categories = ['东北', '华北', '西北', '西南', '华南', '华中', '华东'];
  public formModel: FormGroup;
  /*数据分析的文件的配置*/
  public assayData = {
    animation: false,
    legend: {
      type: 'plain',
      data: ['东北', '华北', '西北', '西南', '华南', '华中', '华东']
    },
    tooltip: {
      formatter: function (params) {
        return '负载' + Math.round(params.value[0]) + '时长' + Math.round(params.value[1]);
      }
    },
    xAxis: {
      type: 'value',
      min: 'dataMin',
      max: 'dataMax',
      name: '负载程度',
      splitLine: {
        show: true
      }
    },
    yAxis: {
      type: 'value',
      min: 'dataMin',
      max: 'dataMax',
      name: '故障时长(m)',
      splitLine: {
        show: true
      }
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 1,
        end: 35
      },
      {
        type: 'slider',
        show: true,
        yAxisIndex: [0],
        left: '93%',
        start: 29,
        end: 36
      }
    ],
    series: [
      {
        name: '东北',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      },
      {
        name: '华北',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      },
      {
        name: '西北',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8,
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      },
      {
        name: '西南',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8,
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      },
      {
        name: '华南',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8,
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      },
      {
        name: '华中',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8,
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      },
      {
        name: '华东',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8,
          }
        },
        symbolSize: function (val) {
          return val[2] * 40;
        },
        data: []
      }
    ]
  };
  /*数据分析折线图,用于之后的计算相关度*/
  public markLineOption = {
    animation: false,
    label: {
      normal: {
        formatter: 'y = k * x',
        textStyle: {
          align: 'right'
        }
      }
    },
    lineStyle: {
      normal: {
        type: 'solid'
      }
    },
    tooltip: {
      formatter: 'y =k * x'
    },
    data: [[{
      coord: [0, 0],
      symbol: 'none'
    }, {
      coord: [20, 20],
      symbol: 'none'
    }]]
  };
  /*数据分析折线图,用于之后故障相关度*/
  public markLineOption1 = {
    animation: false,
    label: {
      normal: {
        formatter: 'y = k * x',
        textStyle: {
          align: 'right'
        }
      }
    },
    lineStyle: {
      normal: {
        type: 'solid'
      }
    },
    tooltip: {
      formatter: 'y =k * x'
    },
    data: [[{
      coord: [0, 0],
      symbol: 'none'
    }, {
      coord: [20, 20],
      symbol: 'none'
    }]]
  };
  /*数据分析的图表*/
  public sysLine = {
    title: {
      text: 'I为故障系数，II为预见性的故障散点分布',
      bottom : 50,
      x: 'center'
    },
    grid: [
      {x: '7%', y: '7%', width: '38%', height: '60%'},
      {x2: '7%', y: '7%', width: '38%', height: '60%'},
    ],
    tooltip: {
      formatter: 'Group {a}: ({c})'
    },
    xAxis: [
      {gridIndex: 0, min: 0, max: 20},
      {gridIndex: 1, min: 0, max: 20}
    ],
    yAxis: [
      {gridIndex: 0, min: 0, max: 20},
      {gridIndex: 1, min: 0, max: 20}
    ],
    series: [
      {
        name: 'I',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        markLine: this.markLineOption
      },
      {
        name: 'II',
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        markLine: this.markLineOption1,
        data: [[10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]],
      }
    ]
  };
  /*模拟解析文字*/
  public assDescriptpon: any;
    /*area : '',
    press: '',
    bugtime: '',
    /!*是否优化*!/
    needOptimize: '',
    /!*相关度*!/
    relevance: '',
    /!*故障jilv*!/
    bugCan: '',
    /!*解决ijlv*!/
    cureCan: '',
    /!*解决方案*!/
    hows: ''*/
  /*数据雷达的文件配置*/
  public radarData = [];
  /*数据分布的初始化*/
  public assay: any;
  /*数据折线初始化*/
  public assline: any;
  /*雷达图的初始化*/
  public radar: any;
  constructor(private getData: GetdataService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      press: ['', Validators.required],
      time: ['', Validators.required],
      area: ['']
    });
  }
  ngOnInit() {
    /*初始化散点图*/
    this.assay = echarts.init(document.getElementById('dataZoom') as HTMLDivElement);
    this.assay.setOption(this.assayData);
    this.assay.showLoading();
    /*初始化折线图*/
    this.assline = echarts.init(document.getElementById('oneLine') as HTMLDivElement);
    this.assline.showLoading();
    this.sysLine.series[0].markLine = this.markLineOption;
    this.assline.setOption(this.sysLine);
    this.assline.hideLoading();
    console.log(this.sysLine);
    /*数据渲染*/
    this.getData.getAssayData().subscribe(
      res => {
        // console.log(res.data[0]);
        /*数据渲染*/
        for (let i = 0 ; i <= 6; i++ ) {
          this.assayData.series[i].data = res.data[i];
        }
        /*数据动态加载后再次渲染*/
        this.assay.setOption(this.assayData);
        this.assay.hideLoading();
      });
    /*点击事件*/
    /*有时间在捉摸的，在这个回调函数中使用 服务的 方法*/
    this.assay.on('click', function (params, callback) {
      // const relevance: number;
      this.assDescriptpon = {
        area: params.seriesName,
        press: params.value[0],
        bugtime: params.value[1],
      };
      console.log(this.assDescriptpon);
      /*(function() {
        console.log(this.assDescriptpon);
      })();*/
    });

  }
  public submit() {
    /*考虑后台没有计算分析系统，因此只能分类进行判断*/
    if (this.formModel.value.press && this.formModel.value.time) {
      console.log(this.formModel.value);
      this.getData.accountSysNumber(this.formModel.value).subscribe(res => {
        console.log(res);
      });
    } else if (this.formModel.value.area) {
      this.getData.accountSysNumber(this.formModel.value).subscribe(res => {
        /*实际中这里所有的数据都是从后台来计算的，res的返回值不仅仅是表格中的额内容*/
        /*渲染表格*/
        this.assDescriptpon = res;
        this.assline.clear();
        /*再次初始化折线相关的配置文件*/
        this.markLineOption.label.normal.formatter = (function() {return 'y = ' + res.relevance + '*x' ; } ) ();
        this.markLineOption.tooltip.formatter = (function() {return 'y = ' + res.relevance + '*x' ; } ) ();
        /*再次初始化故障分析配置文件*/
        this.markLineOption1.label.normal.formatter = (function() {return 'y = ' + res.bugCan + '*x' ; } ) ();
        this.markLineOption1.tooltip.formatter = (function() {return 'y = ' + res.bugCan + '*x' ; } ) ();
        /*相关性的折线坐标配置*/
        this.markLineOption.data[0][0].coord = this.accountLineNum(res.relevance, 18)[0];
        this.markLineOption.data[0][1].coord = this.accountLineNum(res.relevance, 18)[1];
        /*漏洞几率分析坐标的配置*/
        this.markLineOption1.data[0][0].coord = this.accountLineNum(res.bugCan, 18)[0];
        this.markLineOption1.data[0][1].coord = this.accountLineNum(res.bugCan, 18)[1];
        // console.log(this.markLineOption);
        // console.log(this.accountLineNum(res.relevance, 5));
        /*重新绘制折线图*/
        /*this.assline.showLoading();*/
        this.assline.setOption(this.sysLine);
        this.assline.hideLoading();
    });
    } else {
      console.log('ss');
    }
  }
  /*重绘图表，好像不能用 ，不然也不会写这么多的重复的重置图表的代码*/
  public  reDrawData(container: any, option: any, ) {
    if (container && option) {
      this.assay.showLoading();
      container.setOption(option);
      container.hideLoading();
    } else {
      console.log('重绘失败!');
    }

  }
  /*计算重绘的参数*/
  public accountLineNum(k: number , x: number) {
    let X = [];
    let Y = [];
    if (k && x) {
       X = [0, 0];
       Y = [x, Math.round(k * x)];
    } else {
      X = [0, 0];
      Y = [15, Math.round(k * 4)];
    }
    return [X, Y];
  }
}


///<reference path="../../../../node_modules/@types/echarts/index.d.ts"/>
import {ChangeDetectionStrategy, Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {GetdataService, Line} from '../../serve/getdata.service';
import {ChangeDetectorRef} from '@angular/core';
import * as echarts from 'echarts';
import { ElMessageService } from 'element-angular';
@Component({
  selector: 'app-resdata',
  templateUrl: './resdata.component.html',
  styleUrls: ['./resdata.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResdataComponent implements OnInit {
    /*在线人数的配置文件*/
    lineNumber =  {
      title: {
        text: '在线人数',
        top: 0
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
        data: ['总数', '儿童', '青年', '中年', '老年'],
        bottom: 0
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: ['IOS', '安卓', 'PC', 'ipad', '未知', '其他'],
        }
        ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '总数',
          max: 2000,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: '类别',
          max: 1000,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
        ],
      series: [{
        name: '总数',
        xAyisIndex: 1,
        type: 'line',
        data: []
      },
        {
          name: '儿童',
          type: 'bar',
          data: []
        },
        {
          name: '青年',
          type: 'bar',
          data: []
        },
        {
          name: '中年',
          type: 'bar',
          data: []
        },
        {
          name: '老年',
          type: 'bar',
          data: []
        }]
    };
    /*系统指数的配置文件*/
    systemStatus: any = {
      title: {
        text: '系统负载',
        top: 0
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {},
          backgroundColor: '#283b56'
        }
      },
      legend: {
        data: ['在线人数', '系统负载', '响应率', '吞吐量', '资源使用' ],
        bottom: 0
      },
      toolbox: {
        show: false,
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
          data: ['0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM', '0:0:0 PM']
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '指标（%）',
          max: 100,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: '',
          scale: true,
          name: '人数',
          max: 10000,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: '在线人数',
          type: 'line',
          yAxisIndex: 1,
          data: []
        },
        {
          name: '系统负载',
          type: 'line',
          xAyisIndex: 1,
          data: []
        },
        {
          name: '响应率',
          type: 'line',
          data: []
        },
        {
          name: '吞吐量',
          type: 'line',
          data: []
        },
        {
          name: '资源使用',
          type: 'line',
          data: []
        }
      ]
    };
    /*系统健康的度的配置文件*/
    syshealthStatus: any = {
        tooltip : {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
          }
        },
        series: [
          {
            name: '系统健康',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: '0', name: '健康度'}]
          }
        ]
    };
    /*在线人数图表*/
    linePersonOption: any;
    /*系统指标数图表*/
    lineSyastemOption: any;
    /*系统健康的实时,用于初始化图表*/
    syshealOption: any;
    /*系统状态的实时*/
    syssatus: any;
    /*x系统的各项的指标以及在线的人数的数据，主要用于计算系统健康的程度指标，庽用于初始化系统健康程度的图表*/
    linenum: any;
    /*现在系统的健康的程度*/
    nowHealthnum: Array<number> = [0];
    /*用于存储数据是否加载完毕的*/
    showloading = true;
    /*详细信息的显示框*/
    sysMesalert = true;
    /*系统警告详细信息*/
    systeDetailtoke: any[] = [
      [
        {
          id: '',
          time: '',
          degree: '',
          cure: '',
          desc: '',
          who: '',
          area: '',
        }
      ],
      [
        {
          upperAdvice: 'loading.....',
        }
      ],
      [
        {
          solveAdvice: 'loading.....',
        }
      ],
    ];
    /*系统警告*/
    systemWaring =  [
      {
        id: '0',
        time: 'loading',
        degree: 'loading',
        cure: 'loading',
        desc: 'loading',
        who: 'loading',
        area: 'loading',
      }
    ];
    /*系统警告的是否显示加载图标*/
    dataresultLoading = true;
    constructor(private chart: NgxEchartsModule,
                private getData: GetdataService,
                private changeDetectorRef: ChangeDetectorRef,
                private message: ElMessageService,
                ) {
      setTimeout(() => {
        this.showloading = false;
      }, 3000);
    }
  ngOnInit() {
    /*数据渲染*/
    this.getData.getSyssumdata().subscribe(res => {
      // console.log(res[2].guideline);
      /*在线人数图表*/
      this.linePersonOption = echarts.init(document.getElementById('linenum') as HTMLDivElement);
      /*设置在线人数图表的基本轴*/
      this.linePersonOption.setOption(this.lineNumber);
      /*动画加载*/
      this.linePersonOption.showLoading();
      /*系统指标图表*/
      this.lineSyastemOption = echarts.init(document.getElementById('converse') as HTMLDivElement);
      /*设置系统指标图表的基本轴*/
      this.lineSyastemOption.setOption(this.systemStatus);
      /*动画加载*/
      this.lineSyastemOption.showLoading();
      /*系统安全评判图表*/
      this.syshealOption = echarts.init(document.getElementById('safe') as HTMLDivElement);
      /*/*设置安全系数图表的基本配置*/
      this.syshealOption.setOption(this.syshealthStatus);
      /*动画加载*/
      this.syshealOption.showLoading();
      this.syssatus = res[2].guideline;
      setTimeout(() => {
        /*显示数据，隐藏动画*/
        this.linePersonOption.hideLoading();
        this.lineSyastemOption.hideLoading();
        this.syshealOption.hideLoading();
      }, 5000);
      /*在线人数图表数据的初始化*/
      setInterval( () => {
        /*实时刷新在线人数的数据*/
        this.linePersonOption.setOption({
          series: [
          {
            name: '总数',
            xAyisIndex: 1,
            type: 'line',
            data: res[1].classline
          },
          {
            name: '儿童',
            type: 'bar',
            data: res[1].children
          },
          {
            name: '青年',
            type: 'bar',
            data: res[1].young
          },
          {
            name: '中年',
            type: 'bar',
            data: res[1].middle
          },
          {
            name: '老年',
            type: 'bar',
            data: res[1].older
          }
        ]});
        /*实时刷新系统的各项的指标*/
        this.lineSyastemOption.setOption({
          xAxis: {
            data: this.statusAutoTime()
          },
          series: [
              {
                name: '在线人数',
                xAyisIndex: 1,
                type: 'line',
                data: this.addData(this.syssatus[0], 10)
              },
              {
                name: '系统负载',
                type: 'line',
                data: this.addData(this.syssatus[1], 10)
              },
              {
                name: '响应率',
                type: 'line',
                data: this.addData(this.syssatus[2], 10)
              },
              {
                name: '吞吐量',
                type: 'line',
                data: this.addData(this.syssatus[3], 10)
              },
              {
                name: '资源使用',
                type: 'line',
                data: this.addData(this.syssatus[4], 10)
              }
            ]
        });
       /*实时刷新系统的安全系数*/
        this.syshealOption.setOption({
          series: [
            {
              name: '系统健康',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: this.accountStatusnu([100000, 100, 100, 100, 100], this.syssatus ), name: '健康度'}]
            }]
        });
      }, 5000);
  });
    /*系统警告*/
    this.getData.getSysmessage().subscribe(res => {
      if (res != null && res !== undefined) {
        console.log('数据获取成功！');
        console.log(res);
        console.log(this.dataresultLoading);
        this.systemWaring = res;
        this.dataresultLoading = false;
        console.log(this.dataresultLoading);
       } else {
          console.log('数据获取失败！');
      }
    });
  }
  /*x轴时间的更新方法*/
  private statusAutoTime(): Array<number> {
    const axis1Data = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
    let now: any = new Date();
    const res = [];
    let len = 10;
    // noinspection JSAnnotator
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      // noinspection JSAnnotator
      now = new Date(now - 4000);
    }
    res.shift();
    res.push(axis1Data);
    return res;
  }
  /*实时更新数据的函数*/
  private addData(newData: number, timelength: number): any {
    const res = [];
    let len = timelength;
    while (len--) {
      if (res.length < timelength) {
        res.push(newData);
      } else {
        res.shift();
        res.push(newData);
      }
    }
    return res;
  }
  /*计算啊当前的健康程度，第一个参数为系统承受的能力，第二个参数为现在的指标*/
  private accountStatusnu(able: Array<number>, now: Array<number>): Array<number> {
    const res: Array<number> = [];
    res.push(Math.floor(now[0] / able[0] * 100) / 100);
    for (let i = 1; i < able.length; i++) {
      const num: number = <number>Math.floor(now[i] / able[i] * 100) / 100;
      res.push(<number>num);
    }
    return res;
  }
  /*标记系统加警告消息*/
  private flagMsg(type: string, ref: any): void {
    this.getData.setSysmessageWriteByid(ref.rowData.id).subscribe((res: boolean) => {
      console.log(res);
      if (res) {
        this.message.setOptions({showClose: true });
        this.message[type]('消息标记成功');
      } else {
        this.message.setOptions({showClose: true });
        this.message[type]('消息标记失败 ');
      }
    });
  }
  /*查看系统警告的详细信息*/
  private readMsg(ref: any): void {
    const ress = [];
    this.sysMesalert = false;
    this.getData.getSysmessageByid(ref.rowData.id).subscribe(res => {
      ress.push(res);
      /*数据不知啥原因，无法同时显然模板，只能采用比较粗暴的办法进行push操作*/
      this.systeDetailtoke[0] = ress;
      this.systeDetailtoke[2] = ress;
      this.systeDetailtoke[1] = ress;
    });
  }
  private closeAlert() {
    this.sysMesalert = true;
    return true;
  }
}

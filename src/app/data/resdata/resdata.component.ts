import {ChangeDetectionStrategy, Component, OnInit, Output} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {Observable} from 'rxjs';
import {GetdataService, Line} from '../../serve/getdata.service';
import {ChangeDetectorRef} from '@angular/core';
import * as echarts from 'echarts';

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
          max: 400,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: '类别',
          max: 400,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
        ],
      series: []
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
        data: ['在线人数', '系统负载', '相应率', '吞吐量', '资源使用' ],
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
          max: 500,
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
          name: '相应率',
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
    /*系统状态的实时,用于初始化图表*/
    syssatus: any;
    /*系统健康的实时,用于初始化图表*/
    sysheal: any;
    /*x系统的各项的指标以及在线的人数的数据，主要用于计算系统健康的程度指标，庽用于初始化系统健康程度的图表*/
    linenum: any;
    /*现在系统的健康的程度*/
    nowHealthnum: Array<number> = [0];
    /*用于存储数据是否加载完毕的*/
    showloading = true;
  tableData: any[] = [{
    time: 2017,
    degree: 5,
    cure: '是',
    desc: '操作不当引起的数据波动！',
  }];
    constructor(private chart: NgxEchartsModule,
                private getData: GetdataService,
                private changeDetectorRef: ChangeDetectorRef
                ) {
      setTimeout(() => {
        this.showloading = false;
      }, 3000);
    }
    ngOnInit() {
    this.getData.getLinenumber().subscribe(res => {
      this.lineNumber.series = res;
      // console.log(this.linenum);
      this.linePersonOption = this.lineNumber;
      /*变更检测*/
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
    this.getData.getStatusnumber().subscribe(res => {
      /*初始化一个图表*/
      this.syssatus = echarts.init(document.getElementById('converse') as HTMLDivElement);
      /*设置初始的属性*/
      this.syssatus.setOption(this.systemStatus);
      // console.log(res);
      setInterval(() => {
        /*这种方式无法实现数据的双向的绑定*/
        /*this.systemStatus.xAxis[0].data = this.statusAutoTime();
        this.lineSyastemOption = this.systemStatus;*/
        this.syssatus.hideLoading();
        this.syssatus.setOption(<echarts.EChartOption> {
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: this.statusAutoTime()
          },
          series: res
        });
        this.linenum = res;
        // console.log(this.linenum);
        this.changeDetectorRef.markForCheck();
        // this.changeDetectorRef.detectChanges();
      }, 3000);
    });
    this.sysheal = echarts.init(document.getElementById('safe') as HTMLDivElement);
    // this.sysheal.setOption(this.syshealthStatus);
    setInterval(() => {
      this.nowHealthnum.splice(0, 1, this.getData.accountStatusnu([ 500, 500, 500, 500, 500], [200, 250, 300, 120, 400])[0]);
      const num: number = this.nowHealthnum[0] * 100;
      /*不知道为啥不同步更新数据*/
      this.sysheal.setOption(<echarts.EChartOption> {
        series: [
        {
          name: '系统健康',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: num, name: '健康度'}]
        }
      ]});
    }, 1000);

  }
  /*x轴时间的更新方法*/
  statusAutoTime(): Array<number> {
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
  }

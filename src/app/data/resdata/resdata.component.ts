import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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
    systemStatus = {
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
          data: []
        }
        /*{
          type: 'category',
          boundaryGap: true,
          data: (function () {
            const res = [];
            let len = 10;
            // noinspection JSAnnotator
            while (len--) {
              res.push(10 - len - 1);
            }
            return res;
          })()
        }*/
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '指标（%）',
          max: 30,
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
          xAyisIndex: 2,
          data: []
        },
        {
          name: '系统负载',
          type: 'line',
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
    /*在线人数图表*/
    linePersonOption: any;
    /*系统指标数图表*/
    lineSyastemOption: any;
    constructor(private chart: NgxEchartsModule,
                private getData: GetdataService,
                private changeDetectorRef: ChangeDetectorRef
                ) { }
    ngOnInit() {
    this.getData.getLinenumber().subscribe(res => {
      this.lineNumber.series = res;
      this.linePersonOption = this.lineNumber;
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
    this.getData.getStatusnumber().subscribe(res => {
      setInterval(() => {
        this.systemStatus.xAxis[0].data = this.statusAutoTime();
        this.lineSyastemOption = this.systemStatus;
        // console.log(this.lineSyastemOption);
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }, 2000);
    });
  }
  statusAutoTime(): Array<number> {
        const x1 = this.systemStatus.xAxis[0].data;
        const axis1Data = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        let now: any = new Date();
        const res = [];
        let len = 10;
        // noinspection JSAnnotator
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
          // noinspection JSAnnotator
          now = new Date(now - 2000);
        }
      res.shift();
      res.push(axis1Data);
      return res;
  }
  }

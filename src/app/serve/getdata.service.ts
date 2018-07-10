import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NgxEchartsModule} from 'ngx-echarts';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  chartOption: any;
  constructor(private chart: NgxEchartsModule ) { }
  // noinspection JSAnnotator
  getchartOption() {
    this.chartOption = {
      title: {
        text: '在线人数'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data: [ '手机端', 'PC端', '移动端', '其他']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name: '手机端',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'PC端',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '移动端',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '其他',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    return this.chartOption;

  }
}

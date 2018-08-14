import { Component, OnInit} from '@angular/core';
import 'echarts/map/js/china.js';
import {NgxEchartsModule} from 'ngx-echarts';
import {GetdataService} from '../../serve/getdata.service';
import * as echarts from 'echarts';
@Component({
  selector: 'app-mapdata',
  templateUrl: './mapdata.component.html',
  styleUrls: ['./mapdata.component.css']
})
export class MapdataComponent implements OnInit {
  /*系统使用的全国的分布情况的配置文件*/
  public dataSafeMap = {
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
      data: ['媒体点播', '大型存储', '服务建设']
    },
    visualMap: {
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],           // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: false,
      orient : 'vertical',
      left: 'right',
      top: 'center',
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        coordinateSystem: 'geo',
        name: '媒体点播',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        data: []
      },
      {
        coordinateSystem: 'geo',
        name: '大型存储',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: []
      },
      {
        coordinateSystem: 'geo',
        name: '服务建设',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        data: []
      }
    ]
  };
  /*系统有用途的配置文件*/
  public dataSpreadPie = {
    tooltip : {
      trigger: 'item',
      formatter: ' {a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    legend: {
      orient: 'horizontal',
      x: 'left',
      data: [ '负载均衡', '关系型数据库', '对象存储', '云磁盘', '应用引擎', '内容分发']
    },
    series: [
      {
        name: '用途分布',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [].sort(function (a, b) { return a.value - b.value; }),
      }
    ]};
  /*系统开发配置*/
  public sysOption: any;
  /*用来初始化地图*/
  public sysmap: any;
  /*用来初始化pie图*/
  public syspie: any;
  /*用于显示加载图标*/
  public showloading = true;

  constructor(private chart: NgxEchartsModule,
              private getData: GetdataService) {
  }

  ngOnInit() {
    /*土婊渲染*/
    this.getData.getSysdataMap().subscribe(res => {
      /*图表数据的渲染*/
      /*初始化地图*/
      this.sysmap = echarts.init(document.getElementById('sysdataMap') as HTMLDivElement);
      this.sysmap.setOption(this.dataSafeMap);
      /*动画加载*/
      this.sysmap.showLoading();
      /*初始化pie*/
      this.syspie = echarts.init(document.getElementById('sysdataPie') as HTMLDivElement);
      this.syspie.setOption(this.dataSpreadPie);
      /*动画加载*/
      this.syspie.showLoading();
        console.log(res);
        /*再次绘制地图*/
        this.dataSafeMap.series[0].data = res[0].media;
        this.dataSafeMap.series[1].data = res[0].memory;
        this.dataSafeMap.series[2].data = res[0].service;
        this.sysmap.setOption(this.dataSafeMap);
        this.sysmap.hideLoading();
        /*再次绘制pie*/
        console.log(res[1].pie);
        this.dataSpreadPie.series[0].data = res[1].pie;
        this.syspie.setOption(this.dataSpreadPie);
        this.syspie.hideLoading();
    });
    /*系统开发的配置信息的渲染*/
    this.getData.getSysdevelopMess().subscribe(res => {
      this.sysOption = res[0];
    });
  }

}

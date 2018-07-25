import { Component, OnInit } from '@angular/core';
import {
  BNavigationControl,
  ControlAnchor,
  GeolocationControlOptions,
  MapOptions, MapTypeControlOptions, MapTypeControlType, MarkerOptions, NavigationControlOptions, NavigationControlType,
  OverviewMapControlOptions, Point,
  ScaleControlOptions
} from 'angular2-baidu-map';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {LifeService} from '../../serve/life.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Icon} from 'angular2-baidu-map/types/Icon';
import {BPoint} from 'angular2-baidu-map/types/Point';
declare var AMap: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  /*百度地图的接入方式的配置参数*/
  // private opts: MapOptions;
  // private markers: Array<{ point: Point; options?: MarkerOptions }>;
  // private controlOpts: NavigationControlOptions;
  // private overviewmapOpts: OverviewMapControlOptions;
  // private scaleOpts: ScaleControlOptions;
  // private mapTypeOpts: MapTypeControlOptions;
  // private geolocationOpts: GeolocationControlOptions;

  /*搜索表单*/
  private formModel: FormGroup;
  private cityname = new FormControl('', Validators.required);
  /*高德地图的配置参数*/
  private citylocation: string;
  private jingwei: Array<number>;
  constructor(private router: Router, private http: Http, private fb: FormBuilder, private life: LifeService) {
    this.formModel = this.fb.group({
      'city': this.cityname
    });
  //  /*百度地图的标记配置*/
  // /* this.markers = [
  //    {
  //      options: {
  //        icon: {
  //          imageUrl: '/assets//location.jpg',
  //          size: {
  //            height: 60,
  //            width: 50
  //          }
  //        },
  //        title: 'asdkjgaslfkjasd'
  //      },
  //      point: {
  //        lng: 120.62,   // 经度
  //        lat: 31.32,    // 纬度
  //      }
  //    },
  //    {
  //      point: {
  //        lng: 120.63,   // 经度
  //        lat: 31.32,    // 纬度
  //      }
  //    },
  //    {
  //      point: {
  //        lng: 120.63,   // 经度
  //        lat: 31.31,    // 纬度
  //      }
  //    }
  //  ];*/
  // /*百度地图的配置*/
  // /* this.opts = {
  //    centerAndZoom: {
  //      lng: 121.506191,
  //      lat: 31.245554,
  //      zoom: 15
  //    },
  //    minZoom: 3,  // 最小缩放级别的地图
  //    maxZoom: 19, // 最大缩放级别的地图
  //    enableHighResolution: true,  // 是否用高分辨率的地图，default：true
  //    enableAutoResize: true,  // 是否可以自动调整大小，default：true
  //    enableMapClick: true,  // 地图是否可以点击，default：true
  //    disableDragging: false, // 是否禁用地图拖动功能
  //    enableScrollWheelZoom: true, // 是否启用滚轮进行缩放功能
  //    disableDoubleClickZoom: false, // 是否禁用双击缩放功能
  //    enableKeyboard: true,  // 是否启用键盘移动地图功能
  //    enableInertialDragging: false,     // 是否启用惯性阻力函数
  //    enableContinuousZoom: true,  // 是否启用连续缩放功能
  //    disablePinchToZoom: false,   // 是否禁用缩放功能的缩放
  //    cursor: '',         // 设置默认的光标样式,应该遵循CSS规范
  //    draggingCursor: '', // 设置默认的拖动光标样式，应该遵循CSS规范
  //    currentCity: '潍坊市',   // 设置当前的城市
  //  };*/
  //  /*地图控制器参数*/
  //  /*this.controlOpts = {
  //    anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
  //    type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
  //  };*/

  //  /*全景图的配置参数*/
  //  /*this.overviewmapOpts = {
  //    anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
  //    isOpen: true
  //  };*/

  //  /*this.scaleOpts = {
  //    anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
  //  };*/

  //  /*地图类型的配置参数*/
  //  /*this.mapTypeOpts = {
  //    type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
  //  };*/
  //  /*定位功能的模块*/
  //  /*this.geolocationOpts = {
  //    showAddressBar: true,
  //    enableAutoLocation : true,
  //    locationIcon: {
  //      imageUrl: '/assets//location.jpg',
  //      size: {
  //        height: 60,
  //        width: 50
  //      },
  //      imageSize: {
  //        height: 60,
  //        width: 50
  //      },
  //    }
  //  };*/
  }
  ngOnInit() {
    const map = new AMap.Map('container', {
      resizeEnable: true
    });
    map.plugin([
              'AMap.Geolocation',
              'AMap.Marker',
              /*'AMap.ControlBar',
              'AMap.OverView',
              'AMap.MapType',
              'AMap.Scale',
              'AMap.ToolBar'*/
    ], () => {
      /*定位的插件*/
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,    // 是否使用高精度定位，默认:true
        timeout: 10000,              // 超过10秒后停止定位，默认：无穷大
        maximumAge: 0,               // 定位结果缓存0毫秒，默认：0
        convert: true,               // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,            // 显示定位按钮，默认：true
        buttonPosition: 'LB',        // 定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,          //  定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,          //  定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,       //  定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true       //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', this.locationSuccess);//返回定位信息
      AMap.event.addListener(geolocation, 'error', this.locationFail);
      /*/!*地图旋转等控件*!/
      const controlBar = new AMap.ControlBar({
        position: {bottom: '10px', right: '10px'}
      });
      map.addControl(controlBar);
      /!*地图类型*!/
        const type = new AMap.MapType({
        defaultType: 0
      });
      map.addControl(type);
      /!*地图的鹰眼控件*!/
      const view = new AMap.OverView();
      map.addControl(view);*/
      const marker = new AMap.Marker({
        map: map,
        position: this.jingwei,   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: this.citylocation
      });
      map.addControl(marker);
    });
  }
  /*搜索地点的触发的事件*/
  submit(): void {
    console.log(this.formModel.value);
  }
  /*百度地图的加载时触发的事件*/
 /* private  controlLoaded(control: BNavigationControl): void {
    console.log('control loaded', control);
  }
  /!*百度地图的定位的事件*!/
  private locationMap(event): void {
    // console.log(event.typedef);
  }*/


 locationSuccess(data): void {
    console.log(data);
    this.citylocation = data.formattedAddress;
    this.jingwei = [data.position.lng, data.position.lat];
    console.log(this.jingwei);
 }
  locationFail(data): void {
    console.log(data);
  }
}

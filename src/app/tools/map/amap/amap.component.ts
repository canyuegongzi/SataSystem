import { Component, OnInit } from '@angular/core';
import {BaiduMapModule, MapOptions} from 'angular2-baidu-map';
import {BMap} from 'angular2-baidu-map/types/BMap';
declare var AMap: any;
@Component({
  selector: 'app-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.css']
})
export class AmapComponent implements OnInit {

  public opts: MapOptions;

  constructor() {
    this.opts = {
      centerAndZoom: {
        lng: 121.506191,
        lat: 31.245554,
        zoom: 15
      }
    };
  }

  ngOnInit() {
/*
    const map = new BMap.Map('map');//创建地图实例
    const point = new BMap.Point(116.404, 39.915);//创建点坐标
    map.centerAndZoom(point, 15);//初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放*/
    /*this.getMap ();*/


    /*const map = new AMap.Map('container');
    map.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, /!*!//是否使用高精度定位，默认:true*!/
        timeout: 10000,           /!*!//超过10秒后停止定位，默认：无穷大*!/
        maximumAge: 0,           /!*!//定位结果缓存0毫秒，默认：0*!/
        convert: true,          /!* //自动偏移坐标，偏移后的坐标为高德坐标，默认：true*!/
        showButton: true,        /!*!//显示定位按钮，默认：true*!/
        buttonPosition: 'LB',    /!*!//定位按钮停靠位置，默认：'LB'，左下角*!/
        buttonOffset: new AMap.Pixel(10, 20), /!*!//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)*!/
        showMarker: true,       /!* //定位成功后在定位到的位置显示点标记，默认：true*!/
        showCircle: true,        /!*!//定位成功后用圆圈表示定位精度范围，默认：true*!/
        panToLocation: true,     /!*!//定位成功后将定位到的位置作为地图中心点，默认：true*!/
        zoomToAccuracy: true      /!*!//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false*!/
      });
      map.addControl(geolocation);
    });*/
  }
  getMap() {
    const map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [116.397428, 39.90923]
    });
  }

}

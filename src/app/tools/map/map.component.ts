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
declare var BMap: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private opts: MapOptions;
  private markers: Array<{ point: Point; options?: MarkerOptions }>;
  private controlOpts: NavigationControlOptions;
  private overviewmapOpts: OverviewMapControlOptions;
  private scaleOpts: ScaleControlOptions;
  private mapTypeOpts: MapTypeControlOptions;
  private geolocationOpts: GeolocationControlOptions;

  private formModel: FormGroup;
  private cityname = new FormControl('', Validators.required);
  constructor(private router: Router, private http: Http, private fb: FormBuilder, private life: LifeService) {
    this.formModel = this.fb.group({
      'city': this.cityname
    });
    this.markers = [
      {
        options: {
          icon: {
            imageUrl: '/assets//location.jpg',
            size: {
              height: 60,
              width: 50
            }
          },
          title: 'asdkjgaslfkjasd'
        },
        point: {
          lng: 120.62,   // 经度
          lat: 31.32,    // 纬度
        }
      },
      {
        point: {
          lng: 120.63,   // 经度
          lat: 31.32,    // 纬度
        }
      },
      {
        point: {
          lng: 120.63,   // 经度
          lat: 31.31,    // 纬度
        }
      }
    ];




    this.opts = {
      centerAndZoom: {
        lng: 121.506191,
        lat: 31.245554,
        zoom: 15
      },
      minZoom: 3,  // 最小缩放级别的地图
      maxZoom: 19, // 最大缩放级别的地图
      enableHighResolution: true,  // 是否用高分辨率的地图，default：true
      enableAutoResize: true,  // 是否可以自动调整大小，default：true
      enableMapClick: true,  // 地图是否可以点击，default：true
      disableDragging: false, // 是否禁用地图拖动功能
      enableScrollWheelZoom: true, // 是否启用滚轮进行缩放功能
      disableDoubleClickZoom: false, // 是否禁用双击缩放功能
      enableKeyboard: true,  // 是否启用键盘移动地图功能
      enableInertialDragging: false,     // 是否启用惯性阻力函数
      enableContinuousZoom: true,  // 是否启用连续缩放功能
      disablePinchToZoom: false,   // 是否禁用缩放功能的缩放
      cursor: '',         // 设置默认的光标样式,应该遵循CSS规范
      draggingCursor: '', // 设置默认的拖动光标样式，应该遵循CSS规范
      currentCity: '潍坊市',   // 设置当前的城市
    };

    /*地图控制器参数*/
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    };

    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: true
    };

    this.scaleOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    };

    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
    };
    this.geolocationOpts = {
      showAddressBar: true,
      enableAutoLocation : true,
      locationIcon: {
        imageUrl: '/assets//location.jpg',
        size: {
          height: 60,
          width: 50
        },
        imageSize: {
          height: 60,
          width: 50
        },
      }
    };
  }
  ngOnInit() {
    this.locationMap(event);

  }

  submit(): void {
    console.log(this.formModel.value);
  }
  private  controlLoaded(control: BNavigationControl): void {
    console.log('control loaded', control);
  }
  private locationMap(event): void {
    // console.log(event.typedef);
  }
}

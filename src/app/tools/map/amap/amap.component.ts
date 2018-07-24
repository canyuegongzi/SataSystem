import { Component, OnInit } from '@angular/core';
import {BaiduMapModule, MapOptions} from 'angular2-baidu-map';

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

  }

}

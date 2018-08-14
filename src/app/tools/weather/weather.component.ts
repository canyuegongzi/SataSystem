import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LifeService} from '../../serve/life.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public formModel: FormGroup;
  public cityname = new FormControl('', Validators.required);
  /*现在的天气数据*/
  public  nowWeather: any;
  /*未来的天气数据*/
  public futureWeather: any;
  /*现在的坏境的数据*/
  public environmentStatus: any;
  /*现在的穿衣的建议*/
  public Advice: any;
  /*城市*/
  public cityName: string;
  constructor(private router: Router, private http: Http, private fb: FormBuilder, private life: LifeService) {
    this.formModel = this.fb.group({
      'city': this.cityname
    });
  }

  ngOnInit() {
    this.life.searchWeather('潍坊').subscribe({
      next: res => {
        this.dataInit(res);
        // console.log(res);
      },
      error: () => {
        Swal('加载失败');
      }
    });
  }
  /*页面数据渲染*/
  dataInit(res) {
    this.cityName = res.data.value[0].city;
    this.nowWeather = res.data.value[0].realtime;
    this.futureWeather = (res.data.value[0].weathers).slice(0, 6);
    this.environmentStatus = res.data.value[0].pm25;
    this.Advice = (res.data.value[0].indexes).slice(0, 4);
  }
  /*查询*/
  submit(): void {
    // console.log(this.formModel.value);
    this.life.searchWeather((this.formModel.value).city).subscribe({
      next: (res) => {
        this.dataInit(res);
      },
      error:  () => {
        Swal('获取失败', '具体原因请联系管理员', 'error');
    }
    });
  }
  /*init() {
    // JavaScript Document

    $(function(){

// time
      setInterval(function time() {
        const today = new Date();
        const year = today.getFullYear();
        const mon = today.getMonth();
        const day = today.getDate();

        const h = today.getHours();
        const m = today.getMinutes();
        // add a zero in front of numbers<10
        m = checkTime(m);

        function checkTime(i) {
          if (i < 10) { i = '0'  + i }
          return i;
        }

        $("span#time1").text(year+"-"+mon+"-"+day);
        $("span#time2").text(h+":"+m);
      },300)

    })


// Cloud Float...
    var $main = $cloud = mainwidth = null;
    var offset1 = 450;
    var offset2 = 0;

    var offsetbg = 0;

    $(document).ready(
      function () {
        $main = $("#mainBody");
        $body = $("body");
        $cloud1 = $("#cloud1");
        $cloud2 = $("#cloud2");

        mainwidth = $main.outerWidth();

      }
    );

    /// 飘动
    setInterval(function flutter() {
      if (offset1 >= mainwidth) {
        offset1 =  -580;
      }

      if (offset2 >= mainwidth) {
        offset2 =  -580;
      }

      offset1 += 1.1;
      offset2 += 1;
      $cloud1.css("background-position", offset1 + "px 30px")

      $cloud2.css("background-position", offset2 + "px 340px")
    }, 70);


    setInterval(function bg() {
      if (offsetbg >= mainwidth) {
        offsetbg =  -580;
      }

      offsetbg += 0.6;
      $body.css("background-position", -offsetbg + "px 0")
    }, 90 );

  }*/
}

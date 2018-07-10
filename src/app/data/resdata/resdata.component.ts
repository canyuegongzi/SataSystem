import { Component, OnInit } from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {Observable} from 'rxjs';
import {GetdataService} from '../../serve/getdata.service';

@Component({
  selector: 'app-resdata',
  templateUrl: './resdata.component.html',
  styleUrls: ['./resdata.component.css']
})
export class ResdataComponent implements OnInit {
  chartOption: any;
  constructor(private chart: NgxEchartsModule, private getData: GetdataService) { }
  ngOnInit() {
    this.chartOption = this.getData.getchartOption();
    console.log(this.chartOption);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headohoto =  'http://oykcnjwn9.bkt.clouddn.com/907e733831ad4d17%21400x400_big.jpg';
  constructor() { }

  ngOnInit() {
  }

}

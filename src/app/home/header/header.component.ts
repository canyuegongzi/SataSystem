import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headohoto =  'https://img2.woyaogexing.com/2018/07/10/907e733831ad4d17!400x400_big.jpg';
  constructor() { }

  ngOnInit() {
  }

}

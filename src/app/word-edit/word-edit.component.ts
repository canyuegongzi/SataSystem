import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-edit',
  templateUrl: './word-edit.component.html',
  styleUrls: ['./word-edit.component.css']
})
export class WordEditComponent implements OnInit {

  public dataModel: any;
  constructor() { }

  ngOnInit() {

  }

  public handleEvent($eventObj) {
    console.log(this.dataModel);
  }

}

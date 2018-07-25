import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  events: any[] = [
    {
      title: '整天事件',
      start: '2017-03-11'
    },
    {
      title: '长事件',
      start: '2017-03-11',
      end: '2017-03-15'
    }, {
      title: '重要事件',
      start: '2017-03-16',
      type: 1
    }
  ];
  calendarOptions: Object = {
    height: 'parent',
    fixedWeekCount: false,
    defaultDate: '2017-03-09',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: this.events,
    eventClick: (calEvent, jsEvent, view) => {
      console.log(calEvent, jsEvent, view);
      // this.toastr.success(calEvent.title, '你点击了事件,事件详情见控制台：');
      console.log(view.calendar);
    },
    eventRender: function (event, element) {
      if (1 === event.type) {
        element.css('backgroundColor', '#C93A36');
        element.css('border', '1px solid #C93A36');
      }
    }
  };
  constructor(/*public toastr: ToastsManager,*/ vcr: ViewContainerRef) {
    /*this.toastr.setRootViewContainerRef(vcr);*/
  }
  ngOnInit() {
  }

}

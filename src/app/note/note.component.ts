import {
  Component, OnInit, ViewContainerRef, ChangeDetectionStrategy, ViewChild, TemplateRef, EventEmitter, Output,
  Input, AfterViewInit, OnDestroy
} from '@angular/core';
declare var tinymce: any;


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  constructor(/*public toastr: ToastsManager,*/ vcr: ViewContainerRef) {
  }
  ngOnInit() {
  }
}

import {Component, OnInit, ViewContainerRef, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  constructor(/*public toastr: ToastsManager,*/ vcr: ViewContainerRef) {
    /*this.toastr.setRootViewContainerRef(vcr);*/
  }
  ngOnInit() {
  }

}

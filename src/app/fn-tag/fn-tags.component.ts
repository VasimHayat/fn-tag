import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

export interface FnTagData {
  id: number | string;
  name: string;
}

@Component({
  selector: 'fn-tag',
  templateUrl: 'fn-tags.component.html',
  styleUrls: ['fn-tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FnTagComponent implements OnInit {
  @Input() tagArray: FnTagData[];
  @Output() addCallback: EventEmitter<any> = new EventEmitter();
  @Input() showLabel: boolean;

  selectedTags: Array<FnTagData> = [];

  ngOnInit() {
    if (this.tagArray && this.tagArray.length > 0) {
      for (const i of this.tagArray) {
        this.tagArray.push({
          id: i.id,
          name: i.name,
        });
      }
    }
  }
 

  addAction() {
    setTimeout(() => {
      this.addCallback.emit(this.selectedTags);
    });
  }

  filterTags(fnTagData: FnTagData) { 
    this.selectedTags = this.selectedTags.filter(el => {
      return el.name !== fnTagData.name;
    });

    this.addCallback.emit(this.selectedTags);
  }

}

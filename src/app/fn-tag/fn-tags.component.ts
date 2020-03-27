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
export class FnTagComponent {
  @Input() items: FnTagData[];
  @Input() showLabel: boolean;
  @Output() addCallback: EventEmitter<any> = new EventEmitter(); 

  selectedTags: Array<FnTagData> = []; 
  addTagFn(name) {
    return { id: name, name };
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

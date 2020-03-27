import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface FnTagData{
  id:string,
  description:string;
}

@Component({
  selector: 'fn-tag',
  templateUrl: 'fn-tags.component.html',
  styleUrls: ['fn-tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FnTagComponent implements OnInit {

  @Input() showLabel: boolean;

  selectedTags;
  tagArray: any[] = [];
  tagsArrays = [];

  ngOnInit() {
    this.tagsArrays.forEach((c, i) => {
      this.tagArray.push({ id: i, name: c });
    });
  }

  addTagFn(name) {
    if (!this.showLabel) {
      return { name, tag: true };
    } else {
      return { name, tag: false };
    }
  }

  filterArrayFunction(val) {

    this.selectedTags = this.selectedTags.filter((el) =>{
    return el.name !== val;
  });

  }

}

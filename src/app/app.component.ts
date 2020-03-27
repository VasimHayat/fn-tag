import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fn-tag';
  items = [{id:'1',name:'text'}];
  addCallback(tags){    console.log(tags)
  }
}

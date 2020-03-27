import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FnTagComponent } from './fn-tags.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [CommonModule, FormsModule, NgSelectModule],
    declarations: [FnTagComponent],
    exports: [FnTagComponent]
})
export class FnTagModule {

}

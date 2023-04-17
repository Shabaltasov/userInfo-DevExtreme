import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFilterComponent } from './table-filter.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TableFilterComponent
  ],
  exports: [
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TableFilterModule { }

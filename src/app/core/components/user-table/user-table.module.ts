import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserTableComponent} from './user-table.component';
import {DxDataGridModule, DxGalleryModule} from "devextreme-angular";
import {DxoImageModule} from "devextreme-angular/ui/nested";
import {TableFilterModule} from "../table-filter/table-filter.module";


@NgModule({
  declarations: [
    UserTableComponent
  ],
  exports: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxoImageModule,
    DxGalleryModule,
    TableFilterModule
  ]
})
export class UserTableModule {
}

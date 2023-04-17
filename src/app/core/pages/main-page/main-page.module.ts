import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {UserTableModule} from "../../components/user-table/user-table.module";
import {TableFilterModule} from "../../components/table-filter/table-filter.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserTableModule,
    TableFilterModule
  ]
})
export class MainPageModule { }

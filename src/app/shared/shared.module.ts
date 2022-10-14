import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    AboutComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutComponent,
    HelpComponent
  ]
})
export class PagesModule { }

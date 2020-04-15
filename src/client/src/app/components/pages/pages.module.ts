import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    AboutComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule
  ],
  exports: [
    AboutComponent,
    HelpComponent
  ]
})
export class PagesModule { }

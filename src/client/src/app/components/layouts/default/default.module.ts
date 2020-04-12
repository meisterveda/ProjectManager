import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { JobboardComponent } from '../../modules/jobs/jobboard/jobboard.component';
import { JobdetailsComponent } from '../../modules/jobs/jobdetails/jobdetails.component';
import { JobsearchComponent } from '../../modules/jobs/jobsearch/jobsearch.component';
import { MessageboardComponent } from '../../modules/messages/messageboard/messageboard.component';
import { MessageinboxComponent } from '../../modules/messages/messageinbox/messageinbox.component';
import { MessagesentComponent } from '../../modules/messages/messagesent/messagesent.component';
import { MessagedetailsComponent } from '../../modules/messages/messagedetails/messagedetails.component';
import { ProjectboardComponent } from '../../modules/projects/projectboard/projectboard.component';
import { ProjectmanagerComponent } from '../../modules/projects/projectmanager/projectmanager.component';
import { ProjectdetailsComponent } from '../../modules/projects/projectdetails/projectdetails.component';
import { ProjectcreateComponent } from '../../modules/projects/projectcreate/projectcreate.component';
import { PagesModule } from '../../pages/pages.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SettingsComponent } from '../../modules/settings/settings.component';
import { UserprofileComponent } from '../../modules/userprofile/userprofile.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    JobboardComponent,
    JobdetailsComponent,
    JobsearchComponent,
    MessageboardComponent,
    MessageinboxComponent,
    MessagesentComponent,
    MessagedetailsComponent,
    ProjectboardComponent,
    ProjectmanagerComponent,
    ProjectdetailsComponent,
    ProjectcreateComponent,
    SettingsComponent,
    UserprofileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PagesModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule
  ]
})
export class DefaultModule { }

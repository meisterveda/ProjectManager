import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { JobboardComponent } from './components/jobboard/jobboard.component';
import { MessageboardComponent } from './components/messageboard/messageboard.component';
import { ProjectboardComponent } from './components/projectboard/projectboard.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { MessageInboxComponent } from './components/message-inbox/message-inbox.component';
import { MessageSentComponent } from './components/message-sent/message-sent.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    JobboardComponent,
    MessageboardComponent,
    ProjectboardComponent,
    AdministrationComponent,
    AboutComponent,
    JobDetailComponent,
    MessageInboxComponent,
    MessageSentComponent,
    MessageDetailComponent,
    PageNotFoundComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

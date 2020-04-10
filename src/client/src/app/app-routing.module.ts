import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobboardComponent } from './components/jobboard/jobboard.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { MessageboardComponent } from './components/messageboard/messageboard.component';
import { MessageInboxComponent } from './components/message-inbox/message-inbox.component';
import { MessageSentComponent } from './components/message-sent/message-sent.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { ProjectboardComponent } from './components/projectboard/projectboard.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'jobs', component: JobboardComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'messages', component: MessageboardComponent },
  { path: 'messages/inbox', component: MessageInboxComponent },
  { path: 'messages/sent', component: MessageSentComponent },
  { path: 'messages/:id', component: MessageDetailComponent },
  { path: 'projects', component: ProjectboardComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'admin', component: AdministrationComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

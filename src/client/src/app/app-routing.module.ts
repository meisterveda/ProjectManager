import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/layouts/default/default.component';
import { DashboardComponent } from './components/modules/dashboard/dashboard/dashboard.component';
import { JobboardComponent } from './components/modules/jobs/jobboard/jobboard.component';
import { MessageboardComponent } from './components/modules/messages/messageboard/messageboard.component';
import { ProjectboardComponent } from './components/modules/projects/projectboard/projectboard.component';
import { AdminboardComponent } from './components/modules/admin/adminboard/adminboard.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'jobs',
    component: JobboardComponent
  }, {
    path: 'messages',
    component: MessageboardComponent
  }, {
    path: 'projects',
    component: ProjectboardComponent
  }, {
    path: 'admin',
    component: AdminboardComponent
  }, {
    path: 'about',
    component: AboutComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

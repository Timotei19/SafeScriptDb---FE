import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ConnectServerPageComponent } from './components/connect-server-page/connect-server-page.component';
import { LogsPageComponent } from './components/logs-page/logs-page.component';
import { SelectUpdatePageComponent } from './components/select-update-page/select-update-page.component';
import { AuditPageComponent } from './components/audit-page/audit-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'connect-server-page', component: ConnectServerPageComponent },
    { path: 'audit-page', component: AuditPageComponent },
    { path: 'select-update-page', component: SelectUpdatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

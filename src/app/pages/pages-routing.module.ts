import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsComponent } from './charts/charts.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


export const PAGES_ROUTES: Routes = [
    {path: '', component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {title: 'Progress'}},
      {path: 'charts', component: ChartsComponent, data: {title: 'Charts'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
      {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
      {path: 'rxjs', component: RxjsComponent, data: {title: 'Observables'}},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

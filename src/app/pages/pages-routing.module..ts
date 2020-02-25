import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsComponent } from './charts/charts.component';


export const PAGES_ROUTES: Routes = [
    {path: '', component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'charts', component: ChartsComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

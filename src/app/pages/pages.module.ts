import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module.';

@NgModule({
    declarations: [
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        ChartsComponent
    ],
    exports: [
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        ChartsComponent
    ],
    providers: [],
    imports: [
        SharedModule,
        PagesRoutingModule
    ]
})
export class PagesModule {}

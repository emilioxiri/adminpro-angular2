import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { IncrementalComponent } from '../components/incrimental/incremental.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DoughnutchartComponent } from '../components/doughnutchart/doughnutchart.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        ChartsComponent,
        IncrementalComponent,
        DoughnutchartComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent
    ],
    exports: [
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        ChartsComponent
    ],
    providers: [],
    imports: [
        BrowserModule,
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {}

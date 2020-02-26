import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styles: []
})
export class DoughnutchartComponent implements OnInit {
  @Input('labels') public doughnutChartLabels: Label[] = [];
  @Input('data') public doughnutChartData: MultiDataSet = [];
  @Input('type') public doughnutChartType: ChartType = 'doughnut';
  @Input('legend') public doughnutLegend: string = '';

  constructor() { }

  ngOnInit() {

  }

}

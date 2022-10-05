import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent, ApexChart, ApexAxisChartSeries, ApexDataLabels,
    ApexPlotOptions, ApexYAxis, ApexXAxis,
    ApexFill, ApexTitleSubtitle, ApexTheme,
    ApexTooltip, ApexStroke, ApexLegend
} from '@eui/components/externals/charts';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
    theme: ApexTheme;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
};

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}

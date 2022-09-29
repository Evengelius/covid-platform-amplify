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

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    dtOptions: DataTables.Settings = {};

    constructor() {
        // Chart
        this.chartOptions = {
            series: [
                {
                    name: "COVID-19 treatments",
                    data: [0, 2, 8, 0],
                    color: "#40A0FC"
                },
                {
                    name: "COVID-19 vaccines",
                    data: [3, 2, 6, 3],
                    color: "#034086"
                }
            ],
            chart: {
                type: "bar",
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetY: -20,
                style: {
                    fontSize: "12px",
                    colors: ["#000000"]
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["#fff"]
            },
            xaxis: {
                categories: ["Currently under rolling review", "Marketing authorisation application submitted", "Authorised for use in the EU", "Authorised for use as boosters in the EU"]
            },
            legend: {
                offsetY: 9
            }
        };

        // Table

    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            stateSave: true,
            lengthChange: false,
        };
    }

}

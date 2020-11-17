import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100],
   [50, 150, 120],
   [250, 130, 70],
 ];
 public doughnutChartType: ChartType = 'doughnut';

 constructor() { }

 ngOnInit(): void {
 }

 // Events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public random() {
   this.doughnutChartData = [
    [Math.round(Math.random() * 500), Math.round(Math.random() * 500), Math.round(Math.random() * 200)],
    [Math.round(Math.random() * 350), Math.round(Math.random() * 100), Math.round(Math.random() * 50)],
    [Math.round(Math.random() * 250), Math.round(Math.random() * 100), Math.round(Math.random() * 10)],
  ];
 }

}

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', fill: false },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', hidden: false },
    { data: [33, 58, 98, 65, 19, 14, 78], label: 'Series C' }
  ];

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public hideOne() {
    if ( !this.radarChartData[1].hidden ) {
      // this.radarChartData[1] = { data: this.radarChartData[1].data, label: this.radarChartData[1].label, hidden: true };
      this.radarChartData[1] = { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', hidden: true };
    } else {
      this.radarChartData[1] = { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', hidden: false };
    }

    // const datos = this.radarChartData[1].data;
    // const etiqueta = this.radarChartData[1].label;

    // console.log(`Data: ${datos}`);
    // console.log(`Label: ${etiqueta}`);
    // console.log(`Hidden: ${this.radarChartData[1].hidden}`);

    // if ( !this.radarChartData[1].hidden ) {
    //   this.radarChartData[1] = { data: datos, label: etiqueta, hidden: true };
    // } else {
    //   this.radarChartData[1] = { data: datos, label: etiqueta, hidden: false };
    // }
  }
}

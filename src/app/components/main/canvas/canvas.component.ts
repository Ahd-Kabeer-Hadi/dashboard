import { Component } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  constructor( 
    public commonSrv:CommonUtilsService
  ){}
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'area'; 
  chartOptions: Highcharts.Options = { 
    title: {
      text: ''
    },  
    
    legend: {
      align: 'right',     
      verticalAlign: 'top', 
      layout: 'horizontal' 
    },
   
    series: [{
       name: 'Current month',
      data: this.generateCurvyData(12),
      type: 'area',
      lineColor: '#EAE1FC',
      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#EAE1FC'],
            [1,'#ffffff']
        ]
      }
    },
    {
      name: 'Last month',
     data: this.generateCurvyData(12),
     type: 'area',
     lineColor: '#CFDEF5',
     fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, '#CFDEF5'],
          [1,'#ffffff']
      ]
    }
   }]
   }; 
   
  updateFlag: boolean = false; 
  oneToOneFlag: boolean = true; 
  runOutsideAngular: boolean = false; 
  generateCurvyData(points: number): Array<number> {
    const data: Array<number> = [];
    const baseValue = 5000; 

    for (let i = 0; i < points; i++) {
      const randomOffset = Math.random() * 3000 - 1500;
      data.push(baseValue + randomOffset);
    }

    return data;
  }
  
  
}

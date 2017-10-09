import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Visualizing Sensor Data';
  private timestamps: number[]= [1507498189484, 1507498129444, 1507498159454,
    1507498189484, 1507498219514];
  private series: any[] = [{
    name: 'light', 
    data: [1.06, 1.46, 0.88, 1.27, 1.17]
  }, { 
    name: 'sound',
    data: [1.76, 1.66, 1.56, 1.55, 1.46]
  }];
}

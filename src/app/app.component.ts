import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'Visualizing Sensor Data';
  private lightSensorDataRef: AngularFireList<any>;
  private lightSensorData: Observable<any[]>;
  private soundSensorDataRef: AngularFireList<any>;
  private soundSensorData: Observable<any[]>;
  
  constructor(db: AngularFireDatabase) {
    this.lightSensorDataRef = db.list('sensor-data/ambience/lightSensor');
    this.lightSensorData = this.lightSensorDataRef.valueChanges();
    this.soundSensorDataRef = db.list('sensor-data/ambience/soundSensor');
    this.soundSensorData = this.soundSensorDataRef.valueChanges();
  }; 
};

import { Component, OnInit } from '@angular/core';
import { IonBackButton,IonHeader, IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
  imports: [IonBackButton,IonHeader, IonToolbar, IonContent, IonButtons, IonTitle],

})
export class BuildingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }

}

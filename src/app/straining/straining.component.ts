import { Component, OnInit } from '@angular/core';
import { IonBackButton,IonHeader, IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-straining',
  templateUrl: './straining.component.html',
  styleUrls: ['./straining.component.scss'],
  imports: [IonBackButton,IonHeader, IonToolbar, IonContent, IonButtons, IonTitle],

})
export class StrainingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

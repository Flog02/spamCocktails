import { Component, OnInit } from '@angular/core';
import { IonBackButton,IonHeader, IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-layering',
  templateUrl: './layering.component.html',
  styleUrls: ['./layering.component.scss'],
  imports: [IonBackButton,IonHeader, IonToolbar, IonContent, IonButtons, IonTitle],

})
export class LayeringComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

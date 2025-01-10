import { Component, OnInit } from '@angular/core';
import { IonBackButton,IonHeader, IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-shaking',
  templateUrl: './shaking.component.html',
  styleUrls: ['./shaking.component.scss'],
  imports: [IonBackButton,IonHeader, IonToolbar, IonContent, IonButtons, IonTitle],

})
export class ShakingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }

}

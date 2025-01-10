import { Component, OnInit } from '@angular/core';
import { IonBackButton,IonHeader, IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-muddling',
  templateUrl: './muddling.component.html',
  styleUrls: ['./muddling.component.scss'],
  imports: [IonBackButton,IonHeader, IonToolbar, IonContent, IonButtons, IonTitle],

})
export class MuddlingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }

}

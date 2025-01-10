import { Component, OnInit } from '@angular/core';
import { IonBackButton,IonHeader, IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-stirring',
  templateUrl: './stirring.component.html',
  styleUrls: ['./stirring.component.scss'],
  imports: [IonBackButton,IonHeader, IonToolbar, IonContent, IonButtons, IonTitle],

})
export class StirringComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }

}

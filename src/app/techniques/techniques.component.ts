import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonHeader, IonToolbar, IonContent,IonButtons,IonTitle,IonList,IonItem,IonBackButton,IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.scss'],
  imports: [IonHeader, IonToolbar, IonContent, FontAwesomeModule, IonButtons, IonTitle, IonItem, IonList, RouterLink, IonBackButton, IonLabel],

})
export class TechniquesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }

}

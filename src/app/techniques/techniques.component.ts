import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonHeader, IonToolbar, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem,IonIcon,IonBackButton,IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.scss'],
  imports: [IonHeader, IonToolbar, IonContent, FontAwesomeModule, IonButtons, IonTitle, IonItem, IonList, RouterLink,IonIcon,IonBackButton,IonLabel],

})
export class TechniquesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

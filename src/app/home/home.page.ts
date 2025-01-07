import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem,} from '@ionic/angular/standalone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent,FontAwesomeModule,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonItem,IonList,RouterLink],
})
export class HomePage {
  constructor() {}



Open(type:any){
  console.log(type)

}


}

import { Component, OnInit } from '@angular/core';
import { IonButton,IonHeader,IonToolbar,IonContent,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonContent, IonTitle],

})
export class ShopComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  contactEmail = 'contact@cocktailbar.com';

}

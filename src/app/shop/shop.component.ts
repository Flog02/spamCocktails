import { Component, OnInit } from '@angular/core';
import { IonButtons,IonBackButton,IonButton,IonHeader,IonToolbar,IonContent,IonTitle} from '@ionic/angular/standalone';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports: [  RouterLink,IonButtons,IonBackButton,IonButton, IonHeader, IonToolbar, IonContent, IonTitle],

})
export class ShopComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  contactEmail = 'contact@cocktailbar.com';

}

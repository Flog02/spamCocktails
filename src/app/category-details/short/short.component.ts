import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss'],
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class ShortComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  shortDrinks = [
    { name: 'Whiskey Sour', image: 'assets/images/whiskey-sour.jpg', characteristics: 'Whiskey, Lemon, Sugar', description: 'A tangy whiskey cocktail.' },
    { name: 'Negroni', image: 'assets/images/negroni.jpg', characteristics: 'Gin, Campari, Sweet Vermouth', description: 'A bitter Italian classic.' },
    { name: 'Boulevardier', image: 'assets/images/boulevardier.jpg', characteristics: 'Bourbon, Campari, Sweet Vermouth', description: 'A whiskey twist on the Negroni.' },
    { name: 'Daiquiri', image: 'assets/images/daiquiri.jpg', characteristics: 'Rum, Lime, Sugar', description: 'A tart and refreshing rum cocktail.' }
  ];
}

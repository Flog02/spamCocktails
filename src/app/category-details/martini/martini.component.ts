import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-martini',
  templateUrl: './martini.component.html',
  styleUrls: ['./martini.component.scss'],
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class MartiniComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  martiniCocktails = [
    { name: 'Martini', image: 'assets/images/martini.jpg', characteristics: 'Gin, Dry Vermouth', description: 'A classic gin martini.' },
    { name: 'Espresso Martini', image: 'assets/images/espresso-martini.jpg', characteristics: 'Vodka, Espresso, Coffee Liqueur', description: 'A coffee-flavored twist on the martini.' },
    { name: 'French Martini', image: 'assets/images/french-martini.jpg', characteristics: 'Vodka, Raspberry Liqueur, Pineapple Juice', description: 'A fruity and elegant martini.' },
    { name: 'Apple Martini', image: 'assets/images/apple-martini.jpg', characteristics: 'Vodka, Apple Schnapps', description: 'A tart and sweet apple martini.' }
  ];
}

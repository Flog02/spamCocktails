import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class BeerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  beerCocktails = [
    { name: 'Black and Tan', image: 'assets/images/black-and-tan.jpg', characteristics: 'Stout, Pale Ale', description: 'A layered beer cocktail.' },
    { name: 'Michelada', image: 'assets/images/michelada.jpg', characteristics: 'Beer, Lime, Spices', description: 'A spicy Mexican beer cocktail.' },
    { name: 'Snakebite', image: 'assets/images/snakebite.jpg', characteristics: 'Lager, Cider', description: 'A sharp mix of beer and cider.' },
    { name: 'Radler', image: 'assets/images/radler.jpg', characteristics: 'Beer, Lemonade', description: 'A refreshing mix of beer and lemonade.' }
  ];
}

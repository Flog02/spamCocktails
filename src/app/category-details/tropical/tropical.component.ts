import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-tropical',
  templateUrl: './tropical.component.html',
  styleUrls: ['./tropical.component.scss'],
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class TropicalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  tropicalCocktails = [
    { name: 'Pina Colada', image: 'assets/images/pina-colada.jpg', characteristics: 'Rum, Coconut, Pineapple', description: 'A tropical delight.' },
    { name: 'Mai Tai', image: 'assets/images/mai-tai.jpg', characteristics: 'Rum, Lime, Orgeat, Orange Liqueur', description: 'A fruity, tropical rum cocktail.' },
    { name: 'Hurricane', image: 'assets/images/hurricane.jpg', characteristics: 'Rum, Passion Fruit, Lime', description: 'A strong and fruity storm in a glass.' },
    { name: 'Blue Lagoon', image: 'assets/images/blue-lagoon.jpg', characteristics: 'Vodka, Blue Curaçao, Lemonade', description: 'A vibrant, citrusy cocktail.' }
  ];
}

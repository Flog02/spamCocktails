import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-sparkling',
  templateUrl: './sparkling.component.html',
  styleUrls: ['./sparkling.component.scss'],
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class SparklingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  sparklingCocktails = [
    { name: 'Mimosa', image: 'assets/images/mimosa.jpg', characteristics: 'Champagne, Orange Juice', description: 'A brunch classic.' },
    { name: 'Bellini', image: 'assets/images/bellini.jpg', characteristics: 'Prosecco, Peach Purée', description: 'A sweet and fruity sparkling cocktail.' },
    { name: 'French 75', image: 'assets/images/french-75.jpg', characteristics: 'Gin, Champagne, Lemon Juice', description: 'A sparkling citrus gin drink.' },
    { name: 'Aperol Spritz', image: 'assets/images/aperol-spritz.jpg', characteristics: 'Aperol, Prosecco, Soda Water', description: 'A bitter-sweet Italian cocktail.' }
  ];
}

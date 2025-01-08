import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-longdrink',
  templateUrl: './longdrink.component.html',
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent],
  styleUrls: ['./longdrink.component.scss'],
})
export class LongdrinkComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  longDrinks = [
    { name: 'Long Island Iced Tea', image: 'assets/images/long-island.jpg', characteristics: 'Vodka, Gin, Tequila, Rum, Triple Sec, Cola', description: 'A strong mix with a cola finish.' },
    { name: 'Tom Collins', image: 'assets/images/tom-collins.jpg', characteristics: 'Gin, Lemon, Sugar, Soda Water', description: 'A fizzy gin drink with lemon.' },
    { name: 'Moscow Mule', image: 'assets/images/moscow-mule.jpg', characteristics: 'Vodka, Ginger Beer, Lime', description: 'A spicy and refreshing vodka drink.' },
    { name: 'Dark and Stormy', image: 'assets/images/dark-and-stormy.jpg', characteristics: 'Rum, Ginger Beer, Lime', description: 'A bold rum cocktail with a ginger kick.' },
    { name: 'Highball', image: 'assets/images/highball.jpg', characteristics: 'Whiskey, Soda Water', description: 'A simple whiskey soda.' }
  ];
}

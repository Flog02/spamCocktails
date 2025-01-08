import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-creamy',
  templateUrl: './creamy.component.html',
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent],
  styleUrls: ['./creamy.component.scss'],
})
export class CreamyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  creamyCocktails = [
    { name: 'White Russian', image: 'assets/images/white-russian.jpg', characteristics: 'Vodka, Coffee Liqueur, Cream', description: 'A smooth, creamy cocktail with a coffee kick.' },
    { name: 'Mudslide', image: 'assets/images/mudslide.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream', description: 'A decadent dessert cocktail.' },
    { name: 'Grasshopper', image: 'assets/images/grasshopper.jpg', characteristics: 'Crème de Menthe, Crème de Cacao, Cream', description: 'A sweet, minty drink with a chocolate finish.' },
    { name: 'Brandy Alexander', image: 'assets/images/brandy-alexander.jpg', characteristics: 'Brandy, Crème de Cacao, Cream', description: 'A rich and creamy brandy cocktail.' },
    { name: 'Golden Cadillac', image: 'assets/images/golden-cadillac.jpg', characteristics: 'Galliano, Crème de Cacao, Cream', description: 'A sweet, herbal, and creamy cocktail.' },
    { name: 'Chocolate Martini', image: 'assets/images/chocolate-martini.jpg', characteristics: 'Vodka, Chocolate Liqueur, Cream', description: 'A dessert martini with rich chocolate flavor.' }
  ];
}

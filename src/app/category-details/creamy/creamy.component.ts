import { Component, OnInit } from '@angular/core';
import { IonHeader,IonBackButton,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor
import { CocktailItem } from 'src/app/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-creamy',
  templateUrl: './creamy.component.html',
  imports: [NgFor,IonHeader,IonButtons,IonTitle,IonBackButton,IonToolbar,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent],
  styleUrls: ['./creamy.component.scss'],
})
export class CreamyComponent  implements OnInit {

  items: CocktailItem[]=[]
    constructor(private cocktailsService: CocktailService) { }
  
    ngOnInit() {
  const type = 'creamyCocktails'
  
  this.items = this.cocktailsService.getCocktailsByType(type)
  
  
    }
}

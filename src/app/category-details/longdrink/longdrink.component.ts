import { Component, OnInit, ViewChild } from '@angular/core';
import {IonButton, IonModal,IonHeader,IonBackButton,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor
import { CocktailItem } from 'src/app/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-longdrink',
  templateUrl: './longdrink.component.html',
  imports: [IonButton,IonModal,NgFor,IonHeader,IonButtons,IonTitle,IonBackButton,IonToolbar,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent],
  styleUrls: ['./longdrink.component.scss'],
})
export class LongdrinkComponent  implements OnInit {
items: CocktailItem[]=[]
 @ViewChild(IonModal) modal!: IonModal;
  constructor(private cocktailsService: CocktailService) { }

  ngOnInit() {
const type = 'longDrinks'

this.items = this.cocktailsService.getCocktailsByType(type)


  }

  cancel() {
    this.modal.dismiss();
  }


  openModal(){

  this.modal.present()
}
}

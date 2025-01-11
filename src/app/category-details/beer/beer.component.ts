import { Component, OnInit, ViewChild } from '@angular/core';
import {IonModal,IonButton, IonHeader,IonBackButton,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor
import { CocktailService } from 'src/app/services/cocktail.service';
import { CocktailItem } from 'src/app/cocktail';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  imports: [NgIf,IonModal,NgFor,IonHeader,IonButtons,IonButton,IonTitle,IonBackButton,IonToolbar,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class BeerComponent  implements OnInit {
items: CocktailItem[]=[]
name:String=''
@ViewChild(IonModal) modal!: IonModal;

  constructor(private cocktailsService: CocktailService) { }
  ngOnInit() {
const type = 'beerCocktails'

this.items = this.cocktailsService.getCocktailsByType(type)
  }


  cancel() {
    this.modal.dismiss();
  }




  openmodal(name:String){
  console.log(name)
  this.name = name
  this.modal.present()
}



  // beerCocktails = [
  //   { name: 'Black and Tan', image: 'assets/images/black-and-tan.jpg', characteristics: 'Stout, Pale Ale', description: 'A layered beer cocktail.' },
  //   { name: 'Michelada', image: 'assets/images/michelada.jpg', characteristics: 'Beer, Lime, Spices', description: 'A spicy Mexican beer cocktail.' },
  //   { name: 'Snakebite', image: 'assets/images/snakebite.jpg', characteristics: 'Lager, Cider', description: 'A sharp mix of beer and cider.' },
  //   { name: 'Radler', image: 'assets/images/radler.jpg', characteristics: 'Beer, Lemonade', description: 'A refreshing mix of beer and lemonade.' }
  // ];
}

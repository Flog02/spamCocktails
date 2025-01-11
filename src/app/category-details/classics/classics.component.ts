import { Component, OnInit, ViewChild } from '@angular/core';
import {IonModal,IonButton, IonHeader,IonBackButton,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor
import { CocktailItem } from 'src/app/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-classics',
  templateUrl: './classics.component.html',
  styleUrls: ['./classics.component.scss'],
  standalone: true, 
  imports: [NgIf,IonModal,NgFor,IonHeader,IonButtons,IonButton,IonTitle,IonBackButton,IonToolbar,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]
})
export class ClassicsComponent  implements OnInit {

  items: CocktailItem[]=[]
  name:String=''
  @ViewChild(IonModal) modal!: IonModal;
  
    constructor(private cocktailsService: CocktailService) { }
  
    ngOnInit() {
  const type = 'classicCocktails'
  
  this.items = this.cocktailsService.getCocktailsByType(type)
  
  
    }
    cancel() {
      this.modal.dismiss();
    }
  
  
  
  
    openModal(name:String){
    console.log(name)
    this.name = name
    this.modal.present()
  }

}

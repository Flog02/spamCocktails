import { Component } from '@angular/core';
import { IonHeader, IonToolbar,IonRouterLink, IonContent,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [HttpClientModule,NgFor,FormsModule, IonHeader, IonToolbar, IonRouterLink, IonContent, FontAwesomeModule, IonButtons, IonTitle, IonMenuButton, IonMenu, IonMenuToggle, IonButton, IonItem, IonList, RouterLink],
})
export class HomePage {
  searchQuery: string = '';
  drinks = [
    {
      name: 'Mojito',
      image: 'assets/images/mojito.jpg',
      ingredients: 'Rum, Mint, Lime, Sugar, Soda',
      preparation: 'Muddle mint and sugar, add rum and lime, top with soda.',
    },
    {
      name: 'Martini',
      image: 'assets/images/martini.jpg',
      ingredients: 'Gin, Dry Vermouth',
      preparation: 'Stir gin and vermouth, strain into a chilled glass.',
    },
    {
      name: 'Margarita',
      image: 'assets/images/margarita.jpg',
      ingredients: 'Tequila, Lime, Triple sec, Salt',
      preparation: 'Shake tequila, lime, and triple sec, strain into a salted rimmed glass.',
    },
    // Add other drinks...
  ];
  constructor(private router: Router,private http: HttpClient) {
    this.loadCocktails();

console.log(this.cocktails)

  }

  get filteredDrinks() {
    return this.drinks.filter(drink =>
      drink.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onDrinkClick(drink: any) {
    this.router.navigate(['/drink-detail', drink.name]); // Navigate to the detail page with the drink's name
  }
  cocktails: any[] = [];
  
    
  
    loadCocktails(): void {
      this.getCocktails().subscribe((response:any) => {
        this.cocktails = response;
      });
    }
  
    getCocktails(): Observable<any[]> {
      const apiUrl = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'; // Replace with your API
      return this.http.get<any[]>(apiUrl);
    }

    

}

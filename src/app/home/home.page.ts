import { Component } from '@angular/core';
import { IonHeader,IonToolbar,IonRouterLink, IonContent,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, HttpClientModule, FormsModule, IonToolbar, IonRouterLink, IonContent, FontAwesomeModule, IonButtons, IonTitle, IonMenuButton, IonMenu, IonMenuToggle, IonButton, IonItem, IonList, RouterLink],
})
export class HomePage {
  
  // drinks = [
  //   {
  //     name: 'Mojito',
  //     image: 'assets/images/mojito.jpg',
  //     ingredients: 'Rum, Mint, Lime, Sugar, Soda',
  //     preparation: 'Muddle mint and sugar, add rum and lime, top with soda.',
  //   },
  //   {
  //     name: 'Martini',
  //     image: 'assets/images/martini.jpg',
  //     ingredients: 'Gin, Dry Vermouth',
  //     preparation: 'Stir gin and vermouth, strain into a chilled glass.',
  //   },
  //   {
  //     name: 'Margarita',
  //     image: 'assets/images/margarita.jpg',
  //     ingredients: 'Tequila, Lime, Triple sec, Salt',
  //     preparation: 'Shake tequila, lime, and triple sec, strain into a salted rimmed glass.',
  //   },
  //   // Add other drinks...
  // ];
  // searchQuery: string = '';  // Search query for user input
  // cocktails: any[] = [];     // Cocktails array to hold API response

  constructor(private router: Router, private http: HttpClient) {
    // this.loadCocktails();  // Load cocktails on component initialization
    // console.log(this.cocktails);  // Debugging: Output cocktails to console
  }

  // loadCocktails(): void {
  //   this.getCocktails().subscribe((response: any) => {
  //     this.cocktails = response.drinks;  // Correct property access for cocktail API
  //   });
  // }

  // getCocktails(): Observable<any> {  // Type as `Observable<any>` since the API response structure may vary
  //   const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';  // Corrected to HTTPS
  //   return this.http.get<any>(apiUrl);
  // }

  // onDrinkClick(drink: any) {
  //   this.router.navigate(['/drink-detail', drink.name]);  // Navigate to drink detail page
  // }


  component=ProfileComponent;
}

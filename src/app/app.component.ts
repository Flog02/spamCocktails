import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor(){}
  // cocktails: any[] = [];

  // constructor(private http: HttpClient) {
  //   this.loadCocktails();
  // }

  // loadCocktails(): void {
  //   this.getCocktails().subscribe((response) => {
  //     this.cocktails = response;
  //   });
  // }

  // getCocktails(): Observable<any[]> {
  //   const apiUrl = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'; // Replace with your API
  //   return this.http.get<any[]>(apiUrl);
  // }
}

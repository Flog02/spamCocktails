import { Component, OnInit } from '@angular/core';
import { IonButtons,IonBackButton ,IonHeader,IonToolbar,IonContent,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [IonButtons,IonBackButton ,IonHeader, IonToolbar, IonContent, IonTitle],

})
export class AboutUsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  companyInfo = {
    name: 'CocktailPro',
    description: 'We are passionate about crafting the perfect cocktails, combining art and technique to offer you the best drinks in town.',
    mission: 'Our mission is to provide an unforgettable cocktail experience for every guest, with exceptional service and premium ingredients.',
  };
}

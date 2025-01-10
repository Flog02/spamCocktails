import { Component, OnInit } from '@angular/core';
import { IonButtons,IonBackButton ,IonHeader,IonToolbar,IonContent,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [IonButtons,IonBackButton ,IonHeader, IonToolbar, IonContent, IonTitle],

})
export class ContactsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }
  contactInfo = {
    address: '123 Cocktail Avenue, Mix City, 45678',
    phone: '+123 456 7890',
    email: 'contact@cocktailbar.com',
  };
}

import { Component, OnInit } from '@angular/core';
import { IonButtons,IonBackButton,IonHeader,IonToolbar,IonContent,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [IonButtons,IonBackButton,IonHeader, IonToolbar, IonContent, IonTitle],

})
export class ProfileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }
  userName = 'John Doe'; // Example user
  userEmail = 'johndoe@example.com'; // Example email
}

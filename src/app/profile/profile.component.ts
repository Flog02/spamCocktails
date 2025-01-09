import { Component, OnInit } from '@angular/core';
import { IonHeader,IonToolbar,IonContent,IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonTitle],

})
export class ProfileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  userName = 'John Doe'; // Example user
  userEmail = 'johndoe@example.com'; // Example email
}

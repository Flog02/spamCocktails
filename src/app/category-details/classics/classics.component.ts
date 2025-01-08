import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-classics',
  templateUrl: './classics.component.html',
  styleUrls: ['./classics.component.scss'],
  standalone: true, 
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]
})
export class ClassicsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  classicCocktails = [
    { name: 'Old Fashioned', image: 'assets/images/old-fashioned.jpg', characteristics: 'Bourbon, Sugar, Bitters, Orange', description: 'A classic whiskey cocktail with a hint of citrus.' },
    { name: 'Margarita', image: 'assets/images/margarita.jpg', characteristics: 'Tequila, Lime, Triple Sec, Salt Rim', description: 'A refreshing tequila-based cocktail with a citrusy twist.' },
    { name: 'Mojito', image: 'assets/images/mojito.jpg', characteristics: 'Rum, Mint, Lime, Soda Water', description: 'A minty and bubbly rum cocktail perfect for summer.' },
    { name: 'Martini', image: 'assets/images/martini.jpg', characteristics: 'Gin, Dry Vermouth, Lemon Twist or Olive', description: 'An elegant gin cocktail served chilled.' },
    { name: 'Manhattan', image: 'assets/images/manhattan.jpg', characteristics: 'Rye Whiskey, Sweet Vermouth, Bitters', description: 'A smooth whiskey drink with rich, sweet notes.' },
    { name: 'Daiquiri', image: 'assets/images/daiquiri.jpg', characteristics: 'Rum, Lime Juice, Simple Syrup', description: 'A classic rum cocktail with a tart lime flavor.' },
    { name: 'Negroni', image: 'assets/images/negroni.jpg', characteristics: 'Gin, Campari, Sweet Vermouth', description: 'A bold and bitter Italian cocktail.' },
    { name: 'Whiskey Sour', image: 'assets/images/whiskey-sour.jpg', characteristics: 'Whiskey, Lemon, Sugar, Egg White (optional)', description: 'A tangy and frothy whiskey drink.' },
    { name: 'Cosmopolitan', image: 'assets/images/cosmopolitan.jpg', characteristics: 'Vodka, Triple Sec, Cranberry, Lime', description: 'A vibrant vodka-based cocktail with a citrus twist.' },
    { name: 'Sidecar', image: 'assets/images/sidecar.jpg', characteristics: 'Cognac, Triple Sec, Lemon Juice', description: 'A citrusy, brandy-based classic.' },
    { name: 'Gin and Tonic', image: 'assets/images/gin-tonic.jpg', characteristics: 'Gin, Tonic Water, Lime', description: 'A simple and refreshing gin drink.' },
    { name: 'Pina Colada', image: 'assets/images/pina-colada.jpg', characteristics: 'Rum, Coconut, Pineapple', description: 'A tropical coconut-pineapple delight.' },
    { name: 'Bloody Mary', image: 'assets/images/bloody-mary.jpg', characteristics: 'Vodka, Tomato Juice, Spices', description: 'A savory cocktail with a spicy kick.' },
    { name: 'Mimosa', image: 'assets/images/mimosa.jpg', characteristics: 'Champagne, Orange Juice', description: 'A bubbly brunch classic.' },
    { name: 'Bellini', image: 'assets/images/bellini.jpg', characteristics: 'Prosecco, Peach Purée', description: 'A sweet sparkling wine cocktail.' },
    { name: 'Sazerac', image: 'assets/images/sazerac.jpg', characteristics: 'Rye, Absinthe, Bitters', description: 'A New Orleans classic with bold flavors.' },
    { name: 'French 75', image: 'assets/images/french-75.jpg', characteristics: 'Gin, Champagne, Lemon Juice, Sugar', description: 'A sparkling, citrusy gin cocktail.' },
    { name: 'Tom Collins', image: 'assets/images/tom-collins.jpg', characteristics: 'Gin, Lemon, Sugar, Soda Water', description: 'A fizzy gin drink with lemon.' },
    { name: 'Mint Julep', image: 'assets/images/mint-julep.jpg', characteristics: 'Bourbon, Mint, Sugar, Crushed Ice', description: 'A refreshing minty bourbon classic.' },
    { name: 'Mai Tai', image: 'assets/images/mai-tai.jpg', characteristics: 'Rum, Lime, Orgeat, Orange Liqueur', description: 'A fruity, tropical rum cocktail.' },
    { name: 'Caipirinha', image: 'assets/images/caipirinha.jpg', characteristics: 'Cachaça, Lime, Sugar', description: 'Brazil’s national cocktail with a lime kick.' },
    { name: 'Rum Punch', image: 'assets/images/rum-punch.jpg', characteristics: 'Rum, Orange Juice, Pineapple, Grenadine', description: 'A fruity mix with plenty of rum.' },
    { name: 'Aperol Spritz', image: 'assets/images/aperol-spritz.jpg', characteristics: 'Aperol, Prosecco, Soda', description: 'A bitter-sweet Italian spritz.' },
    { name: 'Boulevardier', image: 'assets/images/boulevardier.jpg', characteristics: 'Bourbon, Campari, Sweet Vermouth', description: 'A whiskey spin on the Negroni.' },
    { name: 'Cuba Libre', image: 'assets/images/cuba-libre.jpg', characteristics: 'Rum, Cola, Lime', description: 'A simple rum and cola with lime.' },
    { name: 'Sea Breeze', image: 'assets/images/sea-breeze.jpg', characteristics: 'Vodka, Cranberry, Grapefruit', description: 'A tart and fruity vodka drink.' },
    { name: 'Long Island Iced Tea', image: 'assets/images/long-island.jpg', characteristics: 'Vodka, Gin, Tequila, Rum, Triple Sec, Cola', description: 'A strong mix with a cola finish.' },
    { name: 'Hurricane', image: 'assets/images/hurricane.jpg', characteristics: 'Rum, Passion Fruit, Lime', description: 'A tropical storm in a glass.' },
    { name: 'Tequila Sunrise', image: 'assets/images/tequila-sunrise.jpg', characteristics: 'Tequila, Orange Juice, Grenadine', description: 'A vibrant, colorful tequila drink.' },
    { name: 'Amaretto Sour', image: 'assets/images/amaretto-sour.jpg', characteristics: 'Amaretto, Lemon, Sugar, Egg White (optional)', description: 'A sweet and tangy almond-flavored cocktail.' }
  ];

}

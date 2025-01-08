import { Component, OnInit } from '@angular/core';
import { IonHeader,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonRouterLink, IonContent,IonSearchbar,IonButtons,IonTitle,IonMenuButton,IonMenu,IonMenuToggle,IonButton,IonList,IonItem} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  imports: [NgFor,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class PopularComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  popularCocktails = [
    { name: 'White Russian', image: 'assets/images/white-russian.jpg', characteristics: 'Vodka, Coffee Liqueur, Cream', description: 'A smooth, creamy cocktail with a coffee kick.' },
    { name: 'Mudslide', image: 'assets/images/mudslide.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream', description: 'A decadent dessert cocktail.' },
    { name: 'Grasshopper', image: 'assets/images/grasshopper.jpg', characteristics: 'Crème de Menthe, Crème de Cacao, Cream', description: 'A sweet, minty drink with a chocolate finish.' },
    { name: 'Brandy Alexander', image: 'assets/images/brandy-alexander.jpg', characteristics: 'Brandy, Crème de Cacao, Cream', description: 'A rich and creamy brandy cocktail.' },
    { name: 'Golden Cadillac', image: 'assets/images/golden-cadillac.jpg', characteristics: 'Galliano, Crème de Cacao, Cream', description: 'A sweet, herbal, and creamy cocktail.' },
    { name: 'Chocolate Martini', image: 'assets/images/chocolate-martini.jpg', characteristics: 'Vodka, Chocolate Liqueur, Cream', description: 'A dessert martini with rich chocolate flavor.' },
    { name: 'Piña Colada', image: 'assets/images/pina-colada.jpg', characteristics: 'Rum, Coconut Cream, Pineapple Juice', description: 'A tropical drink blending rum, coconut, and pineapple.' },
    { name: 'Baileys Coffee', image: 'assets/images/baileys-coffee.jpg', characteristics: 'Baileys Irish Cream, Coffee', description: 'A warming drink combining coffee and Irish cream.' },
    { name: 'Tom and Jerry', image: 'assets/images/tom-and-jerry.jpg', characteristics: 'Rum, Brandy, Eggs, Sugar, Milk', description: 'A festive, creamy cocktail enjoyed during the holidays.' },
    { name: 'Eggnog', image: 'assets/images/eggnog.jpg', characteristics: 'Eggs, Milk, Sugar, Rum or Bourbon', description: 'A traditional creamy drink, often spiked with rum or bourbon.' },
    { name: 'Creamsicle Cocktail', image: 'assets/images/creamsicle.jpg', characteristics: 'Vanilla Vodka, Orange Juice, Cream', description: 'A sweet and citrusy cocktail reminiscent of the frozen treat.' },
    { name: 'Strawberry Daiquiri', image: 'assets/images/strawberry-daiquiri.jpg', characteristics: 'Rum, Strawberries, Lime, Sugar, Cream', description: 'A refreshing twist on the classic daiquiri, with a creamy finish.' },
    { name: 'Coconut Cream Pie Martini', image: 'assets/images/coconut-cream-pie-martini.jpg', characteristics: 'Coconut Rum, Vanilla Vodka, Cream', description: 'A dessert martini inspired by coconut cream pie.' },
    { name: 'Boozy Hot Chocolate', image: 'assets/images/boozy-hot-chocolate.jpg', characteristics: 'Hot Chocolate, Baileys Irish Cream, Whiskey', description: 'A warm, cozy drink with a kick of alcohol.' },
    { name: 'White Chocolate Mojito', image: 'assets/images/white-chocolate-mojito.jpg', characteristics: 'Rum, Mint, White Chocolate, Cream', description: 'A minty, creamy variation of the classic mojito.' },
    { name: 'Mudslide Martini', image: 'assets/images/mudslide-martini.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream, Cream', description: 'A chocolatey, creamy twist on the traditional Mudslide.' },
    { name: 'Banana Cream Pie Martini', image: 'assets/images/banana-cream-pie-martini.jpg', characteristics: 'Banana Liqueur, Vanilla Vodka, Cream', description: 'A creamy cocktail that tastes just like banana cream pie.' },
    { name: 'Nutty Russian', image: 'assets/images/nutty-russian.jpg', characteristics: 'Vodka, Frangelico, Cream', description: 'A smooth, nutty variation of the classic White Russian.' },
    { name: 'Frozen Mudslide', image: 'assets/images/frozen-mudslide.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream, Ice', description: 'A frozen version of the classic Mudslide, perfect for warm weather.' },
    { name: 'Irish Coffee', image: 'assets/images/irish-coffee.jpg', characteristics: 'Irish Whiskey, Coffee, Cream', description: 'A hot drink with a combination of whiskey, coffee, and cream.' },
    { name: 'Chocolate Covered Cherry', image: 'assets/images/chocolate-covered-cherry.jpg', characteristics: 'Chocolate Liqueur, Cherry Liqueur, Cream', description: 'A rich, creamy cocktail reminiscent of chocolate-covered cherries.' },
    { name: 'Cherry Bounce', image: 'assets/images/cherry-bounce.jpg', characteristics: 'Brandy, Cherries, Sugar, Cream', description: 'A sweet and creamy cocktail made with brandy and cherries.' },
    { name: 'Raspberry Truffle Martini', image: 'assets/images/raspberry-truffle-martini.jpg', characteristics: 'Raspberry Liqueur, Chocolate Liqueur, Cream', description: 'A decadent cocktail with the flavors of raspberry and chocolate.' },
    { name: 'Cinnamon Toast Crunch', image: 'assets/images/cinnamon-toast-crunch.jpg', characteristics: 'RumChata, Fireball Whiskey, Cream', description: 'A sweet and spicy cinnamon-flavored drink.' },
    { name: 'Vanilla Bean Martini', image: 'assets/images/vanilla-bean-martini.jpg', characteristics: 'Vanilla Vodka, Vanilla Bean Syrup, Cream', description: 'A smooth and sweet vanilla-flavored cocktail.' },
    { name: 'Blueberry Muffin Martini', image: 'assets/images/blueberry-muffin-martini.jpg', characteristics: 'Blueberry Liqueur, Vanilla Vodka, Cream', description: 'A creamy cocktail with a blueberry muffin-inspired taste.' },
    { name: 'Peach Creamsicle', image: 'assets/images/peach-creamsicle.jpg', characteristics: 'Peach Schnapps, Orange Juice, Cream', description: 'A creamy and fruity cocktail with a touch of orange.' },
    { name: 'Tiramisu Martini', image: 'assets/images/tiramisu-martini.jpg', characteristics: 'Coffee Liqueur, Mascarpone, Cream', description: 'A dessert-inspired martini that tastes like tiramisu.' },
    { name: 'Caramel Brandy Alexander', image: 'assets/images/caramel-brandy-alexander.jpg', characteristics: 'Brandy, Caramel Liqueur, Crème de Cacao, Cream', description: 'A rich, caramel-flavored variation of the Brandy Alexander.' },
    { name: 'Vanilla Latte Martini', image: 'assets/images/vanilla-latte-martini.jpg', characteristics: 'Vanilla Vodka, Coffee Liqueur, Cream', description: 'A sweet, creamy cocktail with the flavors of a vanilla latte.' },
    { name: 'Kahlúa Cream', image: 'assets/images/kahlua-cream.jpg', characteristics: 'Kahlúa, Cream', description: 'A simple and smooth cocktail with a coffee flavor.' },
    { name: 'Café Royale', image: 'assets/images/cafe-royale.jpg', characteristics: 'Coffee, Brandy, Cream', description: 'A warming cocktail made with coffee, brandy, and cream.' },
    { name: 'The Velvet Hammer', image: 'assets/images/velvet-hammer.jpg', characteristics: 'Vodka, Crème de Cacao, Cream', description: 'A creamy, chocolatey cocktail with a smooth texture.' },
    { name: 'Almond Joy Martini', image: 'assets/images/almond-joy-martini.jpg', characteristics: 'Amaretto, Coconut Liqueur, Chocolate Liqueur, Cream', description: 'A cocktail that tastes like the famous Almond Joy candy bar.' },
    { name: 'Creamy Coconut Martini', image: 'assets/images/creamy-coconut-martini.jpg', characteristics: 'Coconut Cream, Vanilla Vodka, Rum', description: 'A tropical, creamy martini with coconut flavor.' },
    { name: 'Amaretto Sour Cream', image: 'assets/images/amaretto-sour-cream.jpg', characteristics: 'Amaretto, Lemon Juice, Cream', description: 'A smooth, tart cocktail with a creamy finish.' },
    { name: 'Coconut Milk Punch', image: 'assets/images/coconut-milk-punch.jpg', characteristics: 'Rum, Coconut Milk, Nutmeg, Cream', description: 'A creamy and spicy cocktail with a touch of coconut.' },
    { name: 'B52', image: 'assets/images/b52.jpg', characteristics: 'Kahlúa, Baileys Irish Cream, Grand Marnier', description: 'A layered shooter with coffee, cream, and orange liqueur.' },
    { name: 'Almond Cream Martini', image: 'assets/images/almond-cream-martini.jpg', characteristics: 'Amaretto, Cream', description: 'A nutty and creamy cocktail that’s rich in flavor.' }
];

}

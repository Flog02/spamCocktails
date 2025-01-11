import { Component, OnInit } from '@angular/core';
import { IonHeader,IonBackButton,IonGrid,IonRow,IonCard,IonCol,IonCardContent,IonCardHeader,IonCardTitle,IonToolbar,IonContent,IonButtons,IonTitle} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';  // Import NgFor

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  imports: [NgFor,IonHeader,IonButtons,IonTitle,IonBackButton,IonToolbar,IonContent,IonGrid,IonRow,IonCard,IonCol,IonContent,IonCardHeader,IonCardTitle,IonCardContent]

})
export class PopularComponent  implements OnInit {

  constructor() { }

  ngOnInit() {  console.log('Component initialized');
  }
 popularCocktails = [
  { name: 'White Russian', image: 'https://tse2.mm.bing.net/th?id=OIP.B2kuN-r-AHz7J_73ipmh0gHaLH&pid=Api', characteristics: 'Vodka, Coffee Liqueur, Cream', description: 'A smooth, creamy cocktail with a coffee kick.' },
  { name: 'Mudslide', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/01/Mudslide-008.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream', description: 'A decadent dessert cocktail.' },
  { name: 'Grasshopper', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Grasshopper-Drink-008.jpg', characteristics: 'Crème de Menthe, Crème de Cacao, Cream', description: 'A sweet, minty drink with a chocolate finish.' },
  { name: 'Brandy Alexander', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Brandy-Alexander-001-1.jpg', characteristics: 'Brandy, Crème de Cacao, Cream', description: 'A rich and creamy brandy cocktail.' },
  { name: 'Golden Cadillac', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Golden-Cadillac-003.jpg', characteristics: 'Galliano, Crème de Cacao, Cream', description: 'A sweet, herbal, and creamy cocktail.' },
  { name: 'Chocolate Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2022/02/Chocolatini-002.jpg', characteristics: 'Vodka, Chocolate Liqueur, Cream', description: 'A dessert martini with rich chocolate flavor.' },
  { name: 'Piña Colada', image: 'https://www.acouplecooks.com/wp-content/uploads/2025/01/Pina-colada-smoothie-0006-784x980.jpg', characteristics: 'Rum, Coconut Cream, Pineapple Juice', description: 'A tropical drink blending rum, coconut, and pineapple.' },
  { name: 'Baileys Coffee', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Baileys-Coffee-009.jpg', characteristics: 'Baileys Irish Cream, Coffee', description: 'A warming drink combining coffee and Irish cream.' },
  { name: 'Tom and Jerry', image: 'https://www.acouplecooks.com/wp-content/uploads/2024/01/Brandy-Crusta-005-784x981.jpg', characteristics: 'Rum, Brandy, Eggs, Sugar, Milk', description: 'A festive, creamy cocktail enjoyed during the holidays.' },
  { name: 'Eggnog', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/07/Milk-Punch-005.jpg', characteristics: 'Eggs, Milk, Sugar, Rum or Bourbon', description: 'A traditional creamy drink, often spiked with rum or bourbon.' },
  { name: 'Creamsicle Cocktail', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Golden-Dream-008.jpg', characteristics: 'Vanilla Vodka, Orange Juice, Cream', description: 'A sweet and citrusy cocktail reminiscent of the frozen treat.' },
    { name: 'Strawberry Daiquiri', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/04/Virgin-Strawberry-Daiquiri-005.jpg', characteristics: 'Rum, Strawberries, Lime, Sugar, Cream', description: 'A refreshing twist on the classic daiquiri, with a creamy finish.' },
    { name: 'Coconut Cream Pie Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/09/Peppermint-Martini-007.jpg', characteristics: 'Coconut Rum, Vanilla Vodka, Cream', description: 'A dessert martini inspired by coconut cream pie.' },
    { name: 'Boozy Hot Chocolate', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Peppermint-Schnapps-Hot-Chocolate-002.jpg', characteristics: 'Hot Chocolate, Baileys Irish Cream, Whiskey', description: 'A warm, cozy drink with a kick of alcohol.' },
    { name: 'White Chocolate Mojito', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Frozen-Mojito-001.jpg', characteristics: 'Rum, Mint, White Chocolate, Cream', description: 'A minty, creamy variation of the classic mojito.' },
    { name: 'Mudslide Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/01/Mudslide-008.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream, Cream', description: 'A chocolatey, creamy twist on the traditional Mudslide.' },
    { name: 'Banana Cream Pie Martini', image: 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_960/v1/img/recipes/16/39/71/7lSUMwNzQNiRvxvEDxwh_164%2520banana%2520martini.jpg', characteristics: 'Banana Liqueur, Vanilla Vodka, Cream', description: 'A creamy cocktail that tastes just like banana cream pie.' },
    { name: 'Nutty Russian', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/06/Godfather-Cocktail-003.jpg', characteristics: 'Vodka, Frangelico, Cream', description: 'A smooth, nutty variation of the classic White Russian.' },
    { name: 'Frozen Mudslide', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F02%2F10%2F32628-frozen-mudslide-Beauty-3x4-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512', characteristics: 'Vodka, Coffee Liqueur, Irish Cream, Ice', description: 'A frozen version of the classic Mudslide, perfect for warm weather.' },
    { name: 'Irish Coffee', image: '/api/placeholder/800/600?text=Irish+Coffee', characteristics: 'Irish Whiskey, Coffee, Cream', description: 'A hot drink with a combination of whiskey, coffee, and cream.' },
    { name: 'Chocolate Covered Cherry', image: '/api/placeholder/800/600?text=Chocolate+Covered+Cherry', characteristics: 'Chocolate Liqueur, Cherry Liqueur, Cream', description: 'A rich, creamy cocktail reminiscent of chocolate-covered cherries.' },
    { name: 'Cherry Bounce', image: '/api/placeholder/800/600?text=Cherry+Bounce', characteristics: 'Brandy, Cherries, Sugar, Cream', description: 'A sweet and creamy cocktail made with brandy and cherries.' },
    { name: 'Raspberry Truffle Martini', image: '/api/placeholder/800/600?text=Raspberry+Truffle+Martini', characteristics: 'Raspberry Liqueur, Chocolate Liqueur, Cream', description: 'A decadent cocktail with the flavors of raspberry and chocolate.' },
    { name: 'Cinnamon Toast Crunch', image: '/api/placeholder/800/600?text=Cinnamon+Toast+Crunch', characteristics: 'RumChata, Fireball Whiskey, Cream', description: 'A sweet and spicy cinnamon-flavored drink.' },
    { name: 'Vanilla Bean Martini', image: '/api/placeholder/800/600?text=Vanilla+Bean+Martini', characteristics: 'Vanilla Vodka, Vanilla Bean Syrup, Cream', description: 'A smooth and sweet vanilla-flavored cocktail.' },
    { name: 'Blueberry Muffin Martini', image: '/api/placeholder/800/600?text=Blueberry+Muffin+Martini', characteristics: 'Blueberry Liqueur, Vanilla Vodka, Cream', description: 'A creamy cocktail with a blueberry muffin-inspired taste.' },
    { name: 'Peach Creamsicle', image: '/api/placeholder/800/600?text=Peach+Creamsicle', characteristics: 'Peach Schnapps, Orange Juice, Cream', description: 'A creamy and fruity cocktail with a touch of orange.' },
    { name: 'Tiramisu Martini', image: '/api/placeholder/800/600?text=Tiramisu+Martini', characteristics: 'Coffee Liqueur, Mascarpone, Cream', description: 'A dessert-inspired martini that tastes like tiramisu.' },
    { name: 'Caramel Brandy Alexander', image: '/api/placeholder/800/600?text=Caramel+Brandy+Alexander', characteristics: 'Brandy, Caramel Liqueur, Crème de Cacao, Cream', description: 'A rich, caramel-flavored variation of the Brandy Alexander.' },
    { name: 'Vanilla Latte Martini', image: '/api/placeholder/800/600?text=Vanilla+Latte+Martini', characteristics: 'Vanilla Vodka, Coffee Liqueur, Cream', description: 'A sweet, creamy cocktail with the flavors of a vanilla latte.' },
    { name: 'Kahlúa Cream', image: '/api/placeholder/800/600?text=Kahlua+Cream', characteristics: 'Kahlúa, Cream', description: 'A simple and smooth cocktail with a coffee flavor.' },
    { name: 'Café Royale', image: '/api/placeholder/800/600?text=Cafe+Royale', characteristics: 'Coffee, Brandy, Cream', description: 'A warming cocktail made with coffee, brandy, and cream.' },
    { name: 'The Velvet Hammer', image: '/api/placeholder/800/600?text=Velvet+Hammer', characteristics: 'Vodka, Crème de Cacao, Cream', description: 'A creamy, chocolatey cocktail with a smooth texture.' },
    { name: 'Almond Joy Martini', image: '/api/placeholder/800/600?text=Almond+Joy+Martini', characteristics: 'Amaretto, Coconut Liqueur, Chocolate Liqueur, Cream', description: 'A cocktail that tastes like the famous Almond Joy candy bar.' },
    { name: 'Creamy Coconut Martini', image: '/api/placeholder/800/600?text=Creamy+Coconut+Martini', characteristics: 'Coconut Cream, Vanilla Vodka, Rum', description: 'A tropical, creamy martini with coconut flavor.' },
    { name: 'Amaretto Sour Cream', image: '/api/placeholder/800/600?text=Amaretto+Sour+Cream', characteristics: 'Amaretto, Lemon Juice, Cream', description: 'A smooth, tart cocktail with a creamy finish.' },
    { name: 'Coconut Milk Punch', image: '/api/placeholder/800/600?text=Coconut+Milk+Punch', characteristics: 'Rum, Coconut Milk, Nutmeg, Cream', description: 'A creamy and spicy cocktail with a touch of coconut.' },
    { name: 'B52', image: '/api/placeholder/800/600?text=B52', characteristics: 'Kahlúa, Baileys Irish Cream, Grand Marnier', description: 'A layered shooter with coffee, cream, and orange liqueur.' },
    { name: 'Almond Cream Martini', image: '/api/placeholder/800/600?text=Almond+Cream+Martini', characteristics: 'Amaretto, Cream', description: 'A nutty and creamy cocktail thats rich in flavor.'}
 ]
}

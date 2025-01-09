import { Injectable } from '@angular/core';
import { CocktailCategory, CocktailItem } from '../cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
private cocktails :CocktailCategory[]=[
  { 

type:'beerCocktails',
    items :[
      { name: 'Black and Tan', image: 'assets/images/black-and-tan.jpg', characteristics: 'Stout, Pale Ale', description: 'A layered beer cocktail.' },
      { name: 'Michelada', image: 'assets/images/michelada.jpg', characteristics: 'Beer, Lime, Spices', description: 'A spicy Mexican beer cocktail.' },
      { name: 'Snakebite', image: 'assets/images/snakebite.jpg', characteristics: 'Lager, Cider', description: 'A sharp mix of beer and cider.' },
      { name: 'Radler', image: 'assets/images/radler.jpg', characteristics: 'Beer, Lemonade', description: 'A refreshing mix of beer and lemonade.' }
    ]},
  {
    type:'classicCocktails',
    items : [
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
    ]},
  {
    type:'creamyCocktails',
    items :[
      { name: 'White Russian', image: 'assets/images/white-russian.jpg', characteristics: 'Vodka, Coffee Liqueur, Cream', description: 'A smooth, creamy cocktail with a coffee kick.' },
      { name: 'Mudslide', image: 'assets/images/mudslide.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream', description: 'A decadent dessert cocktail.' },
      { name: 'Grasshopper', image: 'assets/images/grasshopper.jpg', characteristics: 'Crème de Menthe, Crème de Cacao, Cream', description: 'A sweet, minty drink with a chocolate finish.' },
      { name: 'Brandy Alexander', image: 'assets/images/brandy-alexander.jpg', characteristics: 'Brandy, Crème de Cacao, Cream', description: 'A rich and creamy brandy cocktail.' },
      { name: 'Golden Cadillac', image: 'assets/images/golden-cadillac.jpg', characteristics: 'Galliano, Crème de Cacao, Cream', description: 'A sweet, herbal, and creamy cocktail.' },
      { name: 'Chocolate Martini', image: 'assets/images/chocolate-martini.jpg', characteristics: 'Vodka, Chocolate Liqueur, Cream', description: 'A dessert martini with rich chocolate flavor.' }
    ]},
  {
    type:'longDrinks',
    items : [
      { name: 'Long Island Iced Tea', image: 'assets/images/long-island.jpg', characteristics: 'Vodka, Gin, Tequila, Rum, Triple Sec, Cola', description: 'A strong mix with a cola finish.' },
      { name: 'Tom Collins', image: 'assets/images/tom-collins.jpg', characteristics: 'Gin, Lemon, Sugar, Soda Water', description: 'A fizzy gin drink with lemon.' },
      { name: 'Moscow Mule', image: 'assets/images/moscow-mule.jpg', characteristics: 'Vodka, Ginger Beer, Lime', description: 'A spicy and refreshing vodka drink.' },
      { name: 'Dark and Stormy', image: 'assets/images/dark-and-stormy.jpg', characteristics: 'Rum, Ginger Beer, Lime', description: 'A bold rum cocktail with a ginger kick.' },
      { name: 'Highball', image: 'assets/images/highball.jpg', characteristics: 'Whiskey, Soda Water', description: 'A simple whiskey soda.' }
    ]},
  {
    type:'martiniCocktails',
    items : [
      { name: 'Martini', image: 'assets/images/martini.jpg', characteristics: 'Gin, Dry Vermouth', description: 'A classic gin martini.' },
      { name: 'Espresso Martini', image: 'assets/images/espresso-martini.jpg', characteristics: 'Vodka, Espresso, Coffee Liqueur', description: 'A coffee-flavored twist on the martini.' },
      { name: 'French Martini', image: 'assets/images/french-martini.jpg', characteristics: 'Vodka, Raspberry Liqueur, Pineapple Juice', description: 'A fruity and elegant martini.' },
      { name: 'Apple Martini', image: 'assets/images/apple-martini.jpg', characteristics: 'Vodka, Apple Schnapps', description: 'A tart and sweet apple martini.' }
    ]},
  {
    type:'shortDrinks' ,
    items : [
      { name: 'Whiskey Sour', image: 'assets/images/whiskey-sour.jpg', characteristics: 'Whiskey, Lemon, Sugar', description: 'A tangy whiskey cocktail.' },
      { name: 'Negroni', image: 'assets/images/negroni.jpg', characteristics: 'Gin, Campari, Sweet Vermouth', description: 'A bitter Italian classic.' },
      { name: 'Boulevardier', image: 'assets/images/boulevardier.jpg', characteristics: 'Bourbon, Campari, Sweet Vermouth', description: 'A whiskey twist on the Negroni.' },
      { name: 'Daiquiri', image: 'assets/images/daiquiri.jpg', characteristics: 'Rum, Lime, Sugar', description: 'A tart and refreshing rum cocktail.' }
    ]},
  {
    type:'sparklingCocktails',
    items : [
      { name: 'Mimosa', image: 'assets/images/mimosa.jpg', characteristics: 'Champagne, Orange Juice', description: 'A brunch classic.' },
      { name: 'Bellini', image: 'assets/images/bellini.jpg', characteristics: 'Prosecco, Peach Purée', description: 'A sweet and fruity sparkling cocktail.' },
      { name: 'French 75', image: 'assets/images/french-75.jpg', characteristics: 'Gin, Champagne, Lemon Juice', description: 'A sparkling citrus gin drink.' },
      { name: 'Aperol Spritz', image: 'assets/images/aperol-spritz.jpg', characteristics: 'Aperol, Prosecco, Soda Water', description: 'A bitter-sweet Italian cocktail.' }
    ]},
  {
    type: 'tropicalCocktails',
    items : [
      { name: 'Pina Colada', image: 'assets/images/pina-colada.jpg', characteristics: 'Rum, Coconut, Pineapple', description: 'A tropical delight.' },
      { name: 'Mai Tai', image: 'assets/images/mai-tai.jpg', characteristics: 'Rum, Lime, Orgeat, Orange Liqueur', description: 'A fruity, tropical rum cocktail.' },
      { name: 'Hurricane', image: 'assets/images/hurricane.jpg', characteristics: 'Rum, Passion Fruit, Lime', description: 'A strong and fruity storm in a glass.' },
      { name: 'Blue Lagoon', image: 'assets/images/blue-lagoon.jpg', characteristics: 'Vodka, Blue Curaçao, Lemonade', description: 'A vibrant, citrusy cocktail.' }
    ]},
  ]
  constructor() { }

  getCocktailsByType(type:String): CocktailItem[]{
    const category = this.cocktails.find(c=> c.type===type) 
    return category? category.items : [];
  }
}

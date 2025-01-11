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
      { name: 'Black and Tan', image: 'assets/images/black-tan.png', characteristics: 'Stout, Pale Ale', description: 'A layered beer cocktail.' },
      { name: 'Michelada', image: 'assets/images/michelada.jpg', characteristics: 'Beer, Lime, Spices', description: 'A spicy Mexican beer cocktail.' },
      { name: 'Snakebite', image: 'assets/images/snakebite.jpg', characteristics: 'Lager, Cider', description: 'A sharp mix of beer and cider.' },
      { name: 'Radler', image: 'assets/images/radler.jpg', characteristics: 'Beer, Lemonade', description: 'A refreshing mix of beer and lemonade.' }
    ]},
  {
    type:'classicCocktails',
    items : [
      { name: 'Old Fashioned', image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/Brandy-Old-Fashioned-Sweet_exps37101_HC2847498D03_28_5bC_RMS.jpg', characteristics: 'Bourbon, Sugar, Bitters, Orange', description: 'A classic whiskey cocktail with a hint of citrus.' },
      { name: 'Margarita', image: 'https://i0.wp.com/delicerecipes.com/wp-content/uploads/2021/01/Frozen-Margarita-Cocktail.jpg?fit=1170%2C1463&ssl=1', characteristics: 'Tequila, Lime, Triple Sec, Salt Rim', description: 'A refreshing tequila-based cocktail with a citrusy twist.' },
      { name: 'Mojito', image: 'https://i.pinimg.com/originals/44/a3/a2/44a3a2b008e44dcb12fa564663daf7aa.jpg', characteristics: 'Rum, Mint, Lime, Soda Water', description: 'A minty and bubbly rum cocktail perfect for summer.' },
      { name: 'Martini', image: 'https://kitchenswagger.com/wp-content/uploads/2020/07/mojito-recipe1.jpg', characteristics: 'Gin, Dry Vermouth, Lemon Twist or Olive', description: 'An elegant gin cocktail served chilled.' },
      { name: 'Manhattan', image: 'https://www.aspicyperspective.com/wp-content/uploads/2021/04/manhattan-cocktail-recipe-6.jpg', characteristics: 'Rye Whiskey, Sweet Vermouth, Bitters', description: 'A smooth whiskey drink with rich, sweet notes.' },
      { name: 'Daiquiri', image: 'https://equallywed.com/wp-content/uploads/2018/07/how-to-make-a-daiquiri.jpg', characteristics: 'Rum, Lime Juice, Simple Syrup', description: 'A classic rum cocktail with a tart lime flavor.' },
      { name: 'Negroni', image: 'https://www.thespruceeats.com/thmb/uiC0MCgm-wncN3TvF_EFM0bWKCk=/6000x4000/filters:fill(auto,1)/negroni-cocktail-recipe-759327-6-5b3f965b46e0fb00364f8d61.jpg', characteristics: 'Gin, Campari, Sweet Vermouth', description: 'A bold and bitter Italian cocktail.' },
      { name: 'Whiskey Sour', image: 'https://i.pinimg.com/originals/7d/26/22/7d2622b41786492197bedd62dd68b4c7.jpg', characteristics: 'Whiskey, Lemon, Sugar, Egg White (optional)', description: 'A tangy and frothy whiskey drink.' },
      { name: 'Cosmopolitan', image: 'https://www.inspiredtaste.net/wp-content/uploads/2016/06/Best-Cosmopolitan-Cocktail-Recipe-1200.jpg', characteristics: 'Vodka, Triple Sec, Cranberry, Lime', description: 'A vibrant vodka-based cocktail with a citrus twist.' },
      { name: 'Sidecar', image: 'https://loseweightbyeating.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-26-at-7.53.20-PM-1.png', characteristics: 'Cognac, Triple Sec, Lemon Juice', description: 'A citrusy, brandy-based classic.' },
      { name: 'Gin and Tonic', image: 'https://tse3.mm.bing.net/th?id=OIP.aqXAedWvFLa77gCmktZ_bAHaKz&pid=Api', characteristics: 'Gin, Tonic Water, Lime', description: 'A simple and refreshing gin drink.' },
      { name: 'Pina Colada', image: 'https://dishnthekitchen.com/wp-content/uploads/2021/07/vertpinacoladaclose.jpg', characteristics: 'Rum, Coconut, Pineapple', description: 'A tropical coconut-pineapple delight.' },
      { name: 'Bloody Mary', image: 'https://www.thecookierookie.com/wp-content/uploads/2014/02/Stovetop-Bloody-Mary-6.jpg', characteristics: 'Vodka, Tomato Juice, Spices', description: 'A savory cocktail with a spicy kick.' },
      { name: 'Mimosa', image: 'https://craftybartending.com/wp-content/uploads/2018/04/Mimosa-cocktail.jpg', characteristics: 'Champagne, Orange Juice', description: 'A bubbly brunch classic.' },
      { name: 'Bellini', image: 'https://recipes.net/wp-content/uploads/2023/05/bellini-cocktail-recipe_90a89d2ff4023f68fb9863c901bc20a1.jpeg', characteristics: 'Prosecco, Peach Purée', description: 'A sweet sparkling wine cocktail.' },
      { "name": "Sazerac", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sazerac_cocktail.jpg/500px-Sazerac_cocktail.jpg", "characteristics": "Rye, Absinthe, Bitters", "description": "A New Orleans classic with bold flavors." },
      { "name": "French 75", "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/French_75_Cocktail.jpg", "characteristics": "Gin, Champagne, Lemon Juice, Sugar", "description": "A sparkling, citrusy gin cocktail." },
      { "name": "Tom Collins", "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Tom_Collins.jpg", "characteristics": "Gin, Lemon, Sugar, Soda Water", "description": "A fizzy gin drink with lemon." },
      { "name": "Mint Julep", "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Mint_Julep_cocktail.jpg", "characteristics": "Bourbon, Mint, Sugar, Crushed Ice", "description": "A refreshing minty bourbon classic." },
      { "name": "Mai Tai", "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Mai_Tai_Cocktail.jpg", "characteristics": "Rum, Lime, Orgeat, Orange Liqueur", "description": "A fruity, tropical rum cocktail." },
      { "name": "Caipirinha", "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Caipirinha_cocktail.jpg", "characteristics": "Cachaça, Lime, Sugar", "description": "Brazil’s national cocktail with a lime kick." },
      { "name": "Rum Punch", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rum_punch_cocktail.jpg/500px-Rum_punch_cocktail.jpg", "characteristics": "Rum, Orange Juice, Pineapple, Grenadine", "description": "A fruity mix with plenty of rum." },
      { "name": "Aperol Spritz", "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Aperol_Spritz_cocktail.jpg", "characteristics": "Aperol, Prosecco, Soda", "description": "A bitter-sweet Italian spritz." },
      { "name": "Boulevardier", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Boulevardier_cocktail.jpg/500px-Boulevardier_cocktail.jpg", "characteristics": "Bourbon, Campari, Sweet Vermouth", "description": "A whiskey spin on the Negroni." },
      { "name": "Cuba Libre", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cuba_libre_cocktail.jpg/500px-Cuba_libre_cocktail.jpg", "characteristics": "Rum, Cola, Lime", "description": "A simple rum and cola with lime." },
      { "name": "Sea Breeze", "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Sea_breeze_cocktail.jpg", "characteristics": "Vodka, Cranberry, Grapefruit", "description": "A tart and fruity vodka drink." },
      { "name": "Long Island Iced Tea", "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Long_Island_iced_tea_cocktail.jpg", "characteristics": "Vodka, Gin, Tequila, Rum, Triple Sec, Cola", "description": "A strong mix with a cola finish." },
      { "name": "Hurricane", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hurricane_cocktail.jpg/500px-Hurricane_cocktail.jpg", "characteristics": "Rum, Passion Fruit, Lime", "description": "A tropical storm in a glass." },
      { "name": "Tequila Sunrise", "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Tequila_Sunrise_cocktail.jpg", "characteristics": "Tequila, Orange Juice, Grenadine", "description": "A vibrant, colorful tequila drink." },
      { "name": "Amaretto Sour", "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Amaretto_sour_cocktail.jpg", "characteristics": "Amaretto, Lemon, Sugar, Egg White (optional)", "description": "A sweet and tangy almond-flavored cocktail." }
    ]},
  {
    type:'creamyCocktails',
    items :[
      { name: 'White Russian', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/04/Baileys-White-Russian-001.jpg', characteristics: 'Vodka, Coffee Liqueur, Cream', description: 'A smooth, creamy cocktail with a coffee kick.' },
      { name: 'Mudslide', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/01/Mudslide-008.jpg', characteristics: 'Vodka, Coffee Liqueur, Irish Cream', description: 'A decadent dessert cocktail.' },
      { name: 'Grasshopper', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Grasshopper-Drink-008.jpg', characteristics: 'Crème de Menthe, Crème de Cacao, Cream', description: 'A sweet, minty drink with a chocolate finish.' },
      { name: 'Brandy Alexander', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Brandy-Alexander-001-1.jpg', characteristics: 'Brandy, Crème de Cacao, Cream', description: 'A rich and creamy brandy cocktail.' },
      { name: 'Pina Colada', image: 'https://www.acouplecooks.com/wp-content/uploads/2025/01/Pina-colada-smoothie-0006-784x980.jpg', characteristics: 'Rum, Pineapple Juice, Coconut Cream', description: 'A tropical delight in a glass.' }
    ]},
  {
    type:'longDrinks',
    items : [
      { name: 'Long Island Iced Tea', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Long-Island-Iced-Tea-003.jpg', characteristics: 'Vodka, Gin, Tequila, Rum, Triple Sec, Cola', description: 'A strong mix with a cola finish.' },
      { name: 'Tom Collins', image: 'https://www.acouplecooks.com/wp-content/uploads/2019/12/Tom-Collins-001.jpg', characteristics: 'Gin, Lemon, Sugar, Soda Water', description: 'A fizzy gin drink with lemon.' },
      { name: 'Moscow Mule', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/09/Cranberry-Mule-001.jpg', characteristics: 'Vodka, Ginger Beer, Lime', description: 'A spicy and refreshing vodka drink.' },
      { name: 'Dark and Stormy', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/08/Dark-and-Stormy-004.jpg', characteristics: 'Rum, Ginger Beer, Lime', description: 'A bold rum cocktail with a ginger kick.' },
      { name: 'Highball', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/05/Whiskey-Highball-004.jpg', characteristics: 'Whiskey, Soda Water', description: 'A simple whiskey soda.' }
    ]},
  {
    type:'martiniCocktails',
    items : [
      { name: 'Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2024/12/Pickle-Martini-0002-784x981.jpg', characteristics: 'Gin, Dry Vermouth', description: 'A classic gin martini.' },
      { name: 'Espresso Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2023/06/Espresso-Martini-051-784x980.jpg', characteristics: 'Vodka, Espresso, Coffee Liqueur', description: 'A coffee-flavored twist on the martini.' },
      { name: 'French Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/07/French-Martini-001.jpg', characteristics: 'Vodka, Raspberry Liqueur, Pineapple Juice', description: 'A fruity and elegant martini.' },
      { name: 'Apple Martini', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/09/Apple-Martini-Appletini-001.jpg', characteristics: 'Vodka, Apple Schnapps', description: 'A tart and sweet apple martini.' }
    ]},
  {
    type:'shortDrinks' ,
    items : [
      { name: 'Whiskey Sour', image: 'https://www.acouplecooks.com/wp-content/uploads/2023/10/Whiskey-Sour-062-784x980.jpg', characteristics: 'Whiskey, Lemon, Sugar', description: 'A tangy whiskey cocktail.' },
      { name: 'Negroni', image: 'https://www.acouplecooks.com/wp-content/uploads/2023/06/Aperol-Negroni-004.jpg', characteristics: 'Gin, Campari, Sweet Vermouth', description: 'A bitter Italian classic.' },
      { name: 'Boulevardier', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/04/Negroni-Boulevardier-020.jpg', characteristics: 'Bourbon, Campari, Sweet Vermouth', description: 'A whiskey twist on the Negroni.' },
      { name: 'Daiquiri', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg/375px-Classic_Daiquiri_in_Cocktail_Glass.jpg', characteristics: 'Rum, Lime, Sugar', description: 'A tart and refreshing rum cocktail.' }
    ]},
  {
    type:'sparklingCocktails',
    items : [
      { name: 'Mimosa', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/12/Christmas-Mimosa-002.jpg', characteristics: 'Champagne, Orange Juice', description: 'A brunch classic.' },
      { name: 'Bellini', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/07/Peach-Bellini-006.jpg', characteristics: 'Prosecco, Peach Purée', description: 'A sweet and fruity sparkling cocktail.' },
      { name: 'French 75', image: 'https://www.acouplecooks.com/wp-content/uploads/2019/12/French-75-003.jpg', characteristics: 'Gin, Champagne, Lemon Juice', description: 'A sparkling citrus gin drink.' },
      { name: 'Aperol Spritz', image: 'https://www.acouplecooks.com/wp-content/uploads/2024/12/Cranberry-Aperol-Spritz-0003-784x981.jpg', characteristics: 'Aperol, Prosecco, Soda Water', description: 'A bitter-sweet Italian cocktail.' }
    ]},
  {
    type: 'tropicalCocktails',
    items : [
      { name: 'Pina Colada', image: 'https://www.acouplecooks.com/wp-content/uploads/2025/01/Pina-colada-smoothie-0006-784x980.jpg', characteristics: 'Rum, Coconut, Pineapple', description: 'A tropical delight.' },
      { name: 'Mai Tai', image: 'https://www.acouplecooks.com/wp-content/uploads/2022/10/Mai-Tai-Recipe-009.jpg', characteristics: 'Rum, Lime, Orgeat, Orange Liqueur', description: 'A fruity, tropical rum cocktail.' },
      { name: 'Hurricane', image: 'https://www.acouplecooks.com/wp-content/uploads/2020/11/Hurricane-Cocktail-005.jpg', characteristics: 'Rum, Passion Fruit, Lime', description: 'A strong and fruity storm in a glass.' },
      { name: 'Blue Lagoon', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/03/Blue-Lagoon-Cocktail-002.jpg', characteristics: 'Vodka, Blue Curaçao, Lemonade', description: 'A vibrant, citrusy cocktail.' }
    ]},
  ]
  constructor() { }

  getCocktailsByType(type:String): CocktailItem[]{
    const category = this.cocktails.find(c=> c.type===type) 
    return category? category.items : [];
  }
}

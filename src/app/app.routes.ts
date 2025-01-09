import { Routes } from '@angular/router';
import { TechniquesComponent } from './techniques/techniques.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ClassicsComponent } from './category-details/classics/classics.component';
import { TropicalComponent } from './category-details/tropical/tropical.component';
import { ShortComponent } from './category-details/short/short.component';
import { LongdrinkComponent } from './category-details/longdrink/longdrink.component';
import { SparklingComponent } from './category-details/sparkling/sparkling.component';
import { CreamyComponent } from './category-details/creamy/creamy.component';
import { MartiniComponent } from './category-details/martini/martini.component';
import { BeerComponent } from './category-details/beer/beer.component';
import { PopularComponent } from './popular/popular.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';
import { BuildingComponent } from './building/building.component';
import { LayeringComponent } from './layering/layering.component';
import { MuddlingComponent } from './muddling/muddling.component';
import { ShakingComponent } from './shaking/shaking.component';
import { StirringComponent } from './stirring/stirring.component';
import { StrainingComponent } from './straining/straining.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'techniques',
    component:TechniquesComponent
  },
  {
    path: 'category',
    component: CategoryDetailComponent
  },
  {
    path: 'category/classics',
    component: ClassicsComponent
  },
  {
    path: 'category/tropical',
    component: TropicalComponent
  },
  {
    path: 'category/short',
    component: ShortComponent
  },
  {
    path: 'category/longdrink',
    component: LongdrinkComponent
  },
  {
    path: 'category/sparkling',
    component: SparklingComponent
  },
  {
    path: 'category/creamy',
    component: CreamyComponent
  },
  {
    path: 'category/martini',
    component: MartiniComponent
  },
  {
    path: 'category/beer',
    component: BeerComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'techniques/building',
    component: BuildingComponent
  },
  {
    path: 'techniques/layering',
    component: LayeringComponent
  },
  {
    path: 'techniques/muddling',
    component: MuddlingComponent
  },
  {
    path: 'techniques/shaking',
    component: ShakingComponent
  },
  {
    path: 'techniques/stirring',
    component: StirringComponent
  },
  {
    path: 'techniques/straining',
    component: StrainingComponent
  },
 



];

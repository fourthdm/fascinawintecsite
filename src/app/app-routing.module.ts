import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { CasementdoorComponent } from './upvcdoor/casementdoor/casementdoor.component';
import { SlidingdoorComponent } from './upvcdoor/slidingdoor/slidingdoor.component';
import { LiftslidedoorComponent } from './upvcdoor/liftslidedoor/liftslidedoor.component';
import { SlidefolddoorComponent } from './upvcdoor/slidefolddoor/slidefolddoor.component';
import { AluminiumdoorComponent } from './upvcdoor/aluminiumdoor/aluminiumdoor.component';
import { CasementwindowsComponent } from './upvcwindows/casementwindows/casementwindows.component';
import { SidingwindowsComponent } from './upvcwindows/sidingwindows/sidingwindows.component';
import { TiltturnwindowsComponent } from './upvcwindows/tiltturnwindows/tiltturnwindows.component';
import { TophungwindowsComponent } from './upvcwindows/tophungwindows/tophungwindows.component';
import { SpecialwindowsComponent } from './upvcwindows/specialwindows/specialwindows.component';
import { ColouredupvcwindowsComponent } from './upvcwindows/colouredupvcwindows/colouredupvcwindows.component';
import { AluminiumwindowsComponent } from './upvcwindows/aluminiumwindows/aluminiumwindows.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },

  { path: 'casementdoor', component: CasementdoorComponent },
  { path: 'slidingdoor', component: SlidingdoorComponent },
  { path: 'liftslidedoor', component: LiftslidedoorComponent },
  { path: 'slidefolddoor', component: SlidefolddoorComponent },
  { path: 'aluminumdoor', component: AluminiumdoorComponent },

  { path: 'casementwindows', component: CasementwindowsComponent },
  { path: 'slidingwindows', component: SidingwindowsComponent },
  { path: 'tiltturnwindows', component: TiltturnwindowsComponent },
  { path: 'tophungwindows', component: TophungwindowsComponent },
  { path: 'specialwindows', component: SpecialwindowsComponent },
  { path: 'coloredwindows', component: ColouredupvcwindowsComponent },
  { path: 'aluminiumwindows', component: AluminiumwindowsComponent },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

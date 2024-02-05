import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CardsComponent } from './pages/cards/cards.component';
import { AluminiumwindowsComponent } from './upvcwindows/aluminiumwindows/aluminiumwindows.component';
import { CasementwindowsComponent } from './upvcwindows/casementwindows/casementwindows.component';
import { ColouredupvcwindowsComponent } from './upvcwindows/colouredupvcwindows/colouredupvcwindows.component';
import { SidingwindowsComponent } from './upvcwindows/sidingwindows/sidingwindows.component';
import { SpecialwindowsComponent } from './upvcwindows/specialwindows/specialwindows.component';
import { TiltturnwindowsComponent } from './upvcwindows/tiltturnwindows/tiltturnwindows.component';
import { TophungwindowsComponent } from './upvcwindows/tophungwindows/tophungwindows.component';
import { AluminiumdoorComponent } from './upvcdoor/aluminiumdoor/aluminiumdoor.component';
import { CasementdoorComponent } from './upvcdoor/casementdoor/casementdoor.component';
import { LiftslidedoorComponent } from './upvcdoor/liftslidedoor/liftslidedoor.component';
import { SlidefolddoorComponent } from './upvcdoor/slidefolddoor/slidefolddoor.component';
import { SlidingdoorComponent } from './upvcdoor/slidingdoor/slidingdoor.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ServicesComponent,
    GalleryComponent,
    PortfolioComponent,
    CardsComponent,
    AluminiumwindowsComponent,
    CasementwindowsComponent,
    ColouredupvcwindowsComponent,
    SidingwindowsComponent,
    SpecialwindowsComponent,
    TiltturnwindowsComponent,
    TophungwindowsComponent,
    AluminiumdoorComponent,
    CasementdoorComponent,
    LiftslidedoorComponent,
    SlidefolddoorComponent,
    SlidingdoorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

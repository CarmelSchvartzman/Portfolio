import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
//import { environment } from '../environments/environment';


const config = {
  apiKey: "AIzaSyB-ZN1Q_-ls0RHIKJMgJyPUVvY_fdSGQoo",
  authDomain: "portfolioapp-10aa9.firebaseapp.com",
  databaseURL: "https://portfolioapp-10aa9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolioapp-10aa9",
  storageBucket: "portfolioapp-10aa9.appspot.com",
  messagingSenderId: "703033904116",
  appId: "1:703033904116:web:85157f2fbde5225b72c7a1",
  measurementId: "G-SFWMZWDW65"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent,
    HomeComponent,
    SearchComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

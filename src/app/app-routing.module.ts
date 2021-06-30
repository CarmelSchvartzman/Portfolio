import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "item/:id", component: ItemComponent },
  { path: "search/:val", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { LinksComponent } from "./app/links/links.component";
import { PseudoRNGComponent } from "./app/pseudo-rng/pseudo-rng.component";

export const routes: Routes = [
  { path: 'app-pseudo-rng', component: PseudoRNGComponent },
  { path: 'app-links', component: LinksComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
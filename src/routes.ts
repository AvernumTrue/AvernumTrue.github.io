import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { LinksComponent } from "./app/links/links.component";
import { PsudoRNGComponent } from "./app/psudo-rng/psudo-rng.component";

export const routes: Routes = [
  { path: 'app-psudo-rng', component: PsudoRNGComponent },
  { path: 'app-links', component: LinksComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
import { Routes } from "@angular/router";
import { EdwinTestPageComponent } from "./app/edwin-test-page/edwin-test-page.component";
import { HomeComponent } from "./app/home/home.component";

export const routes: Routes = [
  { path: 'app-edwin-test-page', component: EdwinTestPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
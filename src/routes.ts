import { Routes } from "@angular/router";
import { ChessComponent } from "./app/chess/chess.component";
import { EdwinTestPageComponent } from "./app/edwin-test-page/edwin-test-page.component";
import { HomeComponent } from "./app/home/home.component";
import { PsudoRNGComponent } from "./app/psudo-rng/psudo-rng.component";

export const routes: Routes = [
  { path: 'app-edwin-test-page', component: EdwinTestPageComponent },
  { path: 'app-chess', component: ChessComponent },
  { path: 'app-psudo-rng', component: PsudoRNGComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
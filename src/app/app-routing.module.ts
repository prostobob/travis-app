import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CardProfileComponent } from './pages/card-profile/card-profile.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'show/:id', component: CardProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

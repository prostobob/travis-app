import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CardProfileComponent } from './pages/card-profile/card-profile.component';
import { SeasonListComponent } from './pages/season-list/season-list.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'show/:id',
    children: [
      { path: '', component: CardProfileComponent },
      {
        path: 'season/:seasonId',
        children: [
          { path: '', component: SeasonListComponent },
          { path: 'episode/:number', component: EpisodeComponent }
        ]
      }
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { MainComponent } from './pages/main/main.component';
import { CardProfileComponent } from './pages/card-profile/card-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_COMPONENTS } from './material.components';
import { SharedService } from './services/shared.service';
import { SerializeService } from './services/serialize.service';
import { SeasonListComponent } from './pages/season-list/season-list.component';
import createAuth0Client from '@auth0/auth0-spa-js';
import { EpisodeComponent } from './pages/episode/episode.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardListComponent,
    CardItemComponent,
    MainComponent,
    CardProfileComponent,
    HeaderComponent,
    SeasonListComponent,
    EpisodeComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS
  ],
  providers: [ApiService, SharedService, SerializeService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { ModuleWithProviders, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { PeopleModule } from './people/people.module';

import { TmdbService } from './tmdb.service';
import { TmdbHelper } from './tmdb.helper';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
  ],
  imports: [
    rootRouting,
    BrowserModule,
    HomeModule,
    MoviesModule,
    PeopleModule,
    FormsModule,
    //HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

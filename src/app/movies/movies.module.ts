import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieCardsComponent } from '../movie-cards/movie-cards.component';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

const moviesRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'movies',
    component: MoviesComponent,
  }
]);

@NgModule({
  imports: [
    moviesRouting,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MoviesComponent,
    MovieCardsComponent
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ],
})

export class MoviesModule {}
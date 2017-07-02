import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieCardsModule } from '../movie-cards/movie-cards.module';
import { PeopleCardsModule } from '../people-cards/people-cards.module';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

import { PipeSafe } from './pipe.safe';

const movieRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'movie/:id',
    component: MovieComponent,
  }
]);

@NgModule({
  imports: [
    movieRouting,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MovieCardsModule,
    PeopleCardsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MovieComponent,
    PipeSafe
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ],
})

export class MovieModule {}
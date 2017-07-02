import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

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
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MovieComponent,
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ],
})

export class MovieModule {}
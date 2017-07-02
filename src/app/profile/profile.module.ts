import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { MovieCardsModule } from '../movie-cards/movie-cards.module';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:id',
    component: ProfileComponent,
  }
]);

@NgModule({
  imports: [
    profileRouting,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MovieCardsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ],
})

export class ProfileModule {}
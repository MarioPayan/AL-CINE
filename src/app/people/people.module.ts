import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
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

const peopleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'people',
    component: PeopleComponent,
  }
]);

@NgModule({
  imports: [
    peopleRouting,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    PeopleCardsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PeopleComponent,
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ]
})

export class PeopleModule {}
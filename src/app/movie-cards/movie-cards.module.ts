import { NgModule } from '@angular/core';

import { MovieCardsComponent } from '../movie-cards/movie-cards.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    MovieCardsComponent,
  ],
  providers: [],
  exports: [MovieCardsComponent],
})

export class MovieCardsModule {}
import { NgModule } from '@angular/core';

import { PeopleCardsComponent } from '../people-cards/people-cards.component';

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
    PeopleCardsComponent,
  ],
  providers: [],
  exports: [PeopleCardsComponent],
})

export class PeopleCardsModule {}
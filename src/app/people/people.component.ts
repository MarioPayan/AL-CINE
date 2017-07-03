import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

  constructor(
  		private tmdbService: TmdbService,
		private tmdbHelper: TmdbHelper,
  	) { }

  ngOnInit() { }
}
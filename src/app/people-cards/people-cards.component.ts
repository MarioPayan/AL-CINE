import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'people-cards',
  templateUrl: './people-cards.component.html',
  styleUrls: ['./people-cards.component.css']
})

export class PeopleCardsComponent implements OnInit {

  @Input() private filter: string;
  @Input() private id: string;
  private persons = [];
  private subscription: Subscription;
  
  constructor(
		private tmdbService: TmdbService,
		private tmdbHelper: TmdbHelper,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
			if(!this.filter) this.filter = param['filter'];
			if(this.filter==='popular'){
  			this.tmdbService.getPopularPersons()
  				.subscribe(persons => {
  					this.persons = persons.results;
  				});
			} else if(this.filter==='cast'){
  			this.tmdbService.getCastPersons(this.id)
  				.subscribe(persons => {
  					this.persons = persons.cast.slice(0,4);
  				});
			}
			this.filter = null;
    });
  }
  
  ngOnChanges(): any{
    if(this.id!=null){
      this.filter = "cast";
      this.ngOnInit();
    }
  }
  
  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }

}

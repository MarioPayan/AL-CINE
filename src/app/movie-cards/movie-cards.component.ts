import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})

export class MovieCardsComponent implements OnInit {
  
  @Input() private filter: string;
  @Input() private id: string;
  @Input() private castAndCrew: string;
  private movies = [];
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
      if(this.filter === "cast") this.castAndCrew = "OK";
			if(this.filter === 'popular'){
  			this.tmdbService.getPopularMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
			} else if(this.filter === 'top'){
  			this.tmdbService.getTopMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
			} else if(this.filter === 'upcoming'){
  			this.tmdbService.getUpcomingMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
			} else if(this.filter === 'nowplaying'){
  			this.tmdbService.getNowplayingMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
			} else if(this.filter === 'similar'){
  			this.tmdbService.getSimilarMovies(this.id)
  				.subscribe(movies => {
  					this.movies = movies.results.slice(0, 8);;
  				});
			} else if(this.filter === 'cast'){
        this.tmdbService.getMovieCreditsPerson(this.id)
          .subscribe(movies => {
            this.movies = movies.cast;
            this.tmdbHelper.sortMovies(this.movies);
          });
      } else if(this.filter === 'crew'){
        this.tmdbService.getMovieCreditsPerson(this.id)
          .subscribe(movies => {
            this.movies = movies.crew;
            this.tmdbHelper.sortMovies(this.movies);
          });
      }
			this.filter = null;
    });
  }
  
  ngOnChanges(): any {
    if(this.id != null && this.castAndCrew === null){
      this.filter = "similar";
      this.ngOnInit();
    }
    
  }
  
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }

}

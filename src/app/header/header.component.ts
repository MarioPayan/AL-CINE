import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Observable, Subscription  } from 'rxjs/Rx';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  private people = [];
  private query = "";
  private timer: any;
  private visible: boolean;
  
  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private tmdbService: TmdbService,
    private tmdbHelper : TmdbHelper
  ) { }

  ngOnInit() {
  }

  search(query: string): void{
    this.tmdbService.getSearchPerson(query)
      .subscribe(people => {
        this.people = people.results;
      });
  }

  queryTyping(): void {
    this.visible = true;
    this.people = [];
    this.timer = Observable.timer(1000);
    this.timer.subscribe(() => {
        if (this.query) this.search(this.query);
    });
  }

  clearQuery(): void {
    this.people = [];
    this.query = "";
  }

  hideQuery(): void {
    this.visible = false;
  }
  
  goProfile(id: number): void{
    this.clearQuery();
    this.router.navigate(['/profile', id]);
  }
}
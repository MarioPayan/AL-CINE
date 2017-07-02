import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCardsComponent } from './people-cards.component';

describe('PeopleCardsComponent', () => {
  let component: PeopleCardsComponent;
  let fixture: ComponentFixture<PeopleCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

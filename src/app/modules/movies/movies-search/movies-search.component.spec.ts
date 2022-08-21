/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoviesSearchComponent } from './movies-search.component';

describe('MoviesSearchComponent', () => {
  let component: MoviesSearchComponent;
  let fixture: ComponentFixture<MoviesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAutoCompleteComponent } from './filter-auto-complete.component';

describe('FilterAutoCompleteComponent', () => {
  let component: FilterAutoCompleteComponent;
  let fixture: ComponentFixture<FilterAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

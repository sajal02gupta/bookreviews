import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallreviewsComponent } from './viewallreviews.component';

describe('ViewallreviewsComponent', () => {
  let component: ViewallreviewsComponent;
  let fixture: ComponentFixture<ViewallreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStatComponent } from './weather-stat.component';

describe('WeatherStatComponent', () => {
  let component: WeatherStatComponent;
  let fixture: ComponentFixture<WeatherStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

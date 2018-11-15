import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainStatComponent } from './rain-stat.component';

describe('RainStatComponent', () => {
  let component: RainStatComponent;
  let fixture: ComponentFixture<RainStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

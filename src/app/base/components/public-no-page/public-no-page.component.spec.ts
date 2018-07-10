import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNoPageComponent } from './public-no-page.component';

describe('PublicNoPageComponent', () => {
  let component: PublicNoPageComponent;
  let fixture: ComponentFixture<PublicNoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicNoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

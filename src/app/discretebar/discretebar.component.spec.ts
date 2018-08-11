import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscretebarComponent } from './discretebar.component';

describe('DiscretebarComponent', () => {
  let component: DiscretebarComponent;
  let fixture: ComponentFixture<DiscretebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscretebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscretebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

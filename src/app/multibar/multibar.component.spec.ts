import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultibarComponent } from './multibar.component';

describe('MultibarComponent', () => {
  let component: MultibarComponent;
  let fixture: ComponentFixture<MultibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammingComponent } from './gamming.component';

describe('GammingComponent', () => {
  let component: GammingComponent;
  let fixture: ComponentFixture<GammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

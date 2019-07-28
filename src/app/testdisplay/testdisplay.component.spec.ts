import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdisplayComponent } from './testdisplay.component';

describe('TestdisplayComponent', () => {
  let component: TestdisplayComponent;
  let fixture: ComponentFixture<TestdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

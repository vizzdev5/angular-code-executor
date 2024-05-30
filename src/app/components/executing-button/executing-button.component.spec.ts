import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutingButtonComponent } from './executing-button.component';

describe('ExecutingButtonComponent', () => {
  let component: ExecutingButtonComponent;
  let fixture: ComponentFixture<ExecutingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutingButtonComponent]
    });
    fixture = TestBed.createComponent(ExecutingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

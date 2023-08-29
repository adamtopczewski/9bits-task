import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStepSectionComponent } from './mock-step-section.component';

describe('MockStepSectionComponent', () => {
  let component: MockStepSectionComponent;
  let fixture: ComponentFixture<MockStepSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockStepSectionComponent]
    });
    fixture = TestBed.createComponent(MockStepSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

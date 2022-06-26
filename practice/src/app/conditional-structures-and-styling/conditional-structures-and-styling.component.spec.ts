import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStructuresAndStylingComponent } from './conditional-structures-and-styling.component';

describe('ConditionalStructuresAndStylingComponent', () => {
  let component: ConditionalStructuresAndStylingComponent;
  let fixture: ComponentFixture<ConditionalStructuresAndStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalStructuresAndStylingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalStructuresAndStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

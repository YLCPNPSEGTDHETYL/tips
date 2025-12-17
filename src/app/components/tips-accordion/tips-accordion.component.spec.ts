import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAccordionComponent } from './tips-accordion.component';

describe('TipsAccordionComponent', () => {
  let component: TipsAccordionComponent;
  let fixture: ComponentFixture<TipsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

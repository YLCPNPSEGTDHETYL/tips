import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsCardComponent } from './tips-card.component';

describe('TipsCardComponent', () => {
  let component: TipsCardComponent;
  let fixture: ComponentFixture<TipsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

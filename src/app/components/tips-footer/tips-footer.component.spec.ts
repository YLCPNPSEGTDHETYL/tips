import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsFooterComponent } from './tips-footer.component';

describe('TipsFooterComponent', () => {
  let component: TipsFooterComponent;
  let fixture: ComponentFixture<TipsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

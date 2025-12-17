import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TipsCardComponent } from './tips-card.component';

describe('TipsCardComponent', () => {
  let component: TipsCardComponent;
  let fixture: ComponentFixture<TipsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsCardComponent],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TipsCardComponent);
    component = fixture.componentInstance;
    component.title = 'Test Title';
    component.link = '/test-link';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

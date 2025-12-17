import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TipsGlobalHeaderComponent } from './tips-global-header.component';

describe('TipsGlobalHeaderComponent', () => {
  let component: TipsGlobalHeaderComponent;
  let fixture: ComponentFixture<TipsGlobalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsGlobalHeaderComponent],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TipsGlobalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDisplayComponent } from './size-display.component';

describe('SizeDisplayComponent', () => {
  let component: SizeDisplayComponent;
  let fixture: ComponentFixture<SizeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizeDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

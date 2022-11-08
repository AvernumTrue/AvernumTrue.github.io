import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsudoRNGComponent } from './psudo-rng.component';

describe('PsudoRNGComponent', () => {
  let component: PsudoRNGComponent;
  let fixture: ComponentFixture<PsudoRNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsudoRNGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsudoRNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

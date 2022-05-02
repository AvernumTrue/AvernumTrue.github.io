import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdwinTestPageComponent } from './edwin-test-page.component';

describe('EdwinTestPageComponent', () => {
  let component: EdwinTestPageComponent;
  let fixture: ComponentFixture<EdwinTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdwinTestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdwinTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

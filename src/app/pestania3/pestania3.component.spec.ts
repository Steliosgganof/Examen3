import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestania3Component } from './pestania3.component';

describe('Pestania3Component', () => {
  let component: Pestania3Component;
  let fixture: ComponentFixture<Pestania3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pestania3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pestania3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

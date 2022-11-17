import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestania2Component } from './pestania2.component';

describe('Pestania2Component', () => {
  let component: Pestania2Component;
  let fixture: ComponentFixture<Pestania2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pestania2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pestania2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

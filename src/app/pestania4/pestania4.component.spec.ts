import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestania4Component } from './pestania4.component';

describe('Pestania4Component', () => {
  let component: Pestania4Component;
  let fixture: ComponentFixture<Pestania4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pestania4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pestania4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

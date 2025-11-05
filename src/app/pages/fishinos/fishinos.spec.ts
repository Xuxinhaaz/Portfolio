import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fishinos } from './fishinos';

describe('Fishinos', () => {
  let component: Fishinos;
  let fixture: ComponentFixture<Fishinos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fishinos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fishinos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

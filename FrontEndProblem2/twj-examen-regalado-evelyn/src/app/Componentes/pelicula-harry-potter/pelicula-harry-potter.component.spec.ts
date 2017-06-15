import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaHarryPotterComponent } from './pelicula-harry-potter.component';

describe('PeliculaHarryPotterComponent', () => {
  let component: PeliculaHarryPotterComponent;
  let fixture: ComponentFixture<PeliculaHarryPotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaHarryPotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaHarryPotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

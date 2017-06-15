import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronusComponent } from './patronus.component';

describe('PatronusComponent', () => {
  let component: PatronusComponent;
  let fixture: ComponentFixture<PatronusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

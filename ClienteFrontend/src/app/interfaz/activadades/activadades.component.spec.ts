import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivadadesComponent } from './activadades.component';

describe('ActivadadesComponent', () => {
  let component: ActivadadesComponent;
  let fixture: ComponentFixture<ActivadadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivadadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivadadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

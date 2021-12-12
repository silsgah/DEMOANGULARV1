import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitrateComponent } from './unitrate.component';

describe('UnitrateComponent', () => {
  let component: UnitrateComponent;
  let fixture: ComponentFixture<UnitrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

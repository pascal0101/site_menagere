import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenagereComponent } from './addmenagere.component';

describe('AddmenagereComponent', () => {
  let component: AddmenagereComponent;
  let fixture: ComponentFixture<AddmenagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmenagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmenagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

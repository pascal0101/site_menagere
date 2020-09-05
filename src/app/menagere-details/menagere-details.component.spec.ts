import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagereDetailsComponent } from './menagere-details.component';

describe('MenagereDetailsComponent', () => {
  let component: MenagereDetailsComponent;
  let fixture: ComponentFixture<MenagereDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenagereDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenagereDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagereListComponent } from './menagere-list.component';

describe('MenagereListComponent', () => {
  let component: MenagereListComponent;
  let fixture: ComponentFixture<MenagereListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenagereListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenagereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

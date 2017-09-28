import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainComponent } from './datain.component';

describe('DatainComponent', () => {
  let component: DatainComponent;
  let fixture: ComponentFixture<DatainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

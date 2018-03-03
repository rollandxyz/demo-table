import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnValueFilterComponent } from './column-value-filter.component';

describe('ColumnValueFilterComponent', () => {
  let component: ColumnValueFilterComponent;
  let fixture: ComponentFixture<ColumnValueFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnValueFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnValueFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

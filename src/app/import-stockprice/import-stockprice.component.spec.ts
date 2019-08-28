import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStockpriceComponent } from './import-stockprice.component';

describe('ImportStockpriceComponent', () => {
  let component: ImportStockpriceComponent;
  let fixture: ComponentFixture<ImportStockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportStockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportStockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

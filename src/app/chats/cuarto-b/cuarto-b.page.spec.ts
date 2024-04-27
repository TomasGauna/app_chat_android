import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartoBPage } from './cuarto-b.page';

describe('CuartoBPage', () => {
  let component: CuartoBPage;
  let fixture: ComponentFixture<CuartoBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuartoBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

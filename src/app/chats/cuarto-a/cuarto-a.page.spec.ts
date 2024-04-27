import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartoAPage } from './cuarto-a.page';

describe('CuartoAPage', () => {
  let component: CuartoAPage;
  let fixture: ComponentFixture<CuartoAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuartoAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

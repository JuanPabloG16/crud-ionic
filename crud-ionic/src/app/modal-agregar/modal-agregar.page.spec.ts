import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAgregarPage } from './modal-agregar.page';

describe('ModalAgregarPage', () => {
  let component: ModalAgregarPage;
  let fixture: ComponentFixture<ModalAgregarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

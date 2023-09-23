import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEditarPage } from './modal-editar.page';

describe('ModalEditarPage', () => {
  let component: ModalEditarPage;
  let fixture: ComponentFixture<ModalEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

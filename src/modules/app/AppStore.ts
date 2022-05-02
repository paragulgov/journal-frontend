import { makeAutoObservable } from 'mobx';
import { AppModals } from './types/AppTypes';

export class AppStore {
  modalOpen: Record<AppModals, boolean> = {
    login: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setModalOpen = (modal: keyof Record<AppModals, boolean>, value: boolean) => {
    this.modalOpen[modal] = value;
  };
}

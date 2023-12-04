import type { ModalData, ModalState } from "../../types/modalTypes";
import type { RootState } from "../index";

export const getModalData = (state: RootState): ModalData => {
  return { ...state.modal.data, ...state.modal.output };
};

export const getModal = (state: RootState): ModalState => {
  return state.modal;
};

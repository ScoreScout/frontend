export interface ModalState {
  isOpen: boolean;
  isComplete: boolean;
  data?: ModalPayload;
  output?: ModalOutput;
}

export interface ModalPayload {
  firstPlayerName: string;
  secondPlayerName: string;
}

export interface ModalOutput {
  firstPlayerScore: number;
  secondPlayerScore: number;
}

export interface ModalData {
  firstPlayerName?: string;
  secondPlayerName?: string;
  firstPlayerScore?: number;
  secondPlayerScore?: number;
}

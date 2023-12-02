import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ModalOutput, ModalPayload, ModalState } from "../../../types/modalTypes";
import { waitForElement } from "../../../utils/waitForElement";

const initialState: ModalState = {
  isOpen: false,
  isComplete: false,
};

export const awaitModalInput = createAsyncThunk(
  "modal/requestPlayerScores",
  async (
    { firstPlayerName, secondPlayerName }: ModalPayload,
    { dispatch, getState },
  ): Promise<ModalOutput> => {
    const waitForFormSubmit = async (): Promise<ModalOutput> =>
      await new Promise<ModalOutput>((resolve) => {
        // Function to handle form submission
        const handleSubmit = (event): void => {
          event.preventDefault(); // Prevent default form submission behavior

          // You can dispatch additional actions or perform validation here if needed

          // Resolve the Promise with the form values
          const formData = new FormData(event.target);
          const firstPlayerScore = Number(formData.get("firstPlayerScore"));
          const secondPlayerScore = Number(formData.get("secondPlayerScore"));
          resolve({ firstPlayerScore, secondPlayerScore });

          // You may want to remove the event listener after the form is submitted
          // to avoid handling the submit event multiple times
          event.target.removeEventListener("submit", handleSubmit);
        };

        waitForElement("#formModal")
          .then(() => {
            const form = document.getElementById("formModal");
            form?.addEventListener("submit", handleSubmit);
          })
          .catch((err) => {
            // TODO: handle errors
            // eslint-disable-next-line no-console
            console.error(err);
          });
      });

    // Dispatch the action to show the modal
    dispatch(showModal({ firstPlayerName, secondPlayerName }));

    // Wait for the form to be submitted and the Promise to be resolved
    const modalOutput = await waitForFormSubmit();

    dispatch(hideModal());

    return modalOutput;
  },
);

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalPayload>) => {
      const { firstPlayerName, secondPlayerName } = action.payload;
      state = { isOpen: true, isComplete: false, data: { firstPlayerName, secondPlayerName } };
      return state;
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.isComplete = false;
      state.data = undefined;
      state.output = undefined;
      return state;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;

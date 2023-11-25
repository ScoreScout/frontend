import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledButtonContainer,
  StyledModal,
  StyledModalOverlay,
  StyledNameInputContainer,
  StyledNamesContainer,
  StyledPlayerName,
  StyledScoreInput,
  StyledTitle,
} from "./style";
import ConfirmIcon from "../icons/ConfirmIcon";
import { theme } from "../../theme/Theme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getModal } from "../../redux/selectors/modalSelectors";
import { hideModal } from "../../redux/slices/modal/modalSlice";
import type { ModalOutput } from "../../types/modalTypes";

const defaultModalOutput: ModalOutput = {
  firstPlayerScore: 0,
  secondPlayerScore: 0,
};

const ScoreModal = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(getModal);

  const [modalOutput, setModalOutput] = useState<ModalOutput>(defaultModalOutput);

  useEffect(() => {
    if (modal.output !== undefined) setModalOutput(modal.output);
    else setModalOutput(defaultModalOutput);
  }, [modal]);

  const handleOverlayClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    dispatch(hideModal());
  };

  if (!modal.isOpen) return <></>;

  return (
    <StyledModalOverlay onClick={handleOverlayClick}>
      <StyledModal
        onClick={(e: React.SyntheticEvent) => {
          e.stopPropagation();
        }}
        id='formModal'
      >
        <StyledTitle>Write the score</StyledTitle>
        <StyledNamesContainer>
          <StyledNameInputContainer $reversed={false}>
            <StyledPlayerName>{modal.data?.firstPlayerName}</StyledPlayerName>
            <StyledScoreInput
              type='number'
              name='firstPlayerScore'
              value={modalOutput.firstPlayerScore}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setModalOutput({ ...modalOutput, firstPlayerScore: Number(e.target.value) });
              }}
            />
          </StyledNameInputContainer>
          <StyledNameInputContainer $reversed={true}>
            <StyledPlayerName>{modal.data?.secondPlayerName}</StyledPlayerName>
            <StyledScoreInput
              type='number'
              name='secondPlayerScore'
              value={modalOutput.secondPlayerScore}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setModalOutput({ ...modalOutput, secondPlayerScore: Number(e.target.value) });
              }}
            />
          </StyledNameInputContainer>
        </StyledNamesContainer>
        <StyledButtonContainer>
          <StyledButton type='submit'>
            Confirm
            <ConfirmIcon size={"1.5rem"} color={theme.color.bgColor} />
          </StyledButton>
        </StyledButtonContainer>
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default ScoreModal;

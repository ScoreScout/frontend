import React, { useState } from 'react';
import {StyledPopup, StyledScoreInput} from './style';
import type {ScorePopupProps} from "../../types/groupTableTypes"; 

const ScorePopup = ({ onClose, onSubmit } : ScorePopupProps) : React.JSX.Element => {
    const [result, setResult] = useState('');
  
    const handleSubmit = (): void => {
      onSubmit(result);
    };
  
    const handleClose = (): void => {
      onClose();
    };

  return (
    <StyledPopup>
      <div className='popup'>
          <label className='title'>
              Write the score
          </label>
          <StyledScoreInput className='popupInput' type="number" value={result} onChange={(e) => {setResult(e.target.value)}} />
          <div className='btns'>
              <button className='save' onClick={handleSubmit}>save</button>
              <button className="close" onClick={handleClose}>close</button>
          </div>
      </div>
    </StyledPopup>
  );
};

export default ScorePopup;

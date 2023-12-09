// Popup.jsx
import React, { useState } from 'react';
import {StyledPopup, StyledScoreInput} from './style';

const ScorePopup = ({ onClose, onSubmit }) : React.JSX.Element => {
    const [result, setResult] = useState('');
  
    const handleSubmit = () => {
      onSubmit(result);
    };
  
    const handleClose = () => {
      onClose();
    };

  return (
    <StyledPopup>
      <div className='popup'>
          <label className='title'>
              Write the score
          </label>
          <StyledScoreInput className='popupInput' type="number" value={result} onChange={(e) => setResult(e.target.value)} />
          <div className='btns'>
              <button className='save' onClick={handleSubmit}>save</button>
              <button className="close" onClick={handleClose}>close</button>
          </div>
      </div>
    </StyledPopup>
  );
};

export default ScorePopup;

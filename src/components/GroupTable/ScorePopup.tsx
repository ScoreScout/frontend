// Popup.jsx
import React, { useState } from 'react';

const ScorePopup = ({ onClose, onSubmit }) => {
    const [result, setResult] = useState('');
  
    const handleSubmit = () => {
      onSubmit(result);
    };
  
    const handleClose = () => {
      onClose();
    };

  return (
    <div className='popup'>
      <label className='title'>
        Match Score:
      </label>
      <input className='popupInput' type="number" value={result} onChange={(e) => setResult(e.target.value)} />
      <div className='btns'>
        <button className='save' onClick={handleSubmit}>save</button>
        <button className="close" onClick={handleClose}>close</button>
      </div>
    </div>
  );
};

export default ScorePopup;

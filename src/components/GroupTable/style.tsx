import styled from "styled-components";
import { globalBoldFontStyles, globalSemiBoldFontStyles, globalRegularFontStyles} from "../../theme/FontStyles";
import type {cellProps, styleProps} from "../../types/groupTableTypes";

export const TableContainer = styled.div<styleProps>`
    box-sizing: border-box;
    max-width: ${(props) =>
      props.numPlayers > 4
        ? "75vh"
        : props.numPlayers > 2
        ? "65vh"
        : "55vh"};
    border-radius: 15px;
    border: #d8d7d7 0.5px solid;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
`;

export const HeadRow = styled.div<styleProps>`
    width: 100%;
    height: 2.5rem;
    display: grid;
    grid-template-columns: 0.40fr repeat(${(props) => props.numPlayers}, 0.2fr) 0.25fr;
    font-family: ${globalSemiBoldFontStyles};
    
    :first-child{
        color: ${(props) => props.theme.color.mainColor};
    }
`;

export const RowStyle = styled.div<styleProps>`
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 0.40fr repeat(${(props) => props.numPlayers}, 0.2fr) 0.25fr;
    .cellValue {
        font-family: sans-serif;
        font-size: 0.95rem;
    }
`;

export const Cell = styled.div<cellProps>`
    color: #000000;
    font-size: 0.9rem;
    font-family: sans-serif;
    padding: 5px;
    border: #d3d3d3 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.rowIndex === props.cellIndex && props.rowIndex !== 0 ? '#d5d3d3' : '')};

    border-top-left-radius: ${(props) => 
    (props.rowIndex === 0 && props.cellIndex === 0 ? '13px' : '')};
    border-top-right-radius: ${(props) => 
    (props.rowIndex === 0 && props.cellIndex === props.numPlayers + 1? '13px' : '')};
    border-bottom-left-radius: ${(props) => 
    (props.rowIndex === props.numPlayers && props.cellIndex === 0 ? '13px' : '')};
    border-bottom-right-radius: ${(props) => 
    (props.rowIndex === props.numPlayers && props.cellIndex === props.numPlayers + 1 ? '13px' : '')};
`;

export const StyledPopup = styled.div`
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0%;
    
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px;
        box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #b9b8b8;
        border-radius: 20px;
        background-color: #FFFFFF;

        .title {
            ${globalBoldFontStyles}
            margin: 15px;
            font-size: 1.5rem;
            color: ${(props) => props.theme.color.mainColor};
        }
        .btns {
            display: flex;
            margin-top: 20px;
            .save {
                color: #FFFFFF;
                background-color: ${(props) => props.theme.color.mainColor};

                border: 1px solid #6e6e6e;
                border-radius: 10px;
                
                margin-right: 10px;
                height: 1.75rem;
                width: 4.5rem;

                &:hover {
                    background-color: #85180c;
                    box-shadow: 0 0 4px 4px rgba(100, 100, 100, 0.2)
                }   
            }
            .close {
                color: #000000;
                background-color: ${(props) => props.theme.color.bgColor};

                border: 1px solid #6e6e6e;
                border-radius: 10px;
                
                margin-left: 10px;
                height: 1.75rem;
                width: 4.5rem;
                
                &:hover {
                    box-shadow: 0 0 4px 4px rgba(100, 100, 100, 0.2)
                }  
            }
        }
    }
`;

export const StyledScoreInput = styled.input`
  width: 5rem;
  height: 2rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.color.bgColor};
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  box-sizing: border-box;
  text-align: center;
`;


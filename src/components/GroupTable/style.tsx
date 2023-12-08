import styled from "styled-components";
import { globalBoldFontStyles } from "../../theme/FontStyles";

interface styleProps {
    numPlayers: number;
  }

interface cellProps {
    rowIndex: number;
    cellIndex: number;
}

export const TableContainer = styled.div<styleProps>`
    box-sizing: border-box;
    max-width: ${(props) =>
      props.numPlayers > 4
        ? "85vh"
        : props.numPlayers > 2
        ? "70vh"
        : "55vh"};
    /* border-radius: 4.5%; */
    border: #d8d7d7 0.5px solid;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
    /* :last-child {
        :last-child {
            border-bottom-left-radius: 20%;
        }
    } */
`;

export const HeadRow = styled.div<styleProps>`
    width: 100%;
    height: 2.5rem;
    display: grid;
    grid-template-columns: 0.40fr repeat(${(props) => props.numPlayers + 2}, 0.15fr);
    font-weight: 600;
    :first-child{
        color: #D22D19;
        /* border-top-left-radius: 20%; */
    }
    /* :last-child {
        border-top-right-radius: 20%;
    } */
`;

export const RowStyle = styled.div<styleProps>`
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 0.40fr repeat(${(props) => props.numPlayers + 2}, 0.15fr);
    .cellValue {
        font-family: sans-serif;
        font-size: 0.95rem;
    }
`;

export const Cell = styled.div<cellProps>`
    color: #000000;
    font-size: 0.95rem;
    font-family: sans-serif;
    padding: 5px;
    border: #d3d3d3 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.rowIndex === props.cellIndex && props.rowIndex !== 0 ? '#d5d3d3' : '')};
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
                background-color: #D22D19;

                border: 1px solid #6e6e6e;
                border-radius: 10px;
                
                margin-right: 10px;
                height: 1.75rem;
                width: 4.5rem;
            }
            .close {
                color: #000000;
                background-color: #FFFFFF;

                border: 1px solid #6e6e6e;
                border-radius: 10px;
                
                margin-left: 10px;
                height: 1.75rem;
                width: 4.5rem;
                
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


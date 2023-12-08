import styled from "styled-components";

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
    border-radius: 4.5%;
    border: #d8d7d7 0.5px solid;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
    :last-child {
        :first-child {
        border-bottom-left-radius: 20%;
        }
        :last-child {
        border-bottom-right-radius: 20%;
        }
    }
`;

export const HeadRow = styled.div<styleProps>`
    width: 100%;
    height: 2.5rem;
    display: grid;
    grid-template-columns: 0.40fr repeat(${(props) => props.numPlayers + 2}, 0.15fr);
    /* background-color: #a5a6ec; */
    :first-child{
        color: #D22D19;
        border-top-left-radius: 20%;
        text-align: left;
        font-weight: 600;
    }
    :last-child {
        border-top-right-radius: 20%;
    }
`;

export const RowStyle = styled.div<styleProps>`
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 0.40fr repeat(${(props) => props.numPlayers + 2}, 0.15fr);
    /* background-color: #f2e0b2; */
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
    background-color: ${(props) => (props.rowIndex === props.cellIndex && props.rowIndex !== 0 ? '#d5d3d3' : '#ffffff')};
    .cellInput {
        height: 100%;
        width: 100%;
        font-size: 1rem;
        border: none;
    }
`;

export const StyledInputCell = styled.input `    
`;

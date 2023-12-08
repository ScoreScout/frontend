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
    :first-child{
        color: #D22D19;
        /* border-top-left-radius: 20%; */
        text-align: left;
        font-weight: 600;
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

    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 30px;
        box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #b9b8b8;
        border-radius: 8%;
        background-color: #F6DADA;

        .title {
            margin: 5px;
            font-size: 1.5rem;
            font-family: sans-serif;
            font-weight: 600;
        }
        .popupInput {
            margin: 10px;
            height: 2rem;
            width: 5rem;
            font-size: 1rem;
            border-radius: 10%;
            /* border: none; */
        }
        .btns {
            display: flex;
            .save {
                color: #FFFFFF;
                background-color: #D22D19;

                border: 1px solid #6e6e6e;
                
                margin: 5px;
                height: 1.75rem;
                width: 4rem;
                border-radius: 10%;
            }
            .close {
                color: #000000;
                background-color: #FFFFFF;

                border: 1px solid #6e6e6e;
                
                margin: 5px;
                height: 1.75rem;
                width: 4rem;
                border-radius: 10%;
            }
        }
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
    .cellInput {
        height: 100%;
        width: 100%;
        font-size: 1rem;
        border: none;
    }
`;

export const StyledInputCell = styled.input `    
`;

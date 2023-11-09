import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const EntryWrapper = styled.div`
    background-color: ${(props) => props.theme.color.bgColor};
    display: flex;
    justify-content: center;
    width: 100%;
`;

const EntryContainer = styled.div`
    background-color: ${(props) => props.theme.color.bgColor};
    position: relative;
    width: 100%;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: row;

    ${media.lessThan("large")`
        margin: 0;
        margin-left: 10%;
        position: relative;
    `}

    ${media.lessThan("medium")`
    padding: 50px 1px 0 1px;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-left: 0;
    gap: 25px;
    `}
`;

const GoToAnotherEntryBlock = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    position: absolute;
    right: 10%;

    ${media.lessThan("medium")`
    margin: 0;
    position: relative;
    right: 0;
    `}
`;

const EntryBlock = styled.div`
    background-color: ${(props) => props.theme.color.bgColor};
    border-radius: 30px;
    box-shadow: 4px 4px 100px 8px #ff6d4c40;
    padding-top: 29px;
    padding-bottom: 20px;
    position: absolute;
    width: 387px;
    margin-left: 10%;
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
        margin: 0;
        margin-right: 40px;
        position: relative;
        margin-bottom: 20px;
    `}
    ${media.lessThan("medium")`
    margin-right:0;
    `}
`;

const TextWrapper = styled.div`
    color: ${(props) => props.theme.color.mainColor};
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    margin-left: 30px;
`;

const InputsContainer = styled.div`
    margin-top: 29px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: right;
    margin-right: 30px;
`;

const Input = styled.input`
    background-color: ${(props) => props.theme.color.bgColor};
    border: 2px solid;
    border-color: ${(props) => props.theme.color.secondryBgColor};
    border-radius: 16px;
    color: ${(props) => props.theme.color.notActiveColor};
    font-family: "Inter-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    height: 48px;
    letter-spacing: 0;
    line-height: 20px;
    padding: 0;
    padding-left: 18px;
    position: relative;
    white-space: nowrap;
    margin-right: 30px;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.color.mainColor};
        color: black;
        &::placeholder {
            color: ${(props) => props.theme.color.secondryBgColor};
        }
    }

    &::placeholder {
        color: ${(props) => props.theme.color.notActiveColor};
    }

    &:not(:focus):hover {
        border-color: ${(props) => props.theme.color.notActiveColor};
    }
`;

const ButtonText = styled.div`
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    /* font-size: 20px; */
    font-weight: 700;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const LinkToAnotherEntry = styled.p`
    color: ${(props) => props.theme.color.fontColor};
    font-family: "Inter-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    position: relative;
    text-decoration: underline;
    white-space: nowrap;
    width: fit-content;
`;

export {
    EntryWrapper,
    EntryContainer,
    GoToAnotherEntryBlock,
    EntryBlock,
    TextWrapper,
    InputsContainer,
    ButtonContainer,
    Input,
    ButtonText,
    LinkToAnotherEntry,
};

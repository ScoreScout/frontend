import styled from "styled-components";
import media from "styled-media-query";
import { globalRegularFontStyles, globalBoldFontStyles, globalSemiBoldFontStyles } from "../../theme/FontStyles";

const EntryWrapper = styled.div`
    background-color: ${(props) => props.theme.color.bgColor};
    display: flex;
    justify-content: center;
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
    padding: 3.125rem 0 0 0; 
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-left: 0;
    gap: 1.5rem; 
    `}
`;

const GoToAnotherEntryBlock = styled.div`
    align-items: center;
    display: flex;
    gap: 0.625rem;
    position: absolute;
    right: 10%;

    ${media.lessThan("medium")`
    margin: 0 0 0 0;
    position: relative;
    right: 0;
    left: 0;
    `}
`;

const EntryBlock = styled.div`
    background-color: ${(props) => props.theme.color.bgColor};
    border-radius: 30px;
    box-shadow: 4px 4px 100px 8px #ff6d4c40;
    padding-top: 1.875rem;
    padding-bottom: 1.25rem;
    position: absolute;
    width: 25rem;
    margin-left: 10%;
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
        margin: 0;
        margin-right: 2.5rem; 
        position: relative;
        margin-bottom: 1.25rem; 
        `}
    ${media.lessThan("medium")`
        margin-right:0;
    `}
`;

const TextWrapper = styled.div`
    color: ${(props) => props.theme.color.mainColor};
    ${globalSemiBoldFontStyles}
    line-height: 1.25em;
    margin-left: 1.875rem;
`;

const InputsContainer = styled.div`
    margin-top: 1.8125rem;
    margin-left: 1.875rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

const ButtonContainer = styled.div`
    margin-top: 1.25rem;
    display: flex;
    justify-content: right;
    margin-right: 1.875rem;
`;

const Input = styled.input`
    background-color: ${(props) => props.theme.color.bgColor};
    border: 2px solid;
    border-color: ${(props) => props.theme.color.secondryBgColor};
    border-radius: 1rem;
    color: ${(props) => props.theme.color.notActiveColor};
    ${globalRegularFontStyles}
    height: 3rem;
    padding: 0;
    padding-left: 1.125rem;
    position: relative;
    white-space: nowrap;
    margin-right: 1.875rem;

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
    ${globalBoldFontStyles};
    font-size: 1em;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.3125rem;
`;

const LinkToAnotherEntry = styled.p`
    color: ${(props) => props.theme.color.fontColor};
    ${globalRegularFontStyles}
    letter-spacing: 0;
    line-height: 1.25em;
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

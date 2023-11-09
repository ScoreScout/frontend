import React from "react";
import AddCircleIcon from "../../../components/icons/AddCircleIcon";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";
import Button from "../../../components/Button/Button";
import { ButtonSize } from "../../../types/buttonTypes";
import {
    EntryWrapper,
    EntryContainer,
    EntryBlock,
    TextWrapper,
    InputsContainer,
    Input,
    ButtonContainer,
    ButtonText,
    GoToAnotherEntryBlock,
    LinkToAnotherEntry,
} from "../style";



const SignInPage = (): JSX.Element => {
    return (
        <EntryWrapper>
            <EntryContainer>
                <EntryBlock>
                    <TextWrapper>Sign up</TextWrapper>
                    <InputsContainer>
                        <Input placeholder='E-mail' type='email' />
                        <Input placeholder='Password' type='password' />
                    </InputsContainer>
                    <ButtonContainer>
                        <Button primary={true} size={ButtonSize.S}>
                            <ButtonText>
                            Log in account{" "}
                                <AddCircleIcon size={24} color='#FFFFFF' />{" "}
                            </ButtonText>
                        </Button>
                    </ButtonContainer>
                </EntryBlock>
                <GoToAnotherEntryBlock>
                    <LinkToAnotherEntry>I don’t have an account</LinkToAnotherEntry>
                    <ArrowRightIcon size={30} color='#331515' />
                </GoToAnotherEntryBlock>
            </EntryContainer>
        </EntryWrapper>
    );
};

export default SignInPage;

import { styled } from "styled-components";
import ContainerRow from "../Container/ContainerRow";
import HeaderText from "../Text/HeaderText";

const LoginText = styled.text`
    font-size: 1rem;
`
const LoginContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export default function Component(){
    return (
        <ContainerRow $padding="1rem">
            <HeaderText $font_size="1.5rem">KLR.KR</HeaderText>
            <LoginContainer>
                <LoginText>로그인</LoginText>
                <LoginText>|</LoginText>
                <LoginText>회원가입</LoginText>
            </LoginContainer>
        </ContainerRow>
    )
}
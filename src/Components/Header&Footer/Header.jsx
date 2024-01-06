import { styled } from "styled-components";
import HeaderText from "../Text/HeaderText";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

const LoginText = styled.p`
    font-size: 1rem;
`
const LoginContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export default function Component(){
    return (
        <HeaderContainer>
            <HeaderText $font_size="1.5rem">KLR.KR</HeaderText>
            <LoginContainer>
                <LoginText>로그인</LoginText>
                <LoginText>|</LoginText>
                <LoginText>회원가입</LoginText>
            </LoginContainer>
        </HeaderContainer>
    )
}
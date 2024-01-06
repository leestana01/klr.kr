import styled from 'styled-components';
import ContainerColumn from "../../Components/Container/ContainerColumn";
import HeaderText from "../../Components/Text/HeaderText";
import RegularText from '../../Components/Text/RegularText';
import SizedBoxColumn from '../../Components/SizedBox/SizedBoxColumn';
import ContainerCenter from '../../Components/Container/ContainerCenter';

const BannerContainer = styled(ContainerColumn)`
    align-items: end;
    padding: 3rem;
`

const BannerHeader = styled(HeaderText)`
    font-size: 3rem;
`

const BannerText = styled(RegularText)`
    font-size: 2rem;
`
const WordContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.$justify_content};
    width: 100%;
    padding: 0.5rem;
`

const WordBox = styled.div`
    background: ${props => props.$background};
    padding: 0.5rem;
`

const WordText = styled(HeaderText)`
    font-size: 3rem;
`

export default function Component() {

    return (
        <BannerContainer>
            <BannerHeader>사용자 편의 서비스 및 UI 제공</BannerHeader>
            <BannerText>이해하기 어려운 용어는 쉬운 용어로.</BannerText>

            <SizedBoxColumn/>
            <ContainerCenter>
                <WordContainer>
                    <WordBox $background="#A6A6A6">
                        <WordText>A, AAAA, CNAME, Redirection, ...</WordText>
                    </WordBox>
                </WordContainer>
                <WordContainer $justify_content="right">
                    <WordBox $background="#00F6CA">
                        <WordText>유동 연결(주소창 주소로), 고정 연결(입력한 주소로)</WordText>
                    </WordBox>
                </WordContainer>
            </ContainerCenter>
        </BannerContainer>
    )
}
import styled from "styled-components";
import RegularText from "../Text/RegularText";
import SizedBoxColumn from "../SizedBox/SizedBoxColumn";
import HeaderText from "../Text/HeaderText";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    background: black;
    color: white;
`

const DescriptionText = styled(RegularText)`
    font-size: 1rem;
`

const ListContainer = styled.ul`
    list-style-type: disc;
`

const ListItem = ({children}) => {
    return (
        <li style={{marginLeft:"1rem"}}>
            <DescriptionText>{children}</DescriptionText>
        </li>
    )
}

const AlertContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AlertText = styled(HeaderText)`
    font-size: 1.5rem;
`

export default function Component(){

    return (
        <FooterContainer>
            <DescriptionText>대표: 이수혁</DescriptionText>
            <SizedBoxColumn/>

            <DescriptionText>소속</DescriptionText>
            <ListContainer>
                <ListItem>한국외국어대학교 정보통신공학과 ( HUFS Information and Communication Engineering)</ListItem>
                <ListItem>한국외국어대학교 글로벌캠퍼스 멋쟁이사자처럼 11기 (아기사자) & 12기 (운영진)</ListItem>
            </ListContainer>
            <SizedBoxColumn/>

            <DescriptionText>©LeeSuHyeok All Rights Reserved.</DescriptionText>
            <SizedBoxColumn/>

            <AlertContainer>
                <AlertText>현재 시범 운용 단계입니다.</AlertText>
                <AlertText>작업하신 도메인 내역은 언제든지 고지없이 삭제될 수 있습니다.</AlertText>
            </AlertContainer>
        </FooterContainer>
    )
}
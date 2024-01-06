import styled from 'styled-components';
import ContainerColumn from "../../Components/Container/ContainerColumn";
import HeaderText from "../../Components/Text/HeaderText";
import RegularText from '../../Components/Text/RegularText';

const BannerContainer = styled(ContainerColumn)`
    align-items: center;
    gap: 3rem;
    padding: 3rem;
    background: #FFEDDF;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
`
const BannerHeader = styled(HeaderText)`
    font-size: 3rem;
`

const BannerText = styled(RegularText)`
    font-size: 2rem;
`

const BannerTextSmall = styled(RegularText)`
    font-size: 1.5rem;
`

const Image = styled.img`
`

export default function Component() {

    return (
        <BannerContainer>
            <TextContainer>
                <BannerHeader>한국외대 멋쟁이사자처럼 혜택</BannerHeader>
                <BannerText>개수 제한 없이 무료로 이용가능</BannerText>
            </TextContainer>
            <Image src="img/LIKELION.svg"/>
            <BannerText>기간: ~2024년까지</BannerText>
            <BannerTextSmall>기본 사용자는 개수 제한 3개</BannerTextSmall>
        </BannerContainer>
    )
}
import styled from 'styled-components';
import ContainerColumn from "../../Components/Container/ContainerColumn";
import HeaderText from "../../Components/Text/HeaderText";
import RegularText from '../../Components/Text/RegularText';
import ContainerCenter from '../../Components/Container/ContainerCenter';
import ContainerRow from '../../Components/Container/ContainerRow';

const BannerContainer = styled(ContainerColumn)`
    align-items: left;
    padding: 3rem;
`

const BannerHeader = styled(HeaderText)`
    font-size: 3rem;
`

const BannerText = styled(RegularText)`
    font-size: 2rem;
`

const ImageContainer = styled(ContainerCenter)`
    padding: 5rem 0;
    gap: 5rem;
`
const ImageCloud = styled.img`
    width: 20rem;
    height: 12rem;
`
const ImageServerInterAction = styled.img`
    width: 20rem;
    height: 15rem;
`

export default function Component() {

    return (
        <BannerContainer>
            <BannerHeader>프리미엄 서비스 제공</BannerHeader>
            <BannerText>제한없는 월 트래픽 1TB, TTL 갱신시간 5분</BannerText>
            <ImageContainer>
                <ContainerRow>
                    <ImageCloud src="img/oracle_cloud.png"/>
                    <BannerText>Oracle Cloud Server를 이용하여, 월 1TB 트래픽으로 운용합니다.</BannerText>
                </ContainerRow>
                <ContainerRow>
                    <ImageServerInterAction src="img/server_interaction.png"/>
                    <BannerText>TTL 시간을 300초로 획기적으로 줄여, 빠른 갱신속도를 보장합니다.</BannerText>
                </ContainerRow>
            </ImageContainer>
        </BannerContainer>
    )
}
import styled from 'styled-components';
import ContainerColumn from "../../Components/Container/ContainerColumn";
import HeaderText from "../../Components/Text/HeaderText";
import RegularText from '../../Components/Text/RegularText';
import ContainerRow from '../../Components/Container/ContainerRow';
import SizedBoxColumn from '../../Components/SizedBox/SizedBoxColumn';

const BannerContainer = styled(ContainerColumn)`
    align-items: center;
    padding: 3rem;
`
const BannerHeader = styled(HeaderText)`
    font-size: 3rem;
`

const BannerText = styled(RegularText)`
    font-size: 2rem;
`

const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  padding: 0.5rem;

  background: linear-gradient(90deg, #003366 0%, #61878E 100%);
  /* background: linear-gradient(90deg, #06223D 0%, #446B78 70%,#61878E 100%); */

`;

const ImageContainer = styled(ContainerRow)`
    gap: 2rem;
`

const Image = styled.img`
    width: 12rem;
    height: 12rem;
`

const KlrWithImage = styled(HeaderText)`
    color: white;
`


export default function Component() {

    return (
        <BannerContainer>
            <BannerHeader>도메인을 무료로 발급해드립니다</BannerHeader>
            <BannerText>도메인 비용이 소중한 프로젝트 배포의 발목을 잡지 않도록.</BannerText>
            <SizedBoxColumn/>
            <ImageContainer>
                <Image src="img/banner_project.png"/>
                <GradientContainer>
                    <KlrWithImage>KLR.KR</KlrWithImage>
                </GradientContainer>
                <Image src="img/banner_internet.png"/>
            </ImageContainer>
        </BannerContainer>
    )
}
import styled from 'styled-components';
import { media } from '../../media';
import HeaderText from '../../Components/Text/HeaderText';

const PaddingContainer = styled.div`
    padding: 0 0rem;
    background: #F2F2F2;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 3rem;
`;

const MenuItem = styled(HeaderText)`
  display: flex;
  justify-content: center;
  width: 33%;

  @media ${media.semi_mobile} {
    font-size: 0.8rem;
  }
`;

export default function Component(){
    return (
        <PaddingContainer>
            <MenuContainer>
                <MenuItem>내 도메인 관리</MenuItem>
                <p>|</p>
                <MenuItem>Https 인증서 발급</MenuItem>
                <p>|</p>
                <MenuItem>HUFS_G 계정 연동</MenuItem>
            </MenuContainer>
        </PaddingContainer>
    )
}
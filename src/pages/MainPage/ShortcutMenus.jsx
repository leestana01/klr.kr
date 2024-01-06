import styled from 'styled-components';
import RegularText from '../../Components/Text/RegularText';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 2rem;
`
const PaddingContainer = styled.div`
    padding: 0 1rem;
    background: #F2F2F2;
`

const MenuItem = styled(RegularText)`
  flex: 1; // flex-grow, flex-shrink, flex-basis가 모두 1
  text-align: center; // 텍스트 중앙 정렬
  &:first-child {
    text-align: left; // 첫 번째 항목은 좌측 정렬
  }
  &:last-child {
    text-align: right; // 마지막 항목은 우측 정렬
  }
`;

export default function Component(){
    return (
        <PaddingContainer>
            <MenuContainer>
                <MenuItem>내 도메인 관리</MenuItem>
                <MenuItem>|</MenuItem>
                <MenuItem>Https 인증서 발급</MenuItem>
                <MenuItem>|</MenuItem>
                <MenuItem>HUFS_G 계정 연동</MenuItem>
            </MenuContainer>
        </PaddingContainer>
    )
}
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import ContainerRow from '../../Components/Container/ContainerRow';
import HeaderText from '../../Components/Text/HeaderText';
import RegularText from '../../Components/Text/RegularText';

const GradientContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  padding: 1rem;

  background: linear-gradient(90deg, #003366 0%, #61878E 100%);
  /* background: linear-gradient(90deg, #06223D 0%, #446B78 70%,#61878E 100%); */

`;

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 12rem;
  border: none;
  text-align: end;
`;

const SearchLogo = styled(HeaderText)`
  font-size: 1rem;
  white-space: nowrap;
  color: black;
`
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: none;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;

  padding-left: 0.5rem;
  padding-right: 1.5rem;

  margin-right: -1rem;
  
  background: white;
`

const SearchButton = styled.button`
  width: 2rem;
  height: 2rem;

  border: none;
  border-radius: 0.5rem; // 원형 버튼
  padding: 0.5rem;
  
  background: black;
  cursor: pointer;
`;

const SearchContainer = styled(ContainerRow)`
  justify-content: right;
  padding: 0;
`

export default function Component() {
    return (
        <GradientContainer>
            <ContainerColumn $width="100%">
                <RegularText $color="white">도메인, 이제는 무료로</RegularText>
                <SearchContainer>
                    <SearchBox>
                        <SearchInput type="text" placeholder="여기에 도메인을 입력하세요..." />
                        <SearchLogo>.klr.kr</SearchLogo>
                    </SearchBox>
                    <SearchButton>
                        <FaSearch color='white'/>
                    </SearchButton>
                </SearchContainer>
            </ContainerColumn>
        </GradientContainer>
    )
}
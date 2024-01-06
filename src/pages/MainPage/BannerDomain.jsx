import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import ContainerRow from '../../Components/Container/ContainerRow';
import HeaderText from '../../Components/Text/HeaderText';
import RegularText from '../../Components/Text/RegularText';

const GradientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  padding: 3rem;

  background: linear-gradient(90deg, #003366 0%, #61878E 100%);
  /* background: linear-gradient(90deg, #06223D 0%, #446B78 70%,#61878E 100%); */

`;

const SearchContainer = styled(ContainerRow)`
  justify-content: right;
  padding: 0;
`
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  padding-left: 1rem;
  padding-right: 1.5rem;

  margin-right: -1rem;
  
  background: white;
`

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 25rem;
  height: 3rem;
  border: none;

  font-size: 1.5rem;
  text-align: end;
`;

const SearchLogo = styled(HeaderText)`
  font-size: 1.7rem;
  white-space: nowrap;
  color: black;
`

const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;

  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  
  background: black;
  cursor: pointer;
`;

export default function Component() {
    return (
        <GradientContainer>
            <ContainerColumn $width="100%">
                <RegularText $font_size="2rem" $color="white">도메인, 이제는 무료로</RegularText>
                <SearchContainer>
                    <SearchBox>
                        <SearchInput type="text" placeholder="여기에 원하는 도메인을 입력하세요" />
                        <SearchLogo>.klr.kr</SearchLogo>
                    </SearchBox>
                    <SearchButton>
                        <FaSearch color='white' size="2rem"/>
                    </SearchButton>
                </SearchContainer>
            </ContainerColumn>
        </GradientContainer>
    )
}
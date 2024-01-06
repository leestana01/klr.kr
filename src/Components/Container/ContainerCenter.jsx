import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${props => props.$padding};
    width: 100%;
`
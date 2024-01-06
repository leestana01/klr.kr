import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props => props.$padding};
    width: ${props => props.$width}
`
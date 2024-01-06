import styled from 'styled-components';

export default styled.h1`
    font-family: 'LINE-Bd';
    font-size: ${props => props.$font_size || null};
`
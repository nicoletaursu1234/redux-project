import styled from "styled-components";

export const SVG = styled.svg`
margin: 0;
${(props) => props.width? `width: ${props.width+'px'}` : `width: 300px`};
${(props) => props.height? `height: ${props.height+'px'}` : `height: 70px`};
`
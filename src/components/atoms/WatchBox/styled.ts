import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div<{videoLink: string}>`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  ${(props) => !props.videoLink && css`opacity: .3;`}
`

export const Icon = styled(FontAwesomeIcon)`
  color: #D50000;
  margin-right: 5px;
`

export const Link = styled.a`
  font-size: 12px;
  font-weight: 600;
  color: #D50000;
  text-decoration: none;
`
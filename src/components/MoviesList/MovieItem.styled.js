import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled( Link )
`
  margin: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[2]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MovieImg = styled.img `
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ItemMovie = styled.li `
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

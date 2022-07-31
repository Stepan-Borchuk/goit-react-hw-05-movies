import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled( Link )
`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
export const AdditionalInfo = styled.div `
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
`;
export const AdditionalLink = styled( Link )
`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[4]}px;
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

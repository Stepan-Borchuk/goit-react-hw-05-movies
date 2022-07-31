import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchForm = styled( Form )
`
  margin-left: ${p => p.theme.space[3]}px;
`;

export const Input = styled( Field )
`
  margin-right: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const SearchBtn = styled.button `
  height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

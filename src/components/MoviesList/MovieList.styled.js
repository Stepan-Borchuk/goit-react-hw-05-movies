import styled from 'styled-components';

export const List = styled.ul `
  padding-left: ${p => p.theme.space[0]}px;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[0]}px;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

import styled from 'styled-components';

export const CastList = styled.ul `
  padding-left: ${p => p.theme.space[0]}px;
  display: grid;
  max-width: calc(100vw);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[0]}px;
  justify-content: center;

  list-style: none;
  margin-left: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
`;

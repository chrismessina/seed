import styled from 'styled-components'

export const NoteCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${(p) => p.theme.breakpoints.medium};
  padding: 0 0;
  margin: 0 auto ${(p) => p.theme.space[6]};
  font-size: ${(p) => p.theme.fontSizes[2]};
  text-align: start;

  & > * {
    margin: 4px;
  }

  & {
    @media (max-width: ${(p) => p.theme.breakpoints.medium}) {
      display: none;
    }
  }
`

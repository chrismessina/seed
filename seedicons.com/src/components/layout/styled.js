import styled from 'styled-components'

export const Main = styled.main`
  padding: ${(p) => p.theme.space[12]} ${(p) => p.theme.space[5]};
  margin: 0 ${(p) => p.theme.space[5]};

  & {
    @media (max-width: ${(p) => p.theme.breakpoints.medium}) {
      margin: 0;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.space[4]} ${(p) => p.theme.space[6]};
`

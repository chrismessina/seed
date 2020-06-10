import styled from 'styled-components'

export const FooterCont = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${(p) => p.theme.breakpoints.medium};
  font-size: ${(p) => p.theme.fontSizes[2]};
  margin: 0 auto;
  padding: ${(p) => p.theme.space[4]} ${(p) => p.theme.space[5]};
  border-top: 1px solid ${(p) => p.theme.colors.stroke};

  & {
    @media (max-width: ${(p) => p.theme.breakpoints.medium}) {
      flex-direction: column;
      align-items: center;
    }
  }
`
export const FooterLinkCont = styled.div`
  display: flex;
  margin: ${(p) => p.theme.space[2]} 0;

  & > a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.text};

    &:hover {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`

export const FooterLink = styled.a`
  margin: ${(p) => p.margin};
`

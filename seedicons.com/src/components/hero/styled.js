import styled from 'styled-components'

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${p => p.theme.breakpoints.medium};
  flex-direction: column;
  text-align: center;
  margin: 0 auto ${p => p.theme.space[4]};

  & h1 {
    font-size: ${p => p.theme.fontSizes[8]};
    line-height: ${p => p.theme.lineHeights.tight};
    color: ${p => p.theme.colors.header};
    font-weight: 700;
    margin: ${p => p.theme.space[2]} 0 ${p => p.theme.space[3]};

    @media (max-width: ${p => p.theme.breakpoints.medium}) {
      font-size: ${p => p.theme.fontSizes[7]};
    }
  }

  & h2 {
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: ${p => p.theme.lineHeights.normal};
    font-weight: 400;
    margin: ${p => p.theme.space[2]} 0 ${p => p.theme.space[5]};

    @media (max-width: ${p => p.theme.breakpoints.medium}) {
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`


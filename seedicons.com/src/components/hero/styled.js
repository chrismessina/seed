import styled from 'styled-components'

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${p => p.theme.breakpoints['medium']};
  flex-direction: column;
  text-align: center;
  margin: 0 auto ${p => p.theme.space[6]};

  & h1 {
    font-size: ${p => p.theme.fontSizes[8]};
    line-height: ${p => p.theme.lineHeights.tight};
    color: ${p => p.theme.colors.header};
    font-weight: 700;
    margin: ${p => p.theme.space[2]} 0 ${p => p.theme.space[3]};
  }

  & h2 {
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: ${p => p.theme.lineHeights.normal};
    font-weight: 400;
    margin: ${p => p.theme.space[2]} 0 ${p => p.theme.space[5]};
  }
`

export const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & {
    @media (max-width: ${p => p.theme.breakpoints.small}) {
      display: none;
    }
  }
`

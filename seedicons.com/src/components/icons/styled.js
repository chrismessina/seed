import styled from 'styled-components'

export const Content = styled.div`
  max-width: ${p => p.theme.breakpoints['large']};
  display: grid;
  /* grid-template-columns: 1fr 4fr; */
  grid-auto-rows: minmax(70px, auto);
  grid-gap: ${p => p.theme.space[5]};
  margin: 0 auto;

  & {
    @media (max-width: ${p => p.theme.breakpoints.medium}) {
      grid-template-columns: 1fr;
    }
  }
`

export const SidebarCont = styled.div`
  min-width: 140px;
  font-size: ${p => p.theme.fontSizes[2]};
  color: ${p => p.theme.colors.text};

  & ul {
    margin: 0 0 ${p => p.theme.space[6]};
  }

  & h3 {
    font-size: ${p => p.theme.fontSizes[1]};
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.6;
  }

  ${Content} & {
    @media (max-width: ${p => p.theme.breakpoints.medium}) {
      display: none;
    }
  }
`

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: minmax(70px, auto);
  grid-gap: ${p => p.theme.space[4]};
`

export const IconCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: ${p => p.theme.fontSizes[2]};
`

export const IconFrame = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii};
  border: 1px solid ${p => p.theme.colors.stroke};
  color: ${p => p.theme.colors.text};
  width: 100%;
  min-height: 70px;
  margin: 0 0 ${p => p.theme.space[3]};

  &:hover {
    border: 1px solid ${p => p.theme.colors.primary};
  }
`

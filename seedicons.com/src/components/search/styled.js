import styled from 'styled-components'

export const SearchCont = styled.div`
  display: flex;
  max-width: ${(p) => p.theme.breakpoints.medium};
  margin: 0 auto ${(p) => p.theme.space[6]};
`

export const SearchInput = styled.div`
  position: relative;
  width: 100%;
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  left: ${(p) => p.theme.space[3]};

  & > svg {
    fill: ${(p) => p.theme.colors.text};
  }
`

export const StyledSearch = styled.input`
  width: 100%;
  padding: ${(p) => p.theme.space[4]} ${(p) => p.theme.space[4]}
    ${(p) => p.theme.space[4]} ${(p) => p.theme.space[7]};
  color: ${(p) => p.theme.colors.header};
  outline: 0;
  border: 0;
  border-radius: ${(p) => p.theme.radii};
  background: ${(p) => p.theme.colors.backgroundLight};

  &:focus {
    box-shadow: ${p => p.theme.colors.focus};
    outline: none;
  }
`

export const DownloadButton = styled.button`
  margin: 0 0 0 ${(p) => p.theme.space[2]};
  background: ${(p) => p.theme.colors.primary};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radii};
  border: none;
  white-space: nowrap;
  padding: 0 ${(p) => p.theme.space[4]};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    box-shadow: ${p => p.theme.colors.focus};
    outline: none;
  }

  ${SearchCont} & {
    @media (max-width: ${(p) => p.theme.breakpoints.small}) {
      display: none;
    }
  }
`

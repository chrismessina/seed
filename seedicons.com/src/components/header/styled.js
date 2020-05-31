import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../base'

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${p => p.theme.colors.background};
  z-index: 999;
  transition: border 0.6s;
  border-bottom: 1px solid transparent;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[4]};
  margin: 0 ${p => p.theme.space[5]};
  justify-content: space-between;
  height: 60px;

  ${StyledHeader} & {
    @media (max-width: ${p => p.theme.breakpoints.medium}) {
      margin: 0;
    }
  }
`

export const LogotypeCont = styled(Link)`
  display: flex;
  width: 98px;
  height: 32px;
  color: ${p => p.theme.colors.header};
  margin-right: ${p => p.theme.space[3]};

  ${StyledHeader} & {
    @media (max-width: ${p => p.theme.breakpoints.small}) {
      display: none;
    }
  }
`

export const LogoCont = styled(Link)`
  width: 32px;
  height: 32px;
  display: none;

  ${StyledHeader} & {
    @media (max-width: ${p => p.theme.breakpoints.small}) {
      display: flex;
    }
  }
`

export const VersionTag = styled.a`
  display: flex;
  align-content: center;
  justify-items: center;
  background: ${p => p.theme.colors.primaryLight};
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};
  border-radius: ${p => p.theme.radii};
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.medium};
  height: fit-content;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &:hover {
    text-decoration: underline;
  }

  ${StyledHeader} & {
    @media (max-width: ${p => p.theme.breakpoints.medium}) {
      display: none;
    }
  }
`

export const NavLink = styled(Link)`
  font-size: ${p => p.theme.fontSizes[2]};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  margin: 0 ${p => p.theme.space[4]};

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`

export const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes[2]};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  margin: 0 ${p => p.theme.space[4]};

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`

export const NavCont = styled.nav`
  display: flex;
  align-items: center;
`


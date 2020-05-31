import React from 'react'
import { useTheme } from '../../theme/theme-context'
import { Flex, Logotype, Logo, ThemeSwitch } from '../base'
import {
  StyledHeader,
  Container,
  LogotypeCont,
  LogoCont,
  NavCont,
  NavLink,
  VersionTag
} from './styled'
import { version } from 'seed-icons/package.json'

const Header = () => {
  const themeToggle = useTheme()

  return (
    <StyledHeader>
      <Container>
        <Flex ai={'center'}>
          <LogotypeCont to="/" tabIndex="1">
            <Logotype />
          </LogotypeCont>
          <LogoCont to="/">
            <Logo />
          </LogoCont>
          <VersionTag href="#">v{version}</VersionTag>
        </Flex>
        <NavCont>
          <NavLink
            to="/"
            activeStyle={{ color: '#3CD1A5', textDecoration: 'none' }}
          >
            Icons
          </NavLink>
          <NavLink
            to="/page-2"
            activeStyle={{ color: '#3CD1A5', textDecoration: 'none' }}
          >
            Usage
          </NavLink>
          <ThemeSwitch storage={themeToggle} func={themeToggle.toggle} />
        </NavCont>
      </Container>
    </StyledHeader>
  )
}

export default Header

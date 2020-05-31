import React, { useState } from 'react'
import { useTheme } from '../../theme/theme-context'
import { Flex, Icon, Logotype, Logo, ThemeSwitch } from '../base'
import {
  StyledHeader,
  Container,
  LogotypeCont,
  DownloadButton,
  LogoCont,
  NavCont,
  NavLink,
  MobileNav,
  More,
  MoreIcon,
  VersionTag
} from './styled'
import { version } from 'seed-icons/package.json'
import { icons } from 'seed-icons'

const MobileNavigation = () => {
  const [active, setActive] = useState()
  console.log(icons)

  return (
    <More onClick={() => setActive(!active)}>
      <MoreIcon active={active ? 1 : 0}>
        <Icon content={icons["more-f"].contents} />
      </MoreIcon>
      <MobileNav active={active ? 1 : 0} />
    </More>
  )
}

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
          <DownloadButton onClick={() => themeToggle.toggle()}>
            <Icon
              content={icons["more-f"].contents}
              size={16}
              css={{ marginRight: '8px' }}
            />
            Download
          </DownloadButton>
          <ThemeSwitch storage={themeToggle} func={themeToggle.toggle} />
        </NavCont>
        <MobileNavigation />
      </Container>
    </StyledHeader>
  )
}

export default Header

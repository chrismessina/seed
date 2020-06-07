import React from 'react'
import { useTheme } from '../../theme/theme-context'
import { Flex, Logotype, Logo, ThemeSwitch } from '../base'
import {
  StyledHeader,
  ExternalNavLink,
  Container,
  LogotypeCont,
  LogoCont,
  NavCont,
  NavLink,
  VersionTag,
} from './styled'
import locale from '../../locale/en'
import { version } from 'seed-icons/package.json'

const Header = () => {
  const themeToggle = useTheme()

  return (
    <StyledHeader>
      <Container>
        <Flex ai={'center'}>
          <LogotypeCont to={locale.nav.hrefs.home} tabIndex="1">
            <Logotype />
          </LogotypeCont>
          <LogoCont to={locale.nav.hrefs.home}>
            <Logo />
          </LogoCont>
          <VersionTag href={locale.links.npm}>v{version}</VersionTag>
        </Flex>
        <NavCont>
          <NavLink
            to={locale.nav.hrefs.home}
            activeStyle={{
              color: '#3CD1A5',
              textDecoration: 'none',
            }}
          >
            {locale.nav.strings.home}
          </NavLink>
          <ExternalNavLink href={locale.nav.hrefs.usage}>
            {locale.nav.strings.usage}
          </ExternalNavLink>
          <ExternalNavLink href={locale.nav.hrefs.tools}>
            {locale.nav.strings.tools}
          </ExternalNavLink>
          <ThemeSwitch storage={themeToggle} func={themeToggle.toggle} />
        </NavCont>
      </Container>
    </StyledHeader>
  )
}

export default Header

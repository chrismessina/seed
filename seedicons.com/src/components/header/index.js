import React from 'react'
import { useTheme } from '../../theme/theme-context'
import { Flex, Logotype, Logo, ThemeSwitch } from '../base'
import {
  StyledHeader,
  Container,
  LogotypeCont,
  LogoCont,
  NavCont,
  VersionTag,
  ExternalNavLink,
} from './styled'
import locale from '../../locale/en'
import { version } from 'seed-icons/package.json'

const Header = () => {
  const themeToggle = useTheme()

  return (
    <StyledHeader>
      <Container>
        <Flex ai={'center'}>
          <LogotypeCont to={locale.nav.hrefs.home}>
            <Logotype />
          </LogotypeCont>
          <LogoCont to={locale.nav.hrefs.home}>
            <Logo />
          </LogoCont>
          <VersionTag href={locale.links.npm}>v{version}</VersionTag>
        </Flex>
        <NavCont>
          <ExternalNavLink href={locale.links.github}>
            {locale.nav.strings.usage}
          </ExternalNavLink>
          <ThemeSwitch storage={themeToggle} func={themeToggle.toggle} />
        </NavCont>
      </Container>
    </StyledHeader>
  )
}

export default Header

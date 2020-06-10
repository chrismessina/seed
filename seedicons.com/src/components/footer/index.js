import React from 'react'
import { FooterCont, FooterLinkCont, FooterLink } from './styled'
import locale from '../../locale/en'

export const Footer = () => {
  return (
    <FooterCont>
      <FooterLinkCont>
        <FooterLink margin={'0 20px 0 0'} href={locale.links.github}>
          {locale.footer.contribute}
        </FooterLink>
        <FooterLink margin={'0 20px 0 0'} href={locale.links.issues}>
          {locale.footer.request}
        </FooterLink>
        <FooterLink margin={'0 20px 0 0'} href={locale.links.github}>
          {locale.footer.github}
        </FooterLink>
        <FooterLink href={locale.links.npm}>{locale.footer.npm}</FooterLink>
      </FooterLinkCont>
      <FooterLinkCont>
        <span>{locale.footer.madeBy}</span>
        <FooterLink margin={'0 0 0 6px'} href="#">
          {locale.footer.handle}
        </FooterLink>
      </FooterLinkCont>
    </FooterCont>
  )
}

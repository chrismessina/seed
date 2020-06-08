import React from 'react'
import { FooterCont, FooterLinkCont, FooterLink } from './styled'

export const Footer = () => {
    return (
        <FooterCont>
            <FooterLinkCont>
                <FooterLink margin={'0 8px 0 0'} href="#">Hello</FooterLink>
                <FooterLink margin={'0 8px 0 0'} href="#">Hello</FooterLink>
                <FooterLink href="#">Hello</FooterLink>
            </FooterLinkCont>
            <FooterLinkCont>
                <span>Made by</span><FooterLink margin={'0 0 0 6px'} href="#">@_rossmoody</FooterLink>
            </FooterLinkCont>
        </FooterCont>
    )
}

import React from 'react'
import { StyledHero, StyledLinks } from './styled'
import { Link } from '../base'

export const Hero = () => {
  return (
    <StyledHero>
      <h1>Icons in their simplest form</h1>
      <h2>
        Premium open source icons for use in web, iOS, Android, and desktop
        apps. Meticulously designed to render well at sizes below 20px. Get it
        running on your site in 2 lines of code.
      </h2>
      <StyledLinks>
        <Link href="#">Request an icon</Link>
        <span>•</span>
        <Link href="#">Contribute on GitHub</Link>
        <span>•</span>
        <Link href="#">Quick start</Link>
      </StyledLinks>
    </StyledHero>
  )
}
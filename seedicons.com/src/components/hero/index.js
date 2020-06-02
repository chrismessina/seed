import React from 'react'
import { StyledHero } from './styled'
import locale from '../../locale/en'

export const Hero = () => {
    return (
        <StyledHero>
            <h1>{locale.hero.headline}</h1>
            <h2>{locale.hero.subhead}</h2>
        </StyledHero>
    )
}

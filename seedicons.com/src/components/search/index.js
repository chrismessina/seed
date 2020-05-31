import React from 'react'
import { StyledSearch, SearchCont, SearchIcon } from './styled'
import { Icon } from '../base'
import { icons } from 'seed-icons'

export const Search = ({ placeholder, value, onChange }) => {
  return (
    <SearchCont>
      <SearchIcon>
        <Icon content={icons["more-f"].contents} />
      </SearchIcon>
      <StyledSearch type="search" placeholder={placeholder} autoFocus={true} />
    </SearchCont>
  )
}

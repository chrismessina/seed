import React from 'react'
import { StyledSearch, SearchCont, SearchIcon } from './styled'
import { Icon } from '../base'
import locale from '../../locale/en'

export const Search = ({ value, onChange }) => {
  const inputElement = React.useRef(null)

  return (
    <SearchCont>
      <SearchIcon>
        <Icon
          content={`<path fill-rule="evenodd" clip-rule="evenodd" d="M8 22C8 14.268 14.268 8 22 8C29.732 8 36 14.268 36 22C36 25.7719 34.5083 29.1955 32.0827 31.7129C32.0143 31.7655 31.9485 31.8231 31.8858 31.8858C31.8232 31.9484 31.7655 32.0142 31.7129 32.0826C29.1955 34.5083 25.772 36 22 36C14.268 36 8 29.732 8 22ZM33.2354 36.0638C30.1561 38.527 26.25 40 22 40C12.0589 40 4 31.9411 4 22C4 12.0589 12.0589 4 22 4C31.9411 4 40 12.0589 40 22C40 26.25 38.5271 30.156 36.0638 33.2353L43.4143 40.5858C44.1953 41.3668 44.1953 42.6332 43.4143 43.4142C42.6332 44.1953 41.3669 44.1953 40.5858 43.4142L33.2354 36.0638Z""/>`}
          size={20}
        />
      </SearchIcon>
      <StyledSearch
        ref={inputElement}
        type="search"
        value={value}
        placeholder={locale.search.placeholder}
        onChange={onChange}
        aria-label={locale.search.inputAria}
        autoFocus
      />
    </SearchCont>
  )
}

import React from 'react'
import { StyledSearch, SearchCont, SearchIcon } from './styled'
import { Icon } from '../base'

export const Search = ({ placeholder, value, onChange }) => {
    return (
        <SearchCont>
            <SearchIcon>
                <Icon
                    content={`<path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.8859 18 14.5977 17.2542 15.8564 16.0414C15.8827 16.0072 15.9115 15.9742 15.9429 15.9429C15.9742 15.9115 16.0072 15.8827 16.0414 15.8564C17.2542 14.5977 18 12.8859 18 11C18 7.13401 14.866 4 11 4ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177Z"/>`}
                    size={20}
                />
            </SearchIcon>
            <StyledSearch
                type="search"
                placeholder={placeholder}
                autoFocus={true}
            />
        </SearchCont>
    )
}

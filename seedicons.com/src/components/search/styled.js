import styled from 'styled-components'

export const SearchCont = styled.div`
    position: relative;
    max-width: ${p => p.theme.breakpoints.medium};
    margin: 0 auto ${p => p.theme.space[6]};
`

export const SearchIcon = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    left: ${p => p.theme.space[3]};
`

export const StyledSearch = styled.input`
    width: 100%;
    padding: ${p => p.theme.space[4]} ${p => p.theme.space[4]}
        ${p => p.theme.space[4]} ${p => p.theme.space[7]};
    color: ${p => p.theme.colors.header};
    outline: 0;
    border: 0;
    border-radius: ${p => p.theme.radii};
    background: ${p => p.theme.colors.backgroundLight};
`

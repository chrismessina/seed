import styled from 'styled-components'

export const Content = styled.div`
    max-width: ${p => p.theme.breakpoints.medium};
    display: grid;
    grid-auto-rows: minmax(70px, auto);
    grid-gap: ${p => p.theme.space[5]};
    margin: 0 auto;
`

export const IconsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    grid-auto-rows: minmax(70px, auto);
    grid-gap: ${p => p.theme.space[4]};
`

export const IconCont = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 70px;
    border: 1px solid transparent;
    border-radius: ${p => p.theme.radii};
    color: ${p => p.theme.colors.header};

    &:hover {
        border: 1px solid ${p => p.theme.colors.primary};
        cursor: pointer;
    }
`

export const Tooltip = styled.div`
    visibility: hidden;
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.background};
    text-align: center;
    padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    font-size: ${p => p.theme.fontSizes[2]};
    opacity: 0;
    transition: all 200ms ease;

    ${IconCont}:hover & {
        visibility: visible;
        transition: all 200ms ease;
        opacity: 1;
        bottom: 120%;
    }
`

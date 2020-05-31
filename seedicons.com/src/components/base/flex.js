import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: ${p => p.jc};
    align-items: ${p => p.ai};
`

const Box = styled.div`
    padding: ${p => p.p};
    margin: ${p => p.m};
    height: ${p => p.h};
    width: ${p => p.w};
`

export { Flex, Box }

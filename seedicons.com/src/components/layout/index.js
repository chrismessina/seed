import React from 'react'
import PropTypes from 'prop-types'
import '../../static/normalize.css'
import Header from '../header'
import { withTheme } from 'styled-components'
import { Main, Footer } from './styled'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer>Made by Ross Moody</Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default withTheme(Layout)

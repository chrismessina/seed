import React from 'react'
import PropTypes from 'prop-types'
import '../../static/normalize.css'
import Header from '../header'
import { withTheme } from 'styled-components'
import { Main } from './styled'
import { Footer } from '../footer'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Usage } from '../components/usage'
import { MyThemeProvider } from '../theme/theme-context'

const SecondPage = () => (
  <MyThemeProvider>
    <Layout>
      <SEO title="Usage" />
      <Usage />
    </Layout>
  </MyThemeProvider>
)

export default SecondPage

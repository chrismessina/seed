import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

import { MyThemeProvider } from '../theme/theme-context'
import { Hero } from '../components/hero'
import { Search } from '../components/search'
import { IconGrid } from '../components/icons'

import { icons } from 'seed-icons'

const IndexPage = () => (
    <MyThemeProvider>
        <Layout>
            <SEO title="Home" />
            <Hero />
            <Search placeholder={`Search icons...`} />
            <IconGrid icons={icons} />
        </Layout>
    </MyThemeProvider>
)

export default IndexPage

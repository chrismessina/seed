import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { parse } from 'serialize-query-params'
import { StringParam, useQueryParam } from 'use-query-params'
import { MyThemeProvider } from '../theme/theme-context'
import { Hero } from '../components/hero'
import { Search } from '../components/search'
import { IconGrid } from '../components/icons'
import useSearch from '../utils/useSearch'

function IndexPage({ location }) {
    const [query, setQuery] = useQueryParam(
        'query',
        StringParam,
        parse(location.search)
    )

    const results = useSearch(query || '')

    return (
        <MyThemeProvider>
            <Layout>
                <SEO title="Home" />
                <Hero />
                <Search
                    placeholder={`Search icons...`}
                    value={query || ''}
                    onChange={event => setQuery(event.target.value)}
                />
                {results.length > 0 ? (
                    <IconGrid icons={results} />
                ) : (
                    <p>no results</p>
                )}
            </Layout>
        </MyThemeProvider>
    )
}

export default IndexPage

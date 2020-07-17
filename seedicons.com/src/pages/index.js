import React from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
// import { parse } from 'serialize-query-params'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { MyThemeProvider } from '../theme/theme-context'
import { Hero } from '../components/hero'
import { Search } from '../components/search'
import { IconGrid } from '../components/icons'
import { Note } from '../components/note'
import useSearch from '../utils/useSearch'

function IndexPage() {
  const [query, setQuery] = useQueryParam('query', StringParam)
  const results = useSearch(query || '')

  return (
    <MyThemeProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Search
          value={query || ''}
          onChange={(event) => setQuery(event.target.value)}
          iconResults={results}
        />
        <Note />
        <IconGrid icons={results} />
      </Layout>
    </MyThemeProvider>
  )
}

export default IndexPage

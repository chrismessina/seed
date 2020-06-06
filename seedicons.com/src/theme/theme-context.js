import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

const ThemeToggleContext = React.createContext()
export const useTheme = () => React.useContext(ThemeToggleContext)

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState(lightTheme)

  const Wrapper = styled.div`
    background-color: ${themeState.colors.background};
    color: ${themeState.colors.text};
    font-family: ${themeState.fonts.sansSerif};
    min-height: 100vh;
  `

  const toggle = () => {
    const mode = themeState === lightTheme ? darkTheme : lightTheme
    setThemeState(mode)

    if (typeof window !== 'undefined') {
      if (mode === lightTheme) {
        localStorage.setItem('isDark', false)
      } else {
        localStorage.setItem('isDark', true)
      }
    }
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={themeState}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeProvider

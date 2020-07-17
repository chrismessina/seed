const lightTheme = {
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem',
  ],
  fonts: {
    sansSerif:
      'IBM Plex Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSizes: [
    '0.6rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.25rem',
    '2.5rem',
  ],
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  colors: {
    text: 'rgba(39, 45, 51, .75)',
    header: 'rgba(39, 45, 51, .9)',
    background: '#FFF',
    primary: '#3CD1A5',
    primaryHover: '#23bd90',
    primaryLight: 'rgba(60,209,165, .2)',
    stroke: '#DBE0EA',
    placeholder: '#757575',
    backgroundLight: '#f0f2f5',
    backgroundLightHover: 'blue',
    focus: '0 0 0 2px rgba(60, 209, 165, .5)',
  },
  radii: '8px',
  shadows: [
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  ],
  breakpoints: {
    small: '450px',
    medium: '820px',
    large: '1024px',
    xlarge: '1440px',
  },
}

const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    text: 'rgba(255, 255, 255, .75)',
    header: 'rgba(255, 255, 255, .95)',
    background: '#232323',
    primary: '#3CD1A5',
    stroke: '#444444',
    placeholder: '#F3F3F3',
    backgroundLight: '#171717',
  },
}

export { lightTheme, darkTheme }

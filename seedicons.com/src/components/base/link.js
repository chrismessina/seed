import styled from 'styled-components'

export const Link = styled.a`
  font-size: ${p => p.theme.fontSizes[2]};
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  margin: 0 ${p => p.theme.space[4]};

  &:hover {
    text-decoration: underline;
  }
`

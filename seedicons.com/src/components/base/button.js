import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${(p) => p.theme.space[3]} ${(p) => p.theme.space[4]};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.text};
  font-family: inherit;
  line-height: 0;
  text-align: center;
  border-radius: ${(p) => p.theme.radii};
  background: transparent;
  text-decoration: none;
  appearance: none;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.stroke};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    transition: all 0.1s;
  }
`

export default Button

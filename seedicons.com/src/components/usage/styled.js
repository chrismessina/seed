import styled from 'styled-components'

export const PageCont = styled.div`
  max-width: ${(p) => p.theme.breakpoints.medium};
  margin: 0 auto;
  padding: ${(p) => p.theme.space[4]} ${(p) => p.theme.space[5]};
`

export const Content = styled.div`
  font-style: normal;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0px;

  h1 {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${p=>p.theme.colors.header};
}

h2 {
  font-size: 24px;
  margin-top: 60px;
  margin-bottom: 0;
  letter-spacing: -0.03em;
  color: ${p=>p.theme.colors.header};
}

h3 {
  font-size: 18px;
  line-height: 28px;
  margin-top: 40px;
  margin-bottom: 0;
  letter-spacing: -0.03em;
  color: ${p=>p.theme.colors.header};
}

h4 {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  color: ${p=>p.theme.colors.header};
}

h6 {
  font-size: 10px;
  line-height: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-heather);
  margin: 0;
}

p {
  color: ${p=>p.theme.colors.text};
  font-size: 14px;
  line-height: 28px;
  margin-top: 10px;
  letter-spacing: 0;
}

p > a {
  transition: border-color 0.3s;
  text-decoration: none;
  color: ${p=>p.theme.colors.primary};
  border-bottom: 1px solid transparent;
}

p > a:hover {
  border-bottom-color: ${p=>p.theme.colors.primary};
}

code,
pre {
  font-family: 'Roboto Mono', monospace;
}

code {
  background-color: ${p=>p.theme.colors.stroke};
  color: #97a1b6;
  padding: 8px 12px;
  border-radius: 5px;
}

p > code {
  font-size: 13px;
  font-weight: 500;
  padding: 2px 5px;
  color: #f06332;
  background-color: #f5f7fa;
}

pre {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${p=>p.theme.colors.stroke};
}
`

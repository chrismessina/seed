import styled, { css } from 'styled-components'

const globalStyles = css`
  font-style: normal;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0px;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(p) => p.theme.colors.header};
  }
  h1 {
    font-size: 36px;
    line-height: 44px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: ${(p) => p.theme.colors.header};
  }
  h2 {
    font-size: 24px;
    margin-top: 60px;
  }
  h2,
  h3 {
    margin-bottom: 0;
    letter-spacing: -0.03em;
  }
  h3 {
    font-size: 18px;
    line-height: 28px;
    margin-top: 40px;
  }
  p {
    font-size: 15px;
    line-height: 28px;
    margin-top: 10px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.text};
  }
  p > a {
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;
    text-decoration: none;
    color: ${(p) => p.theme.colors.primary};
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  p > a:hover {
    border-bottom-color: var(--color-dodger-blue-light);
  }
  .hljs-comment {
        color: #998;
        font-style: italic;
    }
    .hljs-selector-tag {
        color: #333;
    }
    .hljs-number,
    .hljs-tag .hljs-attr {
        color: teal;
    }
    .hljs-string {
        color: #d14;
    }
    .hljs-attribute,
    .hljs-name,
    .hljs-tag {
        color: navy;
        font-weight: 400;
    }
    code,
    pre {
        font-family: Roboto Mono, monospace;
    }
    code {
        background-color: var(--color-bright-gray);
        color: #97a1b6;
        padding: 8px 12px;
        border-radius: 5px;
    }
    p code {
        font-size: 13px;
        font-weight: 500;
        padding: 2px 5px;
        color: #f06332;
    }
    .styled-code,
    p code {
        background-color: #f5f7fa;
    }
    .styled-code {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 16px 14px;
        width: 100%;
        border-radius: 5px;
        display: block;
        overflow-x: auto;
        margin: 18px 0;
    }
    .styled-code + .styled-code {
        margin-top: 12px;
    }
    pre {
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-pale-sky);
    }
`

export const PageCont = styled.div`
  max-width: ${(p) => p.theme.breakpoints.medium};
  margin: 0 auto;
  padding: ${(p) => p.theme.space[4]} ${(p) => p.theme.space[5]};
`

export const Content = styled.div`
  ${globalStyles}
`

import React, { FunctionComponent } from 'react';
import { css, Global } from '@emotion/react';
import NotoSansKrRegular from 'assets/fonts/NotoSansKR-Regular.woff2';
import NotoSansKrBold from 'assets/fonts/NotoSansKR-Bold.woff2';

const defualtStyle = css`
  /* reset */
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  button {
    margin: 0;
    padding: 0;
  }
  fieldset,
  img {
    border: 0 none;
  }
  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }
  input::-ms-clear {
    display: none;
  }
  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }

  body,
  th,
  td,
  input,
  select,
  textarea,
  button {
    font-size: 16px;
    line-height: 1.5;
    font-family: 'NotoSansKR', 'Apple SD Gothic Neo', '맑은 고딕',
      'Malgun Gothic', '돋움', dotum, sans-serif;
    color: #fff;
  } /* color값은 디자인가이드에 맞게사용 */
  a {
    color: inherit;
    text-decoration: none;
  }
  a:active,
  a:hover {
    text-decoration: underline;
  }
  a:active {
    background-color: transparent;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  /* common Style */
  button:focus:not(:focus-visible) {
    outline: 0;
  }

  /* layout */
  html,
  body {
    background-color: rgb(30, 30, 30);
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }
  hr {
    display: none;
  }

  /* fonts */
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: 400;
    src: local(※), url(${NotoSansKrRegular}) format('woff2');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: 600;
    src: local(※), url(${NotoSansKrBold}) format('woff2');
  }
`;

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defualtStyle} />;
};

export default GlobalStyle;

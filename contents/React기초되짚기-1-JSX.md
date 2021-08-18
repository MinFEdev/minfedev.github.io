---
date: '2021-08-16'
title: 'React 기초 되짚기 1 - JSX'
categories: ['React']
summary: '어느덧 새로운 회사에 적응한지 10개월이 된다
흔히들 웹퍼블리셔라고 말하는 마크업 개발자로 입사하게 되어 내가 원하던 데로 올해 1월 FE개발자로 직군 전환을 하였고 프로젝트를 진행하였지만 마음만 급해 소위 말하는 무지성 상태로 그때 그때 업무를 진행했던거 같아 아쉬움이 많이 든다. 업무를 진행하다보니 결국에는 기초, 기본이 중요해야 쓸만한 개발자가 될 수 있다는게 많이 느껴져, 지금이라도 기초 기본을 정리하면서 되짚어 보려고 한다.'
---

## React 기초 되짚기 - JSX

어느덧 새로운 회사에 적응한지 10개월이 되었다.  
흔히들 웹퍼블리셔라고 말하는 마크업 개발자로 입사하게 되어 내가 원하던 데로 올해 1월 FE개발자로 직군 전환을 하였고 프로젝트를 진행하였지만 마음만 급해 소위 말하는 무지성 상태로 그때 그때 업무를 진행했던거 같아 아쉬움이 많이 든다.  
업무를 진행하다보니 결국에는 기초, 기본이 중요해야 쓸만한 개발자가 될 수 있다는게 많이 느껴져,  
지금이라도 기초 기본을 빠르게 되짚어 보려고 한다.

### DOM 생성

시간을 되돌려 리액트를 사용하지 않고 바닐라 자바스크립만을 이용하여 DOM을 생성하던 때를 기억해보자. (기억폭행...?)

```js
const rootEl = document.querySelector('#root'); // 1. #root 요소를 컨테이너에 참조
const el = document.createElement('h1'); // 2. h1 요소를 생성
el.textContent = 'Hello World'; // 3. 2에서 생성한 h1요소에 텍스트컨텐츠 추가
el.classList.add('title');

rootEl.appendChild(el); // 2~3 에서 생성한 요소를 rootEl에 자식요소로 추가
```

React를 사용하여 DOM을 생성해보자.

```html
<!-- React 패키지 CDN 링크 -->
<script
  crossorigin
  src="https://unpkg.com/react@17/umd/react.development.js"
></script>
<!-- React DOM 패키지 CDN 링크 -->
<script
  crossorigin
  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
></script>
```

```js
// 1. #root 요소를 컨테이너에 참조
const rootEl = document.querySelector('#root');
// 2. h1 요소를 생성, 생성한 h1요소에 children 속성으로 컨텐츠 추가
const el = React.createElement(
  'h1',
  {
    className: 'title',
  },
  'Hello, World',
);
// 3. 2 에서 생성한 요소를 rootEl에 자식요소로 추가
ReactDOM.render(el, rootEl);
```

JSX를 통해 DOM을 생성해보자.

JSX란 : JavaScript eXtension의 약자로 React에서 HTML 요소를 표현할 때 사용한다.  
JSX를 이용하려면 자바스크립트의 컴파일러인 Babel을 이용해야한다. Babel을 JSX를 <code>React.createElement()</code>로 호출하여 컴파일 한다.

```js
const el = <h1 className="title">Hello, world</h1>;
```

편-안하다.

또한 JSX에서는 Javascript 코드도 작성이 가능해 개발이 좀 더 용이해진다.

```js
const text = 'Hello, world';
const titleClassName = 'title';

const el = <h1 className={titleClassName}>{text}</h1>;
```

---

---
date: '2021-08-17'
title: 'React 기초 되짚기 2 - 리렌더링'
categories: ['React']
summary: '기존 바닐라 자바스크립트에 비해 리액트가 가지는 강력한 장점 중 하나가 리렌더링에 대한 부분일 것이다. 바닐라 자바스크립트와 리액트의 리렌더링에 대한 차이를 알아보도록 하자.'
---

## React 기초 되짚기2 - 리렌더링

기존 바닐라 자바스크립트에 비해 리액트가 가지는 강력한 장점 중 하나가 리렌더링에 대한 부분일 것이다.
바닐라 자바스크립트와 리액트의 리렌더링에 대한 차이를 알아보도록 하자.

### 바닐라 자바스크립트의 리렌더링

1초마다 random한 숫자를 가진 버튼이 생기도록 해보자.

```js
const rootElement = document.getElementById('root');
function random() {
  const number = Math.floor(Math.random() * (10 - 1) + 1);

  const element = `<button>${number}</button>`;
  rootElement.innerHTML = element;
}
setInterval(random, 1000);
```

![자바스크립트 리렌더링](./img/vanilla-js-rerender.gif '자바스크립트 리렌더링')

위 이미지처럼 실제 변경되어지는 button 요소의 값 말고 button의 부모요소인 #root 요소도 리렌더링 되고 있다.
실제로 이렇게 변경되는 요소가 많아질 경우 브라우저가 repaint에 소요하는 자원이 많아저 성능이슈가 야기 될수도 있다.

### 리액트의 리렌더링

똑같은 코드를 리액트로 구현해보자.

```js
const rootElement = document.getElementById('root');
function random() {
  const number = Math.floor(Math.random() * (10 - 1) + 1);

  const element = <button>{number}</button>;
  ReactDOM.render(element, rootElement);
}

setInterval(random, 1000);
```

![리액트 리렌더링](./img/react-rerender.gif '리액트 리렌더링')

리액트로 구현한 코드의 결과를 보면 변경되는 button과 button의 값만 변경되어지고 있다.

### 리액트의 리렌더링 방법

우리가 만든 리액트의 엘리먼트는 불변객체(immutable)이다.
위 리액트의 리렌더링 코드에서 우리는 엘리먼트를 전달만 했을뿐 실제적인 변경 판단 및 화면에 그리는것은 리액트가 알아서 한게 된다.

리액트는 비교 알고리즘을 통해 두 개의 트리를 비교하게 되는데 두 엘리먼트의 root 엘리먼트부터 비교하게 된다.
이후의 동작은 두 개의 엘리먼트의 타입에 따라 달라진다.

#### 엘리먼트의 타입이 같은 경우

비교 되는 두 루트 엘리먼트의 <b>속성</b>을 확인하여 동일한 내역은 유지하고 변경된 속성들만 갱신한다.

```js
<button>{number}</button>
```

위 코드의 number값도 결국 children 속성(props)이므로 해당 내용이 변경 될 경우 해당 button과 값만 변경하게 된다.

#### 엘리먼트의 타입이 다른 경우

비교 되는 두 루트 엘리먼트의 타입이 다를 경우, 리액트는 이전 트리를 버리고 완전히 새로운 트리를 구축한다.

### 리액트의 key 속성

리액트는 리스트 형태의 돔을 비교 할 때 리스트를 순회하고 차이점이 있으면 변경을 하게 된다.

```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

위 코드를 보면 <code>`<li>first</li>`</code> <code>`<li>second</li>`</code> 까지 일치하는것을 확인하고 마지막으로 <code>`<li>third</li>`</code>를 트리에 추가한다.

```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

하지만 위코드와 같은 경우가 발생하면 리액트는 모든 자식요소를 변경하여 성능이슈가 야기 될 수 있다.

이러한 문제를 해결하기 위해 React는 `key` 속성을 지원한다.
자식 요소들이 key 속성을 가지고 있다면 리액트는 이 key를 통해 기존트리와 이후 트리의 자식들이 일치하는지 확인하여 효율적으로 변경하게 한다.

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

위 와 같이 key 속성을 부여하게 되면 `<li key="2015">Duke</li>`,`<li key="2016">Villanova</li>` 요소들은 위치만 이동하게 되고 `<li key="2014">Connecticut</li>` 요소가 추가된다.

❕ 주의: key 값은 id와 같은 식별자 데이터를 이용해 지정하도록 하자. 간혹 배열의 인덱스를 사용하는 경우가 있는데 이 경우에는 요소를 재배열 할 경우 비효율적으로 동작하게 될 확률이 높아진다.

---

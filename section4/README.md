## Next-Gen Javascript 와 Typescript

### 참고자료

- http://kangax.github.io/compat-table/es6/

### const 와 let

_const_

- 상수를 추가하는 데 활용

_let_

- 이전의 var 와 같은 느낌의 변수 선언 변경 가능
- 그럼 왜 var를 안쓰고 let을 쓰는 걸까?
  -> 변수를 사용할 수 있는 유효 범위가 다름 var는 함수 범위 그리고 전역적으로 등록 됨, let 은 블록 범위
- var 는 왜 놔둔 걸까?
  -> 이전 버전과의 호환성을 유지하기 위해서

### 화살표 함수(arrow function)

```typescript
const add = (a: number, b: number) => a + b
```

### 기본값 함수 매개변수

```typescript
const add = (a: number = 3, b: number = 4) => {
  return a + b
}
```

- 기본값 인수가 매개변수 뒤 쪽에 오도록 구성할 것

```typescript
const add = (a: number, b: number = 1) => {
  return a + b
}

add(5) // 6

const add = (a: number = 4, b: number) => {
  return a + b
}

add(5) // 5가 기본값 있는 곳과 겹침 b에 넣어주는 순서가 아님
```

### 스프레드 연산자(...)

```typescript
const hobbies = ['sports', 'cooking']
const activeHobbies = ['game', ...hobbies]

activehobbies.push(...hobbies)

const person = {
  name: 'SE',
  age: 3333,
}

const copiedPerson = { ...person }
```

### 나머지 매개변수

```typescript
const add = (...numbers: number[]) => {
  return numbers.reduce((prev, cur) => prev + cur, 0)
}

console.log(add(5, 10, 2, 3.2, 32, 4.2))
```

### 배열 및 객체 비구조화 할당

```typescript
const hobbies = ['sports', 'cooking']
const activeHobbies = ['game', ...hobbies]

const hobby1 = hobbies[0]
const hobby2 = hobbies[1]

const [h1, h2] = hobbies // 복제 되는 것이지 원본배열을 파괴하는 것이 아님

const person = {
  name: 'SE',
  age: 3333,
}

const { name: userName, age } = person

console.log(userName, age)
```

### 코드 컴파일 및 마무리 방법

- 효율적으로 target 버전을 설정하여 컴파일 하도록 합시다.
- 불필요하게 코드량이 늘어날 수 있다.
- 다만 호환해야하는 버전 및 상황에 맞게 유동적으로 해야한다.

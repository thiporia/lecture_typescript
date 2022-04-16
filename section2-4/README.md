## Enum

- 열거형
- 우리는 종종 대문자로 이루어진 상수를 보곤 하는데, 사실 어떤 방식으로 해도 상관으 없음

## 타입 알리어스 및 객체 타입

- 타입 별칭을 사용하여 타입을 직접 “생성”할 수 있습니다. 유니온 타입을 저장하는 것만 가능한 것이 아닙니다. 복잡할 수 있는 객체 타입에도 별칭을 붙일 수 있습니다.

예:

```typescript
type User = { name: string; age: number }
const u1: User = { name: 'Max', age: 30 } // this works!
```

타입 별칭을 사용하면 불필요한 반복을 피하고 타입을 중심에서 관리할 수 있습니다.

예를 들어, 다음 코드를 아래와 같이 단순화할 수 있습니다.

```typescript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name)
}
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age
}
```

단순화 후:

```typescript
type User = { name: string; age: number }
function greet(user: User) {
  console.log('Hi, I am ' + user.name)
}
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age
}
```

## Object type

**중첩된 개체 및 타입**

- 물론 객체 타입은 중첩 객체에 대해서도 생성할 수 있습니다.

다음과 같은 자바스크립트 객체가 있다고 가정해 봅시다:

```javscript
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```

이러한 객체의 타입은 아래와 같습니다.

```javascript
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

따라서 객체 타입 안에 객체 타입이 있다고 말할 수 있습니다.

## Class & Interface

### Module Content

- 모듈에서는 인터페이스가 무엇인지, 왜 사용하는지?
- 클래스와 상속의 개념을 살펴보고 인터페이스도 살펴본다.
- 자바스크립트로 어떻게 컴파일 하는지?, 이 기능을 왜 써야하는지에 대해 살펴본다.

### What's Object-oriented Programming (OOP) ?

> 클래스를 이해하기 전에 객체 지향 프로그래밍에 대해서 알아야 한다.
> 객체 지향 프로그래밍과 클래스의 개념은 코드에서 실제 개체(entity)로 작업한다는 점
> 객체를 실제 객체와 흡사하게 만드는데 이는 추론을 쉽게 하기 위함임

> 애플리케이션을 어떻게 구축할지, 논리적으로 어떻게 나눌 수 있을지를 정하는 한 가지 방법 중에 하나임

> 이미 JS, TS 의 경우는 개체를 설계하기 위한 속성과 메소드를 포함하는 복잡한 데이터 구조를 가진 객체가 있기 때문에 효율적으로 구현이 가능하다.

- Classes & Instances 의 개념에 대해 살펴보자

| Objects              | Classes                |
| -------------------- | ---------------------- |
| 클래스 내의 인스턴스 | 클래스는 객체의 청사진 |

- 객체는 코드로 작업을 수행하면서 활용할 수 있는 구체적인 요소들 데이터를 저장하고 메소드를 실행하기 위해 메소드를 저장하는데 사용하는 데이터 구조
- 클래스를 사용하여 객체의 형태, 포함해야 하는 데이터, 클래스를 기반으로 객체를 쉽게 만들 수 있으려면 어떤 메소드가 필요한지 정의할 수 있기 때문
- 클래스를 기반으로 하면 동일한 구조, 동일한 클래스를 기반으로 하는 동일한 메소드로 여러 객체를 빠르게 복제 가능
- 클래스는 객체의 생성 속도를 높여주며 객체 리터럴 표기법을 사용하는 것에 대한 대안으로 활용 가능
- 예를 들어 사람을 객체로 구성한다면 이름과 나이 등 다른 것이 많을 텐데 일반적인 구조(클래스)는 동일하다.

### 참고자료

- [MDN-public field](https://developer.mozilla.org/en-US/docs/web/javascript/reference/classes/public_class_fields)
- [MDN-prototype & Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN-classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [TS Info](https://www.typescriptlang.org/docs/handbook/2/objects.html)

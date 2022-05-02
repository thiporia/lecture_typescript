{
  // interface
  // 객체의 구조를 설명하는 것 객체의 형태를 설명하는데 활용
  // 첫글자 대문자 관례
  interface Person {
    name: string // 필드의 정의를 추가
    // name: string = 'sseon' // An interface property cannot have an initializer.
    age: number
    greet(phrase: string): void
  }

  // 1. 객체의 타입을 활용하는데 사용
  let user1: Person // 타입으로 활용

  user1 = { name: 'ss', age: 333, greet: (phrase) => console.log(phrase) }

  user1.greet('Hi there')
}
{
  // 클래스와 인터페이스 사용하기
  // interface Person {
  //   name: string
  //   age: number
  //   greet(phrase: string): void
  // }
  // type Person = {
  //   name: string
  //   age: number
  //   greet(phrase: string): void
  // }

  // type 과 뭐가 다를까?
  // interface 는 객체의 구조를 설명하기 위해서만 사용한다는 것
  // 클래스가 인터페이스를 이행하고 준수해야하는 약속 처럼 활용
  //

  // 인터페이스는 주로 구체적인 구현보다는 서로 다른 클래스 간의 기능을 공유하기 위해 사용된다.
  // 구조와 클래스가 가져야 할 기능을 정의하는 역할
  // 추상 클래스와 비슷하다고 보이지만, 실제로 인터페이스는 기능에 집중하는 반면 추상클래스는 구체적 구현 부분을 혼합하여 사용하는 것이 중점
  interface Greetable {
    name: string
    greet(phrase: string): void
  }

  // 상속과는 다르게 인터페이스는 여러개를 가질 수 있다.
  class Person implements Greetable {
    name: string
    age = 30 // implements 에서는 존재해도 무방
    constructor(n: string) {
      this.name = n
    }

    greet(phrase: string) {
      console.log(phrase + ' ' + this.name)
    }
  }

  let user2: Greetable
  user2 = {
    name: 'sseon',
    // age: 33, // Type '{ name: string; age: number; greet(phrase: string): void; }' is not assignable to type 'Greetable'. Object literal may only specify known properties, and 'age' does not exist in type 'Greetable'.
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name)
    },
  }

  let user3: Person | Greetable // 둘 다 가능 Person 자체도 결국은 greetable 의 구현
  user3 = new Person('sseon')
  user3.greet('Hi there - I am')
  console.log(user3)
  /*
  Person {
    age: 30
    name: "sseon"
  }
  */

  // 인터페이스를 어떤 상수나 변수의 타입으로 사용하여 인터페이스 타입을 기반으로 하는 다른 타입의 다른 클래스를 저장할 수 있다. 이를 구현하고 있기 때문

  // 왜 인터페이스인가?
  //클래스가 greet 메소드를 지니고 있고, 다른 클래스도 이를 가지고 있는지 확인하고자 하는 경우
}
{
  // 읽기전용 인터페이스 속성
  interface Greetable {
    // 속성이 한 번만 설정되어야 하는 경우는 아래와 같이 readonly 를 설정하여 초기화 후 읽기전용으로 활용
    readonly name: string // public, private 등은 안됨.
    greet(phrase: string): void
  }

  // type Greetable = {
  //   readonly name: string // public, private 등은 안됨.
  //   greet(phrase: string): void
  // }

  class Person implements Greetable {
    name: string
    age = 30 // implements 에서는 존재해도 무방
    constructor(n: string) {
      this.name = n
    }

    greet(phrase: string) {
      console.log(phrase + ' ' + this.name)
    }
  }

  const user1: Greetable = new Person('Sseon')
  // user1.name = 'hi' // Cannot assign to 'name' because it is a read-only property.
}
{
  // 인터페이스 확장하기
  // 특정 객체들이 하는 역할이 달라 name 만 필요한 경우 greet 만 필요한 경우처럼 다 다를 수 있기 때문
  interface Named {
    readonly name: string
  }

  // 둘 이상 확장 쌉가능
  interface Greetable extends Named {
    greet(phrase: string): void
  }

  class Person implements Greetable {
    name: string
    age = 30 // implements 에서는 존재해도 무방
    constructor(n: string) {
      this.name = n
    }

    greet(phrase: string) {
      console.log(phrase + ' ' + this.name)
    }
  }
}
{
  // 함수 타입으로서의 인터페이스
  // type AddFn = (a: number, b: number) => number
  interface AddFn {
    (a: number, b: number): number
  }

  let add: AddFn
  add = (n1: number, n2: number) => {
    return n1 + n2
  }
}
{
  // 선택적 매개변수 & 속성
  interface Named {
    readonly name?: string
    outputName?: string // optional variable
  }

  interface Greetable extends Named {
    greet(phrase: string): void
    newGreet?(phrase: string): void // optional method
  }

  class Person implements Greetable {
    name?: string
    outputName?: string
    age = 30 // implements 에서는 존재해도 무방
    constructor(n?: string) {
      if (n) {
        this.name = n
        this.outputName = n
      }
    }

    greet(phrase: string) {
      if (this.name) {
        console.log(phrase + ' ' + this.name)
      } else {
        console.log('HI!')
      }
    }
  }

  const user1 = new Person()
  user1.greet('Hi there!')
}
{
  // 자바스크립트로 인터페이스 컴파일
  // app.js 컴파일 파일을 보면 interface 에 대한내용은 하나도 없음
  // 인터페이스에 대한 변환은 이루어지지 않음. 자바스크립트에는 이런 기능이 없기 때문
  // TS 전용 기능
  interface Named {
    readonly name?: string
    outputName?: string // optional variable
  }
}

const button = document.querySelector('button')!

button.addEventListener('click', () => {
  console.log('Clicked!!')
})

// 타입스크립트가 무조건 브라우저에서 동작하는 것을 서술하는 것은 아니라는 것을 인지할 필요가 있음
// typescript로 nodejs 관련 로직을 작성할 수 있는데, 이렇게 했을 경우 컴파일이 정상적으로 되는 이유는 무엇일까?
// lib 옵션 때문이다. dom으로 작업을 수행하는 항목들, 즉 기본 객체, 기능, 타입스크립트 노드를 지정하게 해주는 옵션
// lib 이 미설정인 경우 일부 기본설정이 적용 됨 target 과 관련된 일반적인 환경에 영향을 받음

let logged

function sendAnalytics(data: string) {
  console.log(data)
  logged = true
  console.log(logged)
}

sendAnalytics('The data')

/**
 * 위 를 컴파일 시 'data' implicitly has an 'any' type 에러가 발생 암묵적으로 연결되어 있기 때문인데, 이 경우
 * noImplicitAny 옵션과 연관 있음 매개변수의 값을 명확하게 하는 것을 요구하는 옵션
 * 함수의 경우 매개변수가 문제 되는 이유는 함수가 먼저 생성되기 때문에 이 과정에서 저 data 라고 넘어오는 값에 대한 정의를 할 수 있는 방법이 없다.
 * 변수의 경우 타입의 할당되는 값을 추적하여 타입 추론을 할 수 있기 때문에 에러가 발생하지 않음
 * 타입스크립트는 적어도 호출하는 코드가 현재 지정된 타입과 함께 작동할 수 있는지 확인하는 과정이 있기 때문에 이런 에러가 발생
 *
 * strictNullCheck 의 경우는 !를 통해서 필히 존재한다고 null 이 아닐 것이라고 강조하지 않아도 에러가 발생하지 않도록 하는 경우 사용한다.
 * !를 사용하는 것은 특정한 값이 존재하거나 이 연산은 필히 null이 아닐 것임을 보장하는 방법 중 하나
 * ! 대신에 존재여부를 if 등으로 처리하는 것도 좋은 방법
 *
 * strictFunctionTypes
 * strictBindCallApply bind, call, apply 를 호출하는 과정에서 매개변수를 엄격하게 판단할지 말지를 확인
 * alwaysStrict 의 경우는 컴파일 된 자바스크립트 항목 상단에 use strict 를 포함할지 결정
 */

/**
 * "noUnusedLocals": true -> 지역적으로 존재하는 변수가 활용되지 않을 때(전역적은 쌉가능)
 * "noUnusedParameters": true -> 매개변수가 활용되지 않을 때
 * "noImplicitReturns": true -> 모든 분기에 대해서 return 이 정의되지 않았을 때
 */

/**
 * 참고문서
 * tsconfig 문서
 * https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * 컴파일러 구성 문서
 * https://www.typescriptlang.org/docs/handbook/compiler-options.html
 * VS Code TS 디버깅
 * https://code.visualstudio.com/docs/typescript/typescript-debugging
 */

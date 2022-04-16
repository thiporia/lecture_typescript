// 반환타입은 기본적으로 타입추론을 함
// 리턴이 타입추론이 가능하면 굳이 선언하지 않음
function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  // 아무것도 반환하지 않는 경우 void <-> 일반적으로 undefined와 다름.
  console.log('Result: ' + num)
}

function printResult(num: number): undefined {
  console.log('Result: ' + num)
  return
}

console.log(printResult(add(5, 12))) // undefined

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // cb를 여기서 정의하면 좋은 점. 함수 내에 callback 을 전달하면 타입스크립트는 해당 결과가 number가 될 것이라고 추론할 수 있으므로
  const result = n1 + n2
  cb(result)
}

printResult(add(5, 12))

let someValue: undefined // undefined 는 타입이다.

// let combineValues: Function // 함수를 타입으로 정의 가능
let combineValues: (a: number, b: number) => number // 함수를 타입으로 정의 가능 시그니처와 리턴을 명확하게 정의하고 싶을 때
// combineValues = printResult // 에러 발생 의도와 다르게 동작할 수 있음
// combineValues = 5 // any 이기 때문에 가능;;
combineValues = add

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
  // (result, 2) => {} 에러
  // 여기서 result 로 편하게 활용 가능
  console.log(result)
})

// 이 코드는 컴파일을 통과할 수 있나요?
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' })
}

sendRequest('Send this!', (response) => {
  console.log(response)
  return true
})
// 강의에서 배웠듯이 콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있습니다.
// undefined 라고 필히 명시 하지 않는 한 반환값을 정의할 수 있음

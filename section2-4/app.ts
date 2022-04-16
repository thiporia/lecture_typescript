let userInput: unknown // any 와는 다름 확실히 알 수 있는 경우는 Union 을 쓰자
let userName: string

userInput = 5
userInput = 'thiporia'
// userName = userInput //'unknown' 형식은 'string' 형식에 할당할 수 없습니다 정상적으로 값을 할당 하여도 타입이 정상적으로 인식 되지 않음
// any 인 경우는 에러가 발생하지 않음

if (typeof userInput === 'string') {
  userName = userInput // unknown 을 활용하는 경우 무조건 명시적으로 타입 검사를 강요함
}

function generateError(message: string, code: number): never {
  // never의 경우는 함수가 값을 절대 반환할 일이 없다. void 와는 다름
  throw { message: message, errorCode: code }
}

const result = generateError('An error occurred!', 500)

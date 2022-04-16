// union
// | pipe 유니언 타입을 쓸 경우 타입 체크를 해줘야하는 경우가 존재
type Combinable = number | string // not reserved
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor, // 특정 목적으로 활용
) {
  let result
  // 값이 결합되기전에 동작
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
  // if (resultConversion === 'as-number') {
  //   return +result
  // } else {
  //   return result.toString()
  // }
}

const combineAges = combine(30, 26, 'as-number')
console.log(combineAges)

const combineStringAges = combine('30', '26', 'as-number')
console.log(combineStringAges)

const combineNames = combine('thi', 'poria', 'as-text')
console.log(combineNames)

// 리터럴 - 정확한 값을 가지는 값
// const num = 2.8  // const num 2.8 과 같은 경우

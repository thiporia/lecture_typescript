console.log('Your code goes here...!!')

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!')
  // }
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const number1 = 5 // 5.0 같음
// const number1 = '5'
const number2 = 2.8

const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, false, resultPhrase)
console.log(result) // '52.8'

add(number1, number2, printResult, resultPhrase)

// app.ts:11:20 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 11 const result = add(number1, number2)

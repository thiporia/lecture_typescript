const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // 딱 두개만 있는 특수한 요소
} = {
  name: 'thiporia',
  age: 99,
  hobbies: ['game', 'lol'], // (property) hobbies: string[] 타입추론
  role: [2, 'author'],
}

person.role.push('admin') // 잘못된 값을 할당하지는 않음
// person.role[1] = 10

person.role = [0, 'admin']

let favoriteActivities: string[] // any[] -> any 는 유용하지만 필요한 기능을 제대로 활용 못할 수 있음
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map(...))  ERROR!
}

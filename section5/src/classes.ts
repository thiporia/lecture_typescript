{
  // 클래스임을 명시하기 위해 첫글자는 대문자
  class Department {
    name: string // key-value 가 아닌 key 만 정의

    // 클래스 생성 예약어
    constructor(n: string) {
      this.name = n
    }

    describe(this: Department) {
      // this 는 일반적으로 생성된 클래스의 구체적인 인스턴스를 참조
      console.log('Department: ' + this.name)
    }
  }

  const develop = new Department('develop')
  console.log(develop)

  develop.describe()

  // 리터럴로 생성하여 정의 된 특정 클래스를 기반으로 하지 않고, 더미 객체로 생성된 것
  // const developCopy = { describe: develop.describe }
  // developCopy.describe() // Department: undefined
  // this.name 에 접근하면 에러가 발생한다. this가 이름 속성이 존재하지 않는 객체인 developCopy를 접근하기 때문

  const devCopy = { name: 'hihi', describe: develop.describe }
  devCopy.describe() // Department: hihi
  // .으로 참조하는 devCopy는 name 이라는 속성이 존재하기 때문
}

{
  class Department {
    // private id: string;
    // private name: string // 외부 접근 가능
    private employees: string[] = [] // 외부 접근 불가능

    // constructor(id: string, name: string) {
    //   this.id = id
    //   this.name = name
    // }

    // 약식 초기화
    // public 까지 붙여야 하는 이유는 매개변수 쪽에 적힌 것을 기반으로 동일한 이름의 속성을 만들고 싶다고 타입스크립트에게 제공하는 것이기 때문
    // 이 경우는 선언 및 초기화가 동시에 이루어지는 경우
    constructor(private id: string, public name: string) {}

    describe(this: Department) {
      console.log('Department: ' + this.name + ', ' + this.id)
    }

    addEmployee(employee: string) {
      // validation check
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }
  }

  const develop = new Department('0', 'develop')
  develop.addEmployee('lh')
  develop.addEmployee('jh')
  develop.addEmployee('th')

  // develop.name = 'accounting'
  // console.log(develop.describe())

  // develop.employees[2] = 'sy'  // Property 'employees' is private and only accessible within class 'Department'.

  develop.printEmployeeInformation()
}
{
  class Department {
    private employees: string[] = [] // 외부 접근 불가능

    // 초기화 후 변경될 이유가 전혀 없는 항목의 경우 readonly를 설정
    // 초기화 중에만 활용할 수 있음
    // 타입의 안정성 및 의도를 명확하게 할 수 있음
    constructor(private readonly id: string, public name: string) {}

    // es5 로 컴파일 해보면 메소드는 프로토타입에 정의가 됨
    describe(this: Department) {
      console.log('Department: ' + this.name + ', ' + this.id)
    }

    addEmployee(employee: string) {
      // this.id = 'aaa' // Cannot assign to 'id' because it is a read-only property.
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }
  }
}
{
  // 기본속성말고도 고유한 각자만의 속성을 지녀야 할 경우 상속을 쓸 수 있다.
  class Department {
    protected employees: string[] = [] // 상속받는 클래스에 대해서는 접근가능

    // 초기화 후 변경될 이유가 전혀 없는 항목의 경우 readonly를 설정
    // 초기화 중에만 활용할 수 있음
    // 타입의 안정성 및 의도를 명확하게 할 수 있음
    constructor(private readonly id: string, public name: string) {}

    // es5 로 컴파일 해보면 메소드는 프로토타입에 정의가 됨
    describe(this: Department) {
      console.log('Department: ' + this.name + ', ' + this.id)
    }

    addEmployee(employee: string) {
      // this.id = 'aaa' // Cannot assign to 'id' because it is a read-only property.
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }
  }

  // extends 로 단 하나의 클래스 상속 가능
  class ITDepartment extends Department {
    // 생성자를 생성하지 않는 한은 하위 클래스에 대한 기본 클래스 생성자를 따르므로 에러가 크게 발생하지 않음
    constructor(id: string, public admins: string[]) {
      super(id, 'IT') // super 는 기본클래스의 생성자를 호출
      // 기본적으로 this를 여기서 활용하려면 먼저 super 를 선행하고 진행해야한다.
      // 다만 위와같이 약식초기화로 진행한 경우는 자동으로 순서에 맞게 this 할당을 진행함
      /**
     * es5로 컴파일 했을 경우 순서 확인가능
     * function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') // super 는 기본클래스의 생성자를 호출
         || this;
        _this.admins = admins;
        return _this;
     */
    }

    // addAdmin
  }

  const it = new ITDepartment('D0', ['jw'])
  it.addEmployee('yy')
  it.addEmployee('js')
  it.addEmployee('dy')

  it.describe()
  it.name = 'NEW NAME'
  it.printEmployeeInformation()

  console.log(it)

  class HRDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'HR')
    }

    addEmployee(name: string) {
      if (name === 'sy') {
        return
      }

      this.employees.push(name) // Property 'employees' is private and only accessible within class 'Department'.
    }

    addReports(text: string) {
      this.reports.push(text)
    }

    printReports() {
      console.log(this.reports)
    }
  }

  const hr = new HRDepartment('H0', ['paystub', 'vacation_docs'])
  hr.describe()
  hr.printReports()

  hr.addEmployee('sy')
  hr.addEmployee('dh')
  console.log(hr)
}
{
  class Department {
    protected employees: string[] = [] // 외부 접근 불가능
    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
      console.log('Department: ' + this.name + ', ' + this.id)
    }

    addEmployee(employee: string) {
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }
  }

  // getter/setter
  class HRDepartment extends Department {
    private lastReport: string
    constructor(id: string, private reports: string[]) {
      super(id, 'HR')
      this.lastReport = reports[0]
    }

    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport
      }
      throw new Error('No report found.')
    }

    set mostRecentReport(report: string) {
      if (!report) {
        throw new Error('Please pass in a valid Report!')
      }
      this.addReports(report)
    }

    addEmployee(name: string) {
      if (name === 'sy') {
        return
      }

      this.employees.push(name) // Property 'employees' is private and only accessible within class 'Department'.
    }

    addReports(text: string) {
      this.reports.push(text)
      this.lastReport = text
    }

    printReports() {
      console.log(this.reports)
    }
  }

  const hr = new HRDepartment('H0', ['paystub'])
  console.log(hr.mostRecentReport)
  hr.mostRecentReport = 'dummy report'

  console.log(hr)
}
{
  // static 논리적으로 그룹화하거나 클래스에 매핑하려는 유틸리티함수등을 위해서 제공 됨
  // 클래스에 저장하고자 하는 전역 상수 등
  // Math.PI , Math.pow // new Math 가 필요하지 않음
  // Math 는 그룹화 매커니즘의 네임스페이스와 같은 역할만 수행
  class Department {
    // 정적으로 설정할 때의 주의점은 정적이 아닌 부분에서는 접근할 수가 없음
    static fiscalYear = 2020

    protected employees: string[] = [] // 외부 접근 불가능
    constructor(private readonly id: string, public name: string) {}

    // this 는 클래스를 기반으로 생성된 인스턴스를 참조하기 때문에 정적 속성 및 메소드에 대해서는 접근할 수가 없는 것이다.
    // 정적 속성은 인스턴스에서 유효하지 않다. 정적 속성과 정적 메소드의 전체적인 개념은 인스턴스와 분리되어 있기 때문
    describe(this: Department) {
      console.log('Department: ' + this.name + ', ' + this.id)
      // console.log(this.fiscalYear) //Property 'fiscalYear' does not exist on type 'Department'. Did you mean to access the static member 'Department.fiscalYear' instead?
      console.log(Department.fiscalYear) // 클래스 네임을 활용하면 가능
    }

    addEmployee(employee: string) {
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }

    static createEmployee(name: string) {
      return { name }
    }
  }

  const emp1 = Department.createEmployee('sseon')
  console.log(emp1)
  console.log(Department.fiscalYear)
}
{
  // 추상클래스(abstract class)
  // 메소드가 항상 존재하므로 이따금 해당 메소드를 재정의하는 옵션을 입력하고 싶지 않은 경우도 있다.
  // 대신 특정 클래스를 사용하여 작업하거나 특정 클래스를 확장시키는 개발자들이 특정 메소드를 구현하거나 재정의하도록 해야하는 경우가 있다.
  abstract class Department {
    protected employees: string[] = [] // 외부 접근 불가능
    constructor(private readonly id: string, public name: string) {}

    // Abstract methods can only appear within an abstract class.
    // Method 'describe' cannot have an implementation because it is marked abstract.
    // 메소드 형태와 구조만 정의할 뿐 그외에는 정의하지 않은 상속받는 니가 해라.
    abstract describe(this: Department): void
    // abstract describe(this: Department) {
    //   // console.log('Department: ' + this.name + ', ' + this.id)
    // }

    addEmployee(employee: string) {
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }

    static createEmployee(name: string) {
      return { name }
    }
  }

  // 아래와 같이 선언할 경우 describe 를 구현하라고 경고가 뜸
  // Non-abstract class 'ITDepartment' does not implement inherited abstract member 'describe' from class 'Department'.
  // class ITDepartment extends Department {}

  // 추상클래스는 일부 상위 클래스를 기반으로 하는 모든 클래스가 일부 공통 메소드 또는 속성을 공유하도록 하려는 경우가 활용
  // 다만 이 경우 추상 클래스 자체를 인스턴스화할 수 는 없다.
  // 상속 전용 클래스
  class ITDepartment extends Department {
    describe(this: ITDepartment) {
      console.log('Department : ' + this.name)
    }
  }
}
{
  // 싱글톤(singleton) & 개인생성자(private constructor)
  // 개인생성자는 왜 필요할까?
  // 객체 지향에는 싱글톤 패턴이라는게 있다. 이는 특정 클래스의 인스턴스를 정확히 하나만 갖도록 하려고 만든다.
  // 이 패턴은 정적 메소드나 속성을 사용할 수 없거나 사용하지 않고자 하는 동시에 클래스를 기반으로 여러 객체를 만들 수는 없지만,
  // 항상 클래스를 기반으로 정확히 하나의 객체만 가질 수 있도록 하고자 하는 경우 유용
  // 기본속성말고도 고유한 각자만의 속성을 지녀야 할 경우 상속을 쓸 수 있다.
  class Department {
    protected employees: string[] = []
    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
      console.log('Department: ' + this.name + ', ' + this.id)
    }

    addEmployee(employee: string) {
      this.employees.push(employee)
    }

    printEmployeeInformation() {
      console.log(this.employees.length)
      console.log(this.employees)
    }
  }

  class HRDepartment extends Department {
    private static instance: HRDepartment
    private constructor(id: string, private reports: string[]) {
      super(id, 'HR')
    }

    static getInstance() {
      if (this.instance) {
        return this.instance
      }
      this.instance = new HRDepartment('H0', [])
      return this.instance
    }
  }

  const ins1 = HRDepartment.getInstance()
  const ins2 = HRDepartment.getInstance()
  console.log(ins1, ins2)
  console.log(ins1 === ins2)
}

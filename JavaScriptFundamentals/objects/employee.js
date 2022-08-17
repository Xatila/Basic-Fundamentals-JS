function employeesList(array) {
  class Employee {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }
    print() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
      );
    }
  }
  let employees = [];
  for (let i = 0; i < array.length; i++) {
    let employeName = array[i];
    let employeNum = array[i].length;
    employees.push(new Employee(employeName, employeNum));
  }
  for (const key of employees) {
    key.print();
  }
}
employeesList([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

//employeesList(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);

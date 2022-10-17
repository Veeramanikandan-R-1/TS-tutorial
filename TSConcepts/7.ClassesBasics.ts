class Department {
  // private name: string; //field
  // private makes employees doesn't accessible outside the class others are public by default
  // private employees: string[] = [];
  // to modify the private val in child class protected var is used
  protected employees: string[] = [];

  // methods
  // can mention the private/public access modifiers inside constructor itself
  // need not to declare variable twice
  // readonly in ts not in js allows not to modify
  constructor(public readonly id: string, private name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Dept ${this.id} name: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const development = new Department("A1", "Development");

development.describe();
development.addEmployee("mani");
development.printEmployeeInformation();
console.log(development);
const accountingCopy = { name: "Dummy", describe: development.describe };
// this refers to the object responsible for calling so following will return undefined
// accountingCopy.describe();

// Inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins; //new this should be called only after super
  }
}
const ITDept = new ITDepartment("A2", ["mani"]);
ITDept.addEmployee("Hanish");
ITDept.printEmployeeInformation();
console.log(ITDept);

class AccountingDepartment extends Department {
  static newYear = 1010;
  private lastReport: string;

  // getter function to access private var
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No new error found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("invalid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
    // AccountingDepartment.newYear;//cannot be accessed using this
  }

  // OVERRIDING PROPERTIES
  // can modify the employee since it's not private
  addEmployee(employee: string) {
    if (employee !== "mani") {
      this.employees.push(employee);
    }
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReport() {
    console.log(this.reports);
  }

  // static methods
  static createEmployee(name: string) {
    return { name };
  }
}

const accDept = new AccountingDepartment("A3", []);

accDept.addReport("R1");
// accessing setter method
accDept.mostRecentReport = "new";
console.log(accDept.mostRecentReport);
accDept.printReport();

accDept.addEmployee("muthu");
accDept.printEmployeeInformation();

// accessing static methods
const Employee1 = AccountingDepartment.createEmployee("Mani");
console.log({ Employee1 }, AccountingDepartment.newYear);

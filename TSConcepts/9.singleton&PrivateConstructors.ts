abstract class Department {
  // private name: string; //field
  // private makes employees doesn't accessible outside the class others are public by default
  // private employees: string[] = [];
  // to modify the private val in child class protected var is used
  protected employees: string[] = [];

  // methods
  // can mention the private/public access modifiers inside constructor itself
  // need not to declare variable twice
  // readonly in ts not in js allows not to modify
  constructor(protected readonly id: string, private name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void; // abstract method cannot have implementation

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// singleton and private constructors
// doesn't allow to create mulitple instance of the same class
class AccountingDepartment extends Department {
  static newYear = 1010;
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
    // AccountingDepartment.newYear;//cannot be accessed using this
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("A4", []);
    return this.instance;
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

  // method OVERRIDING
  describe() {
    console.log("Department Account", this.id);
  }
}

// const accDept = new AccountingDepartment("A3", []);
// since private constructor class cannot be accessed directly
const accDept = AccountingDepartment.getInstance();
const accDept1 = AccountingDepartment.getInstance(); //will get same instance of accDept

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

accDept.describe();

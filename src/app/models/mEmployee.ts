export interface Employee{
  [key: string]: any,
  id: number,
  fname: string,
  lname: string,
  email: string,
  age: number
}

export const employees: Employee[] = [
  // {
  //   id: 1,
  //   fname: 'Alice',
  //   lname: 'Smith',
  //   email: 'alice.smith@example.com',
  //   age: 30,
  // },
];
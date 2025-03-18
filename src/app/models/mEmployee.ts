export interface Employee{
  id: number,
  fname: string,
  lname: string,
  email: string,
  age: number
}

export const employees: Employee[] = [
  {
    id: 1,
    fname: 'Alice',
    lname: 'Smith',
    email: 'alice.smith@example.com',
    age: 30,
  },
  {
    id: 2,
    fname: 'Bob',
    lname: 'Johnson',
    email: 'bob.johnson@example.com',
    age: 40,
  },
  {
    id: 3,
    fname: 'Charlie',
    lname: 'Brown',
    email: 'charlie.brown@example.com',
    age: 25,
  },
  {
    id: 4,
    fname: 'Diana',
    lname: 'Ross',
    email: 'diana.ross@example.com',
    age: 35,
  },
  {
    id: 5,
    fname: 'Evan',
    lname: 'Taylor',
    email: 'evan.taylor@example.com',
    age: 28,
  },
];
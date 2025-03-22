import { createReducer, on } from "@ngrx/store";
import { Employee } from "../../models/mEmployee";
import { EmployeeActions } from "./employee.actions";

export interface EmployeeState{
  employees: Employee[]
}

export const initialEmployeeState: EmployeeState = {
  employees: []
}

export const employeeReducer = createReducer(
  initialEmployeeState,
  on(EmployeeActions.addEmployee, (_state, {employeeDetails}) => {
    console.log(employeeDetails)
    return {
      ..._state,
      employees: [..._state.employees, employeeDetails]
    }
  })
)

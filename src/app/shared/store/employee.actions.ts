import { createActionGroup, props } from "@ngrx/store";
import { Employee } from "../../models/mEmployee";

export const EmployeeActions = createActionGroup({
  source: 'Employee Manage',
  events: {
    'Add Employee': props<{employeeDetails: Employee}>()
  }
})
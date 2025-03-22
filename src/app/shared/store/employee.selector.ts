import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer'; // Import your state interface

// 1. Create a Feature Selector
export const selectEmployeeFeature = createFeatureSelector<EmployeeState>('employees');

// 2. Create Selectors
export const selectAllEmployees = createSelector(
  selectEmployeeFeature,
  (state: EmployeeState) => state.employees
);
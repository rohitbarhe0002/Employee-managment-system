// src/hooks/useEmployeeApi.js
import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export function useEmployeeApi() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the list of employees


  // Add an employee

  async function fetchEmployees() {
    try {
      console.log("callled fetch")
      const response = await fetch(`${API_BASE_URL}/Get-Employee`);
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }
  useEffect(() => {
    fetchEmployees();
  }, []);

  async function addEmployee(employeeData) {
    try {
      const response = await fetch(`${API_BASE_URL}/Add-Employee/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });
      // Handle response as needed
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }

  // Update an employee by ID
  async function updateEmployee(id, updatedData) {
    try {
      const response = await fetch(`${API_BASE_URL}/update-Employee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      // Handle response as needed
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  }

// get single  employee
async function getEmployeeById (id, updatedData) {
  try {
    const response = await fetch(`${API_BASE_URL}/update-Employee/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    // Handle response as needed
  } catch (error) {
    console.error('Error updating employee:', error);
  }
}

  // Delete an employee by ID
  async function deleteEmployee(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/delete-Employee/${id}`, {
        method: 'DELETE',
      });
      // Handle response as needed
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }

  return {
    employees,
    loading,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    fetchEmployees,
  };
}

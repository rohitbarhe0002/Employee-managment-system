  // src/components/Employee/EmployeeForm.js
  import React, { useEffect, useState } from 'react';
  import { useEmployeeApi } from '../../hooks/useEmployeeApi';

  export const  EmployeeForm = ({id}) => {



    const { addEmployee, deleteEmployee , fetchEmployees , updateEmployee } = useEmployeeApi();
    const [formData, setFormData] = useState({
      FirstName: '',
      StartDate: new Date().toLocaleDateString(),
      EndDate:new Date().toLocaleDateString(),
      CurrentSalary:'',
      Description: '',
      DOB: new Date().toLocaleDateString(),
    });

    useEffect(()=>{
  
          },[])


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleEditEmployee = async (id) => {
      try {
        await updateEmployee(id);
        // Handle success or update the employee list if needed
        await fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    };

    const handleAddEmployee = async (e) => {
      e.preventDefault();
      console.log(formData,"======>form data")
      try {
        await addEmployee(formData);
        await fetchEmployees();
        // Reset the form after adding an employee
        setFormData({
          FirstName: '',
          StartDate: '',
          Description: '',
          EndDate: '',
          CurrentSalary:'',
          DOB: '',
        });
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    };

    const handleDeleteEmployee = async (id) => {
      try {
        await deleteEmployee(id);
        // Handle success or update the employee list if needed
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    };

    return (
      <div>
        <h2>Add Employee</h2>
        <form onSubmit={handleAddEmployee}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="StartDate"
              value={formData.StartDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="EndDate"
              value={formData.EndDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Current Salary:</label>
            <input
              type="text"
              name="CurrentSalary"
              value={formData.CurrentSalary}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>DOB:</label>
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Employee</button>
        </form>
        {/* Example Delete Button */}
        <button onClick={() => handleDeleteEmployee(1)}>Delete Employee</button>
      </div>
    );
  }

 

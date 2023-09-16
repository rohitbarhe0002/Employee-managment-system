import {Table,Spinner} from 'react-bootstrap';
import { useEmployeeApi  } from '../../hooks/useEmployeeApi';
import {EmployeeForm} from './EmployeeForm';
import { useState } from 'react';
export const  EmployeeList = () => {
    const { employees, loading , deleteEmployee,fetchEmployees ,updateEmployee } = useEmployeeApi();
    const [empId,setEmpId] = useState()
    if (loading) {
        return   <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>;
      }
      const handleDeleteEmployee = async (id) => {
        try {
          await deleteEmployee(id);
          // Handle success or update the employee list if needed
          await fetchEmployees();
        } catch (error) {
          console.error('Error deleting employee:', error);
        }
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
  return (
    <>
     <h2> Employees List</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Start Date</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
     {employees.map(({FirstName,StartDate,Description,DOB,id},indx)=>(
     <tr>
          <td>{FirstName}</td>
          <td>{DOB}</td>
          <td>{StartDate}</td>
          <td>{Description}</td> 
          <td><button onClick={()=>setEmpId(id)}>Edit</button></td>

          <td><button onClick={()=>handleDeleteEmployee(id)}>{id}</button></td>
        </tr>
        )) }
      </tbody>
    </Table>
   {empId && <EmployeeForm id={empId}  />}
    </>
  );
}


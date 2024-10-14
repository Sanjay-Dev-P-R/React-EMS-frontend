import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'


function Admin() {

  const [allEmployee,setAllEmployee]=useState([])


  const fetchData=async()=>{
    const response = await axios.get('http://localhost:8000/getEmployee')
    console.log(response.data.employee);
    setAllEmployee(response.data.employee)
  }
  console.log(allEmployee);

  const deleteEmp=async(id)=>{
    const response =await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    console.log(response);
    alert(response.data.message)
    fetchData()
  }

  useEffect(()=>{
    fetchData()
  },[])
    return (


        <>
            <div className='container'>
                <h1 className='text-center m-3'>Employee Management System</h1>
                <p style={{textAlign:'justify'}}>Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals.
                     It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress. 
                     In this way, employers can identify opportunities for improvement and recognize achievements.</p>
            </div>
            <Link to={'/add'}>
                <button className='btn btn-info m-5'>Add</button>
            </Link>
            <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>No</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        allEmployee.map(item=>(
          <tr>
          <th scope='row'>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <div className="d-flex justify content">
            <Link to={'edit/'+ item.id}>
          <button className='btn'>
            <i  className='fa-solid fa-pen text-success'></i>
          </button></Link>
          <button onClick={()=>deleteEmp(item.id)} className='btn'>
            <i  className='fa-solid fa-trash text-danger'></i>
          </button>
          <Link to={'view/'+ item.id}>
          <button className='btn'>
          <i class="fa-solid fa-users-viewfinder"></i>
          </button></Link>
        </div>
        </tr>
        ))
       
       }
      
      </MDBTableBody>
    </MDBTable>



           
        </>
    )
}

export default Admin
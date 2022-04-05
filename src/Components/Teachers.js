import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Row_teachers from './Row_teachers'
import axios from 'axios'
import myContext from './userContext'

function Teachers() {
    const userContext = useContext(myContext)
    useEffect(() => {
       async function fetch() {
            try {
                let datas = await axios.get("https://6212758cf43692c9c6eb7113.mockapi.io/day31-teachers")
                userContext.setTeachers(datas.data)
            
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
  },[])
  return (
   <>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Teachers</h1>
        
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">List of Teachers</h6>
                <Link to="/AddTeacher" className="d-none d-sm-inline-block btn btn-md btn-success shadow-sm">Add Teacher</Link>
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered text-dark " id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr className='text-center'>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Salary per Annum (in Rs.)</th>
                                <th>Contact No.</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                          <tbody className='text-dark'>
                            {
                              userContext.teachers.map((obj) => {
                                    return <Row_teachers data={obj}/>
                                })     
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
  )
}

export default Teachers
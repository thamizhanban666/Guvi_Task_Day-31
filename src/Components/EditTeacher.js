import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import myContext from './userContext';
import swal from 'sweetalert';

function EditTeacher() {
     let navigate = useNavigate()
     const userContext = useContext(myContext);
     let params = useParams();
     useEffect(() => {
          let fetch = async () => {
               try {
                    let fetchTeacher = await axios.get(`https://6212758cf43692c9c6eb7113.mockapi.io/day31-teachers/${params.id}`);
                    formik.setValues(fetchTeacher.data)
               } catch (error) {
                    console.log(error);
               }
          }
          fetch();
     }, [])
      


   const formik = useFormik({
          initialValues: {
               name: "",
               subject: "",
               age: "",
               address: "",
               salary:"",
             contactNo: "",
          },
          validate: (values) => {
               const errors = {};
               
               if (!values.name) {
                    errors.name="Name cannot be blank"
               }
               if (!values.subject) {
                    errors.subject="Subject cannot be blank"
               }
               if (!values.age) {
                    errors.age="Age cannot be blank"
               }
               if (!values.address) {
                    errors.address="Address cannot be blank"
               }
               if (!values.salary || values.salary==0) {
                    errors.salary="Enter any value"
               }
               if (`${values.contactNo}`.length != 10) {
                    errors.contactNo="Contact No. should be 10 digits"
               }
               
               return errors;
          },
          onSubmit: (values) => {
             //   sweet alert to confirm to edit
               swal({
                    title: `Are you sure to edit this teacher?`,
                    icon: "warning",
                    buttons:{
                         cancel: {
                         text: "Cancel",
                         value: null,
                         visible: true,
                         className: "btn btn-light text-primary",
                         closeModal: true,
                         },
                         confirm: {
                         text: "Edit",
                         value: true,
                         visible: true,
                         className: "btn btn-warning text-dark",
                         closeModal: true
                         }
                    },

                    dangerMode: true,
               })
               .then(async (willEdit) => {
                    if (willEdit) {
          
                         try {
                              await axios.put(`https://6212758cf43692c9c6eb7113.mockapi.io/day31-teachers/${params.id}`, values)
                              let index = userContext.teachers.findIndex((obj) => obj.id == params.id);
                              userContext.teachers.splice(index, 1, values)
                              userContext.setTeachers([...userContext.teachers])
                              formik.resetForm();
                              navigate("/teachers");
                              swal(`This teacher has been edited`, {
                                   icon: "success",
                                   buttons:{ confirm:{className:"btn btn-primary"}}
                              })
                         } catch (error) {
                              console.log(error);
                              navigate("/teachers") 
                              swal(`This teacher was not edited due to some technical issues`,'Please try after some time', {
                                   icon: "info",
                                   buttons:{ confirm:{className:"btn btn-primary"}}
                              })
                         }                         
                    }
               });
          } 
     })
   
   return (
   <div className='container'>
     <div className='h3 mb-2'>Edit teacher</div>
     <fieldset className='border border-5 border-primary p-3'>
          <form onSubmit={formik.handleSubmit} id="form">
          <div className='row'>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Name</label><span className='text-danger'>*</span>
                    <input className={`form-control border border-${formik.errors.name?"danger":"success"}`} name="name" onChange={formik.handleChange} value={formik.values.name}></input>
                    <span className='text-danger'>{formik.errors.name}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Subject</label><span className='text-danger'> *</span>
                    <input className={`form-control border border-${formik.errors.subject?"danger":"success"}`} name="subject" onChange={formik.handleChange} value={formik.values.subject}></input>
                    <span className='text-danger'>{formik.errors.subject}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Age</label><span className='text-danger'> *</span>
                    <input type="number" className={`form-control border border-${formik.errors.age?"danger":"success"}`} name="age" onChange={formik.handleChange} value={formik.values.age}></input>
                    <span className='text-danger'>{formik.errors.age}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Address</label><span className='text-danger'> *</span>
                    <input className={`form-control border border-${formik.errors.address?"danger":"success"}`} name="address"  onChange={formik.handleChange} value={formik.values.address}></input>
                    <span className='text-danger'>{formik.errors.address}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark fw-bold'>Salary per Annum (in Rs.)</label><span className='text-danger'> *</span>
                    <input  type="number" className={`form-control border border-${formik.errors.salary?"danger":"success"}`} name="salary"  onChange={formik.handleChange} value={formik.values.salary}></input>
                    <span className='text-danger'>{formik.errors.salary}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Contact No.</label><span className='text-danger'> *</span>
                    <input type="number" className={`form-control border border-${formik.errors.contactNo?"danger":"success"}`} name="contactNo"  onChange={formik.handleChange} value={formik.values.contactNo}></input>
                    <span className='text-danger'>{formik.errors.contactNo}</span>            
               </div>
          </div>
          <div className='m-3 text-center'>
               <button type='submit' className="d-none d-sm-inline-block btn btn-lg btn-success shadow-sm" disabled={Object.keys(formik.errors).length>0? true:false} >Submit</button>
          </div>
          </form>
     </fieldset>
     <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/teachers")}}>Back</button>        
   </div>
  )
}

export default EditTeacher
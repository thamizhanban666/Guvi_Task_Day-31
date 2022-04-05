import './App.css';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import Teachers from './Components/Teachers';
import Students from './Components/Students';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTeacher from './Components/AddTeacher';
import AddStudent from './Components/AddStudent';
import EditTeacher from './Components/EditTeacher';
import EditStudent from './Components/EditStudent';
import { MyProvider } from './Components/userContext';
import { useState } from 'react';
import ViewStudent from './Components/ViewStudent';
import ViewTeacher from './Components/ViewTeacher';

function App() { 
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  return (
  <BrowserRouter>
    <div id="page-top">
      <div id="wrapper">
        <MyProvider value={{ teachers, setTeachers, students, setStudents }}>
            {/* sidebar at aside           */}
            <SideBar></SideBar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {/* TopBar at the top */}
                <TopBar></TopBar>
                    {/* // <!-- Begin Page Content --> */}
                    <div className="container-fluid">
                      <Routes>
                        <Route path="teachers" element={<Teachers />} />
                        <Route path="students" element={<Students />} />
                        <Route path="AddTeacher" element={<AddTeacher />} />
                        <Route path="AddStudent" element={<AddStudent />} />
                        <Route path="edit-teacher/:id" element={<EditTeacher />} />
                        <Route path="edit-student/:id" element={<EditStudent />} />
                        <Route path="view-teacher/:id" element={<ViewTeacher />} />
                        <Route path="view-student/:id" element={<ViewStudent />} />
                      </Routes>
                    </div>
                    {/* <!-- /.container-fluid --> */}
            </div>
          </div>
        </MyProvider>
      </div>
      {/* <!-- Footer --> */}
      <footer className="sticky-footer bg-white">
          <div className="container my-auto">
              <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
              </div>
          </div>
      </footer>
      {/* <!-- End of Footer --> */}     
    </div>
      
  </BrowserRouter>
  );
}
 
export default App;

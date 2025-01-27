import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import EmployeeManagementPage from './component/EmployeeManagementPage';
import Login from './component/login';
import EmployeeMonthlyData from './component/user';
import EmployeeMonthlyReport from './component/EmployeeMonthlyReport';
import UserLogin from './component/user';
import PrivateRoute from './component/PrivateRoute';

const employeemanagement = lazy(()=>import("./component/EmployeeManagementPage"))
const employeemonthlyreport = lazy(()=>import("./component/EmployeeMonthlyReport"))
const userlogin = lazy(()=>import("./component/user"))


// window.addEventListener("unload",()=>{
//     localStorage.clear();
// })


function Main() {
    return (
        
            <Router>
                <Routes>
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/EmployeeManagement' element={<PrivateRoute component={employeemanagement}/>} />
                    <Route path='/MonthlyReport' element={<PrivateRoute component={employeemonthlyreport}/>} />
                    <Route path='/EmployeeTIMEIN-TIMEOUT' element={<UserLogin/>} />
                </Routes>
            </Router>
    )

}
export default Main
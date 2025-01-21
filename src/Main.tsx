import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import EmployeeManagementPage from './component/EmployeeManagementPage';
import Login from './component/login';
import EmployeeMonthlyData from './component/user';
import EmployeeMonthlyReport from './component/EmployeeMonthlyReport';
import UserLogin from './component/user';


function Main() {
    return (
        
            <Router>
                <Routes>
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/EmployeeManagement' element={<EmployeeManagementPage />} />
                    <Route path='/MonthlyReport' element={<EmployeeMonthlyReport/>} />
                    <Route path='/userLogin' element={<UserLogin/>} />
                </Routes>
            </Router>
    )

}
export default Main
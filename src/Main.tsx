import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import EmployeeManagementPage from './component/EmployeeManagementPage';
import Login from './component/login';


function Main() {
    return (
        
            <Router>
                <Routes>
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/EmployeeManagement' element={<EmployeeManagementPage />} />
                </Routes>
            </Router>
    )

}
export default Main
function EmployeeManagementPage() {
    
    return (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={`t3-logo.png`} className="logo-width" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="add-employee-management.html">Add Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="monthly-report.html">Employee Monthly Reports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Time Tracker</a>
                            </li>
                        </ul>
                        {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>  */}
                    </div>
                </div>
            </nav>
            <div className="col-12 mt-4">
                <h4 className="text-white heading">Add Employee Management</h4>
            </div>
            <div className="col-12 row m-0 mt-3">
                <div className="col-3">
                    <label className="text-white mb-2">Employee Name</label>
                    <input type="text" className="form-control" placeholder="Enter Emp name" />
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Email ID</label>
                    <input type="email" className="form-control" placeholder="Enter Email ID" />
                </div>
                <div className="col-2">
                    <label className="text-white mb-2">Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone" />
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Status</label>
                    <select className="form-control">
                        <option>Select</option>
                        <option>Active</option>
                        <option>In Active</option>
                    </select>
                </div>
                <div className="col-1 p-0 mt-auto">
                    <button type="button" className="btn">Submit</button>
                </div>
            </div>
            <div className="col-12 mt-4 p-3">
                <table className="w-100">
                    <tr>
                        <th>Employee Name</th>
                        <th>Email ID</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </tr>
                    <tr>
                        <td>Krishnankak</td>
                        <td>Krishnankak@thoughtcubeit.com</td>
                        <td>+91 8846959566</td>
                        <td>Active</td>
                        <td className="text-center"><span><i className="fa-solid fa-pencil"></i></span></td>
                    </tr>
                    <tr>
                        <td>Krishnankak</td>
                        <td>Krishnankak@thoughtcubeit.com</td>
                        <td>+91 8846959566</td>
                        <td>Active</td>
                        <td className="text-center"><span><i className="fa-solid fa-pencil"></i></span></td>
                    </tr>
                    <tr>
                        <td>Krishnankak</td>
                        <td>Krishnankak@thoughtcubeit.com</td>
                        <td>+91 8846959566</td>
                        <td>Active</td>
                        <td className="text-center"><span><i className="fa-solid fa-pencil"></i></span></td>
                    </tr>
                    <tr>
                        <td>Krishnankak</td>
                        <td>Krishnankak@thoughtcubeit.com</td>
                        <td>+91 8846959566</td>
                        <td>Active</td>
                        <td className="text-center"><span><i className="fa-solid fa-pencil"></i></span></td>
                    </tr>
                    <tr>
                        <td>Krishnankak</td>
                        <td>Krishnankak@thoughtcubeit.com</td>
                        <td>+91 8846959566</td>
                        <td>Active</td>
                        <td className="text-center"><span><i className="fa-solid fa-pencil"></i></span></td>
                    </tr>
                </table>
            </div>
        </div>
    )

}
export default EmployeeManagementPage
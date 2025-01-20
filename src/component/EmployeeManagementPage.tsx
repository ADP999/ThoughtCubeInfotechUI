import { useEffect, useState } from "react"
import { getEmployee, saveEmployee } from "../Services/ApiServices";

function EmployeeManagementPage() {

    const [employeeDetails, setAddEmployee] = useState({ name: '', email: '', phone: '', status: '' })
    const [employeeData, setEmployeeData] = useState([] as any)
    const saveEmployeeData = () => {
        saveEmployee(employeeDetails);
        const fetchEmployees = async () => {
            try {
                const data = await getEmployee();
                setEmployeeData(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();


    }


    useEffect(() => {
        debugger
        const fetchEmployees = async () => {
            try {
                const data = await getEmployee();
                setEmployeeData(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, [])

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
                    <input type="text" className="form-control" placeholder="Enter Emp name" value={employeeDetails.name} onChange={(e) => setAddEmployee({ ...employeeDetails, name: e.target.value })} />
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Email ID</label>
                    <input type="email" className="form-control" placeholder="Enter Email ID" value={employeeDetails.email} onChange={(e) => setAddEmployee({ ...employeeDetails, email: e.target.value })} />
                </div>
                <div className="col-2">
                    <label className="text-white mb-2">Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone" value={employeeDetails.phone} onChange={(e) => setAddEmployee({ ...employeeDetails, phone: e.target.value })} />
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Status</label>
                    <select className="form-control" value={employeeDetails.status} onChange={(e) => setAddEmployee({ ...employeeDetails, status: e.target.value })}>
                        <option>Select</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                    </select>
                </div>
                <div className="col-1 p-0 mt-auto">
                    <button type="button" className="btn" onClick={saveEmployeeData}>Submit</button>
                </div>
            </div>
            <div className="col-12 mt-4 p-3">
                <table className="w-100">
                    {employeeData.map(() => {
                        return <>
                        </>
                    })}
                    <tr>
                        <th>Employee Name</th>
                        <th>Email ID</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </tr>
                    {employeeData.map((data: any) => {
                        return <>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.status}</td>
                                <td className="text-center"><span><i className="fa-solid fa-pencil"></i></span></td>
                            </tr>
                        </>
                    })}
                    {/* <tr>
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
                    </tr> */}
                </table>
            </div>
        </div>
    )

}
export default EmployeeManagementPage
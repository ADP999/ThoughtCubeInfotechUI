import { useEffect, useState } from "react"
import { getEmployee, getEmployeeTimeInTimeOut, logout } from "../Services/ApiServices"
import moment from "moment-timezone";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";



function EmployeeMonthlyReport() {
    const [EmployeeTimeInTimeOut, setEmployeeTimeInTimeOut] = useState([] as any);
    const [EmployeeNames, setEmployeeNames] = useState([] as any);
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [filterEmployee, setFilterEmployee] = useState({ month: 0, year: '', employeename: '' })
    const [displayEmployee, setDisplayEmployee] = useState([] as any);
    let navigate = useNavigate();


    useEffect(() => {

        const getEmployee1 = async () => {
            const data = await getEmployee();
            setEmployeeNames(data)
            const data1 = await getEmployeeTimeInTimeOut();
            setEmployeeTimeInTimeOut(data1)
            setDisplayEmployee(data1)
        }
        getEmployee1()
    }, [])

    useEffect(() => {
        console.log(EmployeeTimeInTimeOut, '99999999999999999999');
    }, [EmployeeTimeInTimeOut])


    const handleImageClick = (ImageUrl: any) => {
        setModalImageUrl(ImageUrl);
        setModalVisible(true);
    };

    function employeeTimespan(timein: any, timeout: any) {
        debugger
        let intime = timein[0].split(":")
        let outtime = timeout[0].split(":")

        if (timein[1] === "PM") {
            intime[0] = parseInt(intime[0]) + 12
        }
        if (timeout[1] === "PM") {
            outtime[0] = parseInt(outtime[0]) + 12
        }

        let hours = outtime[0] - intime[0]
        let minutes = outtime[1] - intime[1]

        return hours + "Hrs " + minutes + "Mins"
    }

    function generateReport() {
        console.log(filterEmployee, 'filter employeeeeeeeeeeeeee')
        if(filterEmployee.employeename === 'All')
        {
            let employee = EmployeeTimeInTimeOut.filter((ef: any) => {
                let year = ef.TimeIn?.split(" ")[2].split("/")[2]
                let month = ef.TimeIn?.split(" ")[2].split("/")[0]
                return  parseInt(year) === parseInt(filterEmployee.year) && parseInt(month) === (filterEmployee.month)
            }
            )
            setDisplayEmployee(employee)
            return;
        }
        let employee = EmployeeTimeInTimeOut.filter((ef: any) => {
            let year = ef.TimeIn?.split(" ")[2].split("/")[2]
            let month = ef.TimeIn?.split(" ")[2].split("/")[0]
            return ef.EmployeeName.includes(filterEmployee.employeename) && parseInt(year) === parseInt(filterEmployee.year) && parseInt(month) === (filterEmployee.month)
        }
        )
        setDisplayEmployee(employee)
    }

    // useEffect(()=>{ 

    //     debugger

    //     if(displayEmployee.length >= 0)
    //     {
    //         let size = EmployeeTimeInTimeOut.length;
    //         let arr : any = [];

    //         for(let i = size ; i >= 0 ;i--)
    //         {
    //             arr.push(EmployeeTimeInTimeOut[i])
    //         }
    //        // setDisplayEmployee(arr)
    //     }
          
    // },[displayEmployee])

    return (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="t3-logo.png" className="logo-width" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/EmployeeManagement">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="add-employee-management.html">Add Employee</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="monthly-report.html">Employee Monthly Reports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={(e)=>logout(navigate)}>Logout</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>  */}
                    </div>
                </div>
            </nav>
            <div className="col-12 mt-4">
                <h4 className="text-white heading">Employee Monthly Reports</h4>
            </div>
            <div className="col-12 row m-0 mt-3">
                <div className="col-4">
                    <label className="text-white mb-2">Employee Name</label>
                    <select className="form-control" onChange={(e) => setFilterEmployee({ ...filterEmployee, employeename: e.target.value })}>
                        <option>Select</option>
                        <option>All</option>
                        {EmployeeNames.map((e: any) => {
                            return (
                                <option>{e.name}</option>
                            )
                        })}
                        {/* <option>Raja</option>
                    <option>Ramesh</option>
                    <option>Dhruva</option> */}
                    </select>
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Month</label>
                    {/* <input type="date" className="form-control" /> */}
                    <select className="form-control" onChange={(e) => setFilterEmployee({ ...filterEmployee, month: parseInt(e.target.value) })}>
                        <option>Select</option>
                        {months.map((m: any, index: any) => {
                            index = index + 1
                            return <><option value={index}>{m}</option></>
                        })
                        }
                    </select>
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Year</label>
                    <select className="form-control" onChange={(e) => setFilterEmployee({ ...filterEmployee, year: e.target.value })}>
                        <option>Select</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                    </select>
                </div>
                <div className="col-2 p-0 mt-auto">
                    <button type="button" className="btn" onClick={generateReport}>Generate Report</button>
                </div>
            </div>
            <div className="col-12 mt-4 p-3">
                <table className="w-100">
                    <tr>
                        <th>Employee Name</th>
                        <th>Day</th>
                        {/* <th>Year</th> */}
                        <th>Time in</th>
                        <th>Time out</th>
                        <th>Time span</th>
                        <th>Photo Time In</th>
                        <th>Photo Time Out</th>
                    </tr>
                    {displayEmployee?.map((e: any, index: number) => {
                        debugger
                        const timedate = new Date(e.TimeIn?.split(" ")[2])
                        const formattedDate = timedate.toLocaleDateString("en-GB");
                        return (
                            <>
                                <tr key={index}>
                                    <td>{e.EmployeeName}</td>
                                    <td>{e.TimeIn?.split(" ")[2]}</td>
                                    <td>{e.TimeIn?.split(" ")[0] + " " + e.TimeIn?.split(" ")[1]}</td>
                                    <td>{e.TimeOut != null ? e.TimeOut?.split(" ")[0] + " " + e.TimeOut?.split(" ")[1] : "N/A"} </td>
                                    <td>{e.TimeOut && e.TimeOut != null ? employeeTimespan(e.TimeIn?.split(" "), e.TimeOut?.split(" ")) : ''}</td>
                                    <td className="text-center">{<img src={e.PhotoTimeIn} style={{ width: "60px" }} onClick={() => handleImageClick(e.PhotoTimeIn)}></img>}</td>
                                    <td className="text-center">{<img src={e.PhotoTimeOut} style={{ width: "60px" }} onClick={() => handleImageClick(e.PhotoTimeOut)}></img>}</td>
                                </tr>
                            </>
                        );
                    })}
                    {/* <tr>
                    <td>Ramesh</td>
                    <td>11</td>
                    <td>2024</td>
                    <td>11</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Ramesh</td>
                    <td>11</td>
                    <td>2024</td>
                    <td>11</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Ramesh</td>
                    <td>11</td>
                    <td>2024</td>
                    <td>11</td>
                    <td>9</td>
                </tr> */}

                </table>
            </div>
            {modalVisible &&
                <Modal backdrop="static" onHide={() => setModalVisible(false)} show={modalVisible}>
                    <Modal.Header closeButton>
                        <Modal.Title>Preview Image</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Header >
                                    <span className="close" style={{color:"black", cursor: "pointer" }} title="Close" onClick={() => setModalVisible(false)}>&times;</span>
                                </Modal.Header> */}
                    <Modal.Body >
                        {/* <span className="close" style={{ color: "black", cursor: "pointer" }} title="Close" onClick={() => setModalVisible(false)}>&times;</span> */}
                        <img src={modalImageUrl} alt="Profile" className="w-100" />
                    </Modal.Body>
                </Modal>

            }
        </div>
    )


}

export default EmployeeMonthlyReport
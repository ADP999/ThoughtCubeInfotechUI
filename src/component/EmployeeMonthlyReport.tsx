import { useEffect, useState } from "react"
import { getEmployee, getEmployeeTimeInTimeOut } from "../Services/ApiServices"
import moment from "moment-timezone";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

function EmployeeMonthlyReport() {
    const [EmployeeTimeInTimeOut, setEmployeeTimeInTimeOut] = useState([] as any);
    const [EmployeeNames, setEmployeeNames] = useState([] as any);
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [modalVisible,setModalVisible] = useState(false)


    useEffect(() => {

        const getEmployee1 = async () => {
            const data = await getEmployee();
            setEmployeeNames(data)
            const data1 = await getEmployeeTimeInTimeOut();
            setEmployeeTimeInTimeOut(data1)
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

    function employeeTimespan( timein : any, timeout : any)
    {
        let intime = timein.split(":")
        let outtime = timeout.split(":")

        let hours =  outtime[0] - intime[0]
        let minutes =  outtime[1] - intime[1]

        return hours+"Hrs "+minutes+"Mins"
    }


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
                                <a className="nav-link active" aria-current="page" href="#">Time Tracker</a>
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
                    <select className="form-control">
                        <option>Select</option>

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
                    <input type="date" className="form-control" />
                </div>
                <div className="col-3">
                    <label className="text-white mb-2">Year</label>
                    <select className="form-control">
                        <option>Select</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                </div>
                <div className="col-2 p-0 mt-auto">
                    <button type="button" className="btn">Generate Report</button>
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
                    {EmployeeTimeInTimeOut?.map((e: any, index: number) => {
                        debugger

                        const timedate = new Date(e.TimeIn?.split(" ")[2])
                        // const year = e.TimeIn.split("/")[2]
                        // const month = timedate.toLocaleString('en-US', { month: 'long' })
                        return (
                            <>
                                <tr key={index}>
                                    <td>{e.EmployeeName}</td>
                                    <td>{e.TimeIn?.split(" ")[2]}</td>
                                    <td>{e.TimeIn?.split(" ")[0]+" "+e.TimeIn?.split(" ")[1]}</td>
                                    <td>{e.TimeOut !=null ? e.TimeOut?.split(" ")[0]+" "+e.TimeOut?.split(" ")[1] : "N/A"} </td>
                                    <td>{e.TimeOut && e.TimeOut != null ? employeeTimespan(e.TimeIn?.split(" ")[0],e.TimeOut?.split(" ")[0]) : ''}</td>
                                    <td className="text-center">{<img src={e.PhotoTimeIn} style={{width:"60px"}} onClick={()=>handleImageClick(e.PhotoTimeIn)}></img>}</td>
                                    <td className="text-center">{<img src={e.PhotoTimeOut} style={{width:"60px"}} onClick={()=>handleImageClick(e.PhotoTimeOut)}></img>}</td>
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
                                    <img src={modalImageUrl} alt="Profile" className="w-100"/>
                                </Modal.Body>
                            </Modal>

                        }
        </div>
    )


}

export default EmployeeMonthlyReport
import { useEffect, useRef, useState } from "react";
import { getEmployee, saveTimeIn, saveTimeOut } from "../Services/ApiServices";

function UserLogin() {

    const videoRef = useRef<any>(null);
    const canvasRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    let date = new Date()
    let converetedtime = new Date(date.getTime())
    const [time, setTime] = useState(new Date());
    const [employeeName,setEmployeeName] = useState([] as any)
    const [selectedEmployeeName,setSelectedEmployeeName] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(()=>{
        const getEmployees = async() =>{
            const data = await getEmployee()
            setEmployeeName(data)
        }
       getEmployees()
    },[])

    useEffect(() => {
        const getCameraFeed = async () => {
            try {
                // Request access to the front camera
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user", // Use 'environment' for the rear camera
                    },
                });
                // Set the video stream as the source for the video element
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing the camera: ", error);
            }
        };

        getCameraFeed();

        return () => {
            // Clean up: Stop all video tracks when the component unmounts
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach((track: any) => track.stop());
            }
        };
    }, []);

    const capturePhoto = () => {
        const canvas: any = canvasRef.current;
        const video = videoRef.current;

        if (canvas && video) {
            const context = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Get the photo as a base64 image
            const imageData = canvas.toDataURL("image/png");
            setPhoto(imageData);
        }
    };

    const TimeIn = () => {
        debugger
        let timein = {
            timein :   date.toLocaleTimeString() + " " + date.toLocaleDateString(),
            employeename : selectedEmployeeName.split(" ")[0],
            EmpID : parseInt(selectedEmployeeName.split(" ")[1])
        }
        saveTimeIn(timein)
    }

    const TimeOut = () => {
        let timeout = {
            timeout :   date.toLocaleTimeString() + " " + date.toLocaleDateString(),
            EmpID : parseInt(selectedEmployeeName.split(" ")[1])
        }
        saveTimeOut(timeout)

    }


    return <>
        <div className="col-10 m-auto">
            <div className="col-12 mt-4">
                <h4 className="text-white heading mb-3">Time In</h4>
            </div>
            <div className="col-6">
                <select className="form-control" onChange={(e)=>setSelectedEmployeeName(e.target.value)}>
                    <option>Select Employee Name</option>
                    {
                        employeeName.map((e : any)=>{
                            return (<option value={e.name +" "+e.id} >{e.name}</option>)
                        })
                    }
                </select>
            </div>
            <div className="col-12 row m-0 mt-3">
                <div className="col-6 p-0">
                    <div className="img-capture">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                        // style={{ width: "100%", height: "auto", borderRadius: "8px", border: "2px solid #333" }}
                        />
                    </div>
                    <div className="col-12 p-0 mt-3">
                        <button type="button" className="btn-capture" onClick={capturePhoto}>Capture</button>
                        <button type="button" className="btn-capture" onClick={TimeIn}>Time in</button>
                        <button type="button" className="btn-capture" onClick={TimeOut}>Time out</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="img-capture">
                        <canvas ref={canvasRef} style={{ display: "none" }} />
                        {photo && (
                            <div>
                                <h2>Captured Photo</h2>
                                <img
                                    src={photo}
                                    alt="Captured"
                                />
                            </div>
                        )}
                    </div>
                    <label className="text-white mt-2 col-12">{date.toLocaleTimeString() + " " + date.toLocaleDateString()}</label>
                </div>
            </div>
        </div>
    </>

}
export default UserLogin
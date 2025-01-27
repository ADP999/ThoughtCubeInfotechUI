import axios from 'axios';

const api_domian = process.env.REACT_APP_API_HOST as string;
const apiUrl = "http://127.0.0.1:8000";

export const LoginApi = async (login : any,navigate : any) =>{

    const response = await axios.post(`${apiUrl}/login`, login);
    if(response.data === "Login successfull")
    {
        navigate('/EmployeeManagement')
        sessionStorage.setItem("login","true")
    }
    else
    {
        alert('Entered email or password are incorrect')
    }

}

export const saveEmployee = async (data : any) =>{

    const response = await axios.post(`${apiUrl}/EmployeeManagement`, data);
    if(response.data)
    {
       alert('Employee Details added successfully')
    }
    else
    {
        alert('Error Occurred')
    }

}

export const getEmployee = async () =>{
    const response : any = await axios.get(`${apiUrl}/getEmployees`).then((resp : any) => {return resp.data});
    if(response)
    {
       //alert('Employee Details added successfully')
       return response
    }
    else
    {
        alert('Error Occurred')
    }

}

export const saveTimeIn = (data : any) =>{

   const response  : any =  axios.post(`${apiUrl}/employees/time-in`, data);

   if(response)
   {
    alert("Saved Time In Succesfully")
   }
   else
   {
    alert("Error Occurred. Please Try Again")
   }

}

export const saveTimeOut = (data : any) =>{

    const response  : any =  axios.post(`${apiUrl}/employees/time-out`, data);
 
    if(response)
    {
     alert("Saved Time Out Succesfully")
    }
    else
    {
     alert("Error Occurred. Please Try Again")
    }
 
 }

 export const getEmployeeTimeInTimeOut = async () =>{
    const response : any = await axios.get(`${apiUrl}/GetEmployeesTimeInTimeOut`).then((resp : any) => {return resp.data});
    if(response)
    {
        console.log(response,'----------------')
        return response
    }
    else
    {
        alert("Error Occurred")
    }
 }

 export const updateEmployeeDetails = async (data : any) =>{
    const response : any = await axios.put(`${apiUrl}/update-employees`,data)
    if(response)
    {
       alert("Employee updated successfully")
    }
    else
    {
        alert("Error Occurred")
    }
 }

 export const logout = (navigate : any) =>{
         navigate("/Login")
         sessionStorage.clear()
 }
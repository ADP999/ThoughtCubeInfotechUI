import axios from 'axios';

const api_domian = process.env.REACT_APP_API_HOST as string;
const apiUrl = "http://127.0.0.1:8000";

export const LoginApi = async (login : any,navigate : any) =>{

    const response = await axios.post(`${apiUrl}/login`, login);
    if(response.data === "Login successfull")
    {
        navigate('/EmployeeManagement')
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
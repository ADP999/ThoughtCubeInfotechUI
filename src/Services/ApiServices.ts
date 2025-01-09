const api_domian = process.env.REACT_APP_API_HOST as string;
import axios from 'axios';


export const Login = async (login : any) =>{

    const response = await axios.post('https://api.example.com/data', login);
    if(response.data === 'Login successful')
    {
        
    }

}
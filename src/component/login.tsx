import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginApi } from '../Services/ApiServices';

function Login() {

    const [login,setLogin] = useState({username : '',password:''})
    let navigate : any = useNavigate();

    function LoginSubmit()
    {
        //history("/EmployeeManagement")
        LoginApi(login,navigate)
    }

    return (
        <div className="register">
            <div className="wrapper">
                <form action="#">
                    <h2>Login</h2>
                    <div className="input-field">
                        <input type="text"  onChange={(e)=>setLogin({...login,username : e.target.value})}/>
                            <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input type="password"  onChange={(e)=>setLogin({...login,password : e.target.value})}/>
                            <label>Enter your password</label>
                    </div>
                     {/* <div className="forget">
                        <a href="#">Forgot password?</a>
                    </div>  */}
                    <button type="submit" className="btn mt-5" onClick={LoginSubmit}><a >Log In</a></button>
                </form>
            </div>
            </div>
            )
}
export default Login
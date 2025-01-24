import { ReactNode } from "react";

interface RouteProps{
    component : React.ComponentType
}

const PrivateRoute : React.FC<RouteProps> = ({component : RouteComponent}) =>
{
    
    let isUserLoggined = sessionStorage.getItem("login");

    if(isUserLoggined === "true" )
    {
        return <RouteComponent/>
    }
    else{
        return window.location.href="/Login"
    }

}
export default PrivateRoute
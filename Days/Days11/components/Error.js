import { useRouteError } from "react-router";

const Error=()=>{
    const err= useRouteError();
    console.log(err)
return(
        <div>
            <h2>{err.data}</h2>
        </div>
    )
}
export default Error;
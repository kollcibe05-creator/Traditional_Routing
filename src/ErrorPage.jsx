import { Navigate } from "react-router-dom";




function ErrorPage() {
    // const error = useRouteError()
    // console.log(error)

    return (
        <div>
            <h1>OOps!😂</h1>
            <button onClick={() => <Navigate to="/" />}>Return Home</button>
        </div>
    )

}

export default ErrorPage;
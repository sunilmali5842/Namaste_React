import React from "react";
import ReactDOM from "react-dom/client";
import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="container errormsg text-center">
          <h1 className="text-center">Ooops !</h1>
          <h2 className="text-center"> Something went Wrong !!!</h2>

          <h2>{err.status + ":" + err.statusText}</h2>

        </div>
    )
};

export default Error;
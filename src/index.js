import React from "react";
import ReactDOM  from "react-dom";
import App from "./component/App"
import {browserRouter} from 'react-router-dom';
import root from "axios";

ReactDOM.render(<App/>,document.querySelector("#root"));
root.render(
    <browserRouter>
        <App/>
    </browserRouter>
);

reportWebVitals();
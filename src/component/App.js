import React,{ Component } from "react";
import './App.css';
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";



class App extends Component{
    render(){
        return(
            <div>
                <div className="menu">
                    <div className="container">
                        <a href="/#">React Js CRUD with Laravel API</a>
                    </div>
                </div>
                <div className="formcontainer">
                   <MyForm />
                </div>
                <div className="custcontainer">
                   <CustomerList />
                </div>
                <div className="input-cust-container">
                   
                </div>
            </div>
        );
    }
}
export default App;
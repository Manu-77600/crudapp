import React,{Component} from "react";

class MyForm extends Component{
    render(){
        return(
            <div className="form-container">
                <div className="form-field">
                    <div className="form-input">
                        <label>FirstName:</label><br/>
                        <input type="text" placeholder="FirstName" />
                    </div>
                    <div className="form-input">
                        <label>LastName:</label><br/>
                        <input type="text" placeholder="LastName" />
                    </div>
                    <div className="form-input">
                        <label>Email:</label><br/>
                        <input type="email" placeholder="eample@gmail.com"/>
                    </div>
                    <div className="form-input">   
                        <button type="submit" style={{color:"white" }}>SAVE</button>        
                    </div>
                </div>                
            </div>
        );
    };
};
export default MyForm;
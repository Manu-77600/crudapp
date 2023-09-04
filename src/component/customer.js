import React,{Component} from "react";

class Customer extends Component{
    render(){
        return( 
        <div>            
            <table className="table-head">
                <tr className="row">
                    <th width="100">Slno</th>
                    <th width="100">FirstName</th>
                    <th width="150 ">Email</th>
                    <th width="150">Action</th>
                </tr>
                <tr>
                    <td style={{textAlign:"center"}}>1</td>
                    <td style={{textAlign:"center"}}>Manohara k</td>
                    <td style={{textAlign:"center"}}>manohara@gmail.com</td>
                    <td style={{textAlign:"center"}}>
                        <button style={{backgroundColor:"greenyellow"}}>&nbsp;save&nbsp;</button>&nbsp;
                        <button style={{backgroundColor:"red"}}>&nbsp;Delete&nbsp;</button>
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:"center"}}>2</td>
                    <td style={{textAlign:"center"}}>Manohara k</td>
                    <td style={{textAlign:"center"}}>manohara@gmail.com</td>
                    <td style={{textAlign:"center"}}>
                        <button style={{backgroundColor:"greenyellow"}}>&nbsp;save&nbsp;</button>&nbsp;
                        <button style={{backgroundColor:"red"}}>&nbsp;Delete&nbsp;</button>
                    </td>
                </tr>
            </table>
        </div>
        )
    }
}

export default Customer;
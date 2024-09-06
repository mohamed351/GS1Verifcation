import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function Serial(){
   const {state} = useLocation();
    console.log(state);
  const formateDate =(date)=>{
    if(!date){
        return "";
    }
    return new Date(date).toLocaleDateString()
  
  }

     return (
        <div style={{padding:"15px"}}>
            <h2>Code  {state.itemCode}</h2>
            <Table  bordered >
                <tbody>
                    <tr>
                        <th>Code</th>
                        <td>{state.itemCode}</td>
                    </tr>

                    <tr>
                        <th>Code Name </th>
                        <td>{state.codeName}</td>
                    </tr>
                    <tr>
                        <th>Code Name Arabic</th>
                        <td>{state.codeNameAr}</td>
                    </tr>
                    <tr>
                        <th>description
                        </th>
                        <td>{state.description
                        }</td>
                    </tr>

                    <tr>
                        <th>Description Arabic </th>
                        <td>{state.descriptionAr}</td>
                    </tr>

                    <tr>
                        <th>Active </th>
                        <td>{state.active.toString()}</td>
                    </tr>

                    <tr>
                        <th>Active </th>
                        <td>{state.active.toString()}</td>
                    </tr>

                    <tr>
                        <th>Active From </th>
                        <td>{formateDate( state.activeFrom)}</td>
                    </tr>
                    <tr>
                        <th>Active To </th>
                        <td>{formateDate( state.activeTo)}</td>
                    </tr>

                    <tr>
                        <th>Parent Code </th>
                        <td>{state.parentItemCode}</td>
                    </tr>

                  
                </tbody>
             </Table>
        </div>
     )
}
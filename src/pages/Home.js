import { useState } from "react";
import {Button} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import BasicModal from "../components/BasicModal";
export default function Home(){

    const navigate = useNavigate();
    const [getSerial , setSerial]= useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors , setErrors] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitData =async (e)=>{
        e.preventDefault();
     
        if(getSerial.length === 0){
            setErrors("Please enter Data");
            handleShow(true);
            return;
        }
        setIsLoading(true);
        const response = await fetch(`http://testingapplicationgs12.somee.com/api/Codes?BarCode=${getSerial}&Type=GS1`);
        if(!response.ok){
        if(response.status === 400){
           const error =  await response.json();   
           setErrors(error.message);
    
           
        }
        else{
            setErrors("Unknow Error");
           
        }
        handleShow(true);
        setIsLoading(false);
     }
     else{
        const data = await response.json();
        setIsLoading(false);
        navigate("/serial",{state:data});
     }
       

  
      
    }
    return (
        <>
        <div style={{display:"flex" ,flexDirection:"column" , justifyContent:"center" , alignItems:"center" , minHeight:"93vh"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center" , justifyContent:"center"}}>
                <img src="logo.jpg" alt="Arab computers GS1" height="250px" />
            <h2> GS1 Serial Lookup</h2>

          </div>

          <div style={{display:"flex", width:"500px"}}>
            <form style={{width:"100%"}} onSubmit={onSubmitData}>
                <div className="form-group" style={{width:"100%"}}>
         
                <input type="text" className="form-control" style={{width:"100%"}} placeholder="Serial" value={getSerial} onChange={(e)=> setSerial(e.target.value)} />
               
                </div>
                <Button type="submit" disabled={isLoading} className="mt-2 w-100">Search</Button>
            </form>
          </div>
        </div>

        <p className="text-center" style={{color:"#ccc"}} >Created By Mohamed Beshri Amer <br/> Arab Computer Software Helper</p>
    
        <BasicModal handleClose={handleClose} show={show} handleShow={handleShow} message={errors} />
        </>
    )
}
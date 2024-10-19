import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentDetails = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={()=>navigate("/onet.pl")}>onet</Button>
        </>
    
    )
}

export default AppointmentDetails;
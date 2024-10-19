import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentProps } from "../../../../lib/types";

const AppointmentDetails = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <p>{data.place}</p>
      <Button onClick={() => navigate("/onet.pl")}>onet</Button>
    </>
  );
};

interface Props {
  data: AppointmentProps;
}

export default AppointmentDetails;

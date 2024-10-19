import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentProps } from "../../../../lib/types";
import { Col, Row, Statistic, Modal } from "antd";
import BranchDetails from "./BranchDetails";

const AppointmentDetails = ({ data, startTime, endTime }: Props) => {
  const [branchSearch, setBranchSearch] = useState<string>("");

  const navigate = useNavigate();

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Start time" value={startTime} valueStyle={{ fontSize: '20px' }} />
        </Col>
        <Col span={8}>
          <Statistic title="End time" value={endTime} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 15, }}>
        <Col>
          <Statistic title="Meeting with" value={data.appointmentWIth} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Row style={{ marginTop: 15, }}>
        <Col>
          <Statistic title="Place" value={data.place} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Button onClick={()=>setBranchSearch(data.place)}>Show details</Button>

      <Modal 
          open={!!branchSearch} 
          footer={()=><></>} 
          onCancel={()=>setBranchSearch("")}
        >
          <BranchDetails address={data.place}/>
      </Modal>
    </>
  );
};

interface Props {
  data: AppointmentProps;
  startTime: string;
  endTime: string;
}

export default AppointmentDetails;

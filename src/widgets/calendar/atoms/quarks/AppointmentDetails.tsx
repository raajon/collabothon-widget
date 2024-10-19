import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const AppointmentDetails = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Meeting with" value={data.appointmentWIth} valueStyle={{ fontSize: '20px' }} />
        </Col>
        <Col span={12}>
          <Statistic title="Place" value={data.place} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Button onClick={() => navigate("/onet.pl")}>onet</Button>
    </>
  );
};

interface Props {
  data: AppointmentProps;
}

export default AppointmentDetails;

import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const AppointmentDetails = ({ data, startTime, endTime }: Props) => {
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
      <Button onClick={() => navigate("/onet.pl")}>onet</Button>
    </>
  );
};

interface Props {
  data: AppointmentProps;
  startTime: string;
  endTime: string;
}

export default AppointmentDetails;

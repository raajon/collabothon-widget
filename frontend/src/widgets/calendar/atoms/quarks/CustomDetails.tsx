import React from "react";
import { CustomProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const CustomDetails = ({ data, startTime, endTime }: Props) => {
  return <>
    <Row gutter={16}>
      <Col span={8}>
        <Statistic title="Start time" value={startTime} valueStyle={{ fontSize: '20px' }} />
      </Col>
      <Col span={8}>
        <Statistic title="End time" value={endTime} valueStyle={{ fontSize: '20px' }} />
      </Col>
    </Row>
    <Row gutter={16} style={{marginTop: 15,}}>
      <Col>
        <Statistic title="Details" value={data.description} valueStyle={{ fontSize: '20px' }} />
      </Col>
    </Row>
  </>
};

interface Props {
  data: CustomProps;
  startTime: string;
  endTime: string;
}

export default CustomDetails;

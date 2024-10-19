import React from "react";
import { CustomProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const CustomDetails = ({ data }: Props) => {
  return <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Details" value={data.description} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
    </>
};

interface Props {
  data: CustomProps;
}

export default CustomDetails;

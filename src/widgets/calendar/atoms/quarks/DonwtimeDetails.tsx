import React from "react";
import { DowntimeProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const DonwtimeDetails = ({ data }: Props) => {
  return <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Details" value={data.description} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
    </>
};

interface Props {
  data: DowntimeProps;
}

export default DonwtimeDetails;

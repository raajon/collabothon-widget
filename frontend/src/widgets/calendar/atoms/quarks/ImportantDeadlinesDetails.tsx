import React from "react";
import { ImportantDeadlineProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const ImportantDeadlinesDetails = ({ data }: Props) => {
  return <>
      <Row gutter={16}>
        <Col>
          <Statistic title="Details" value={data.description} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
    </>
};

interface Props {
  data: ImportantDeadlineProps;
}

export default ImportantDeadlinesDetails;

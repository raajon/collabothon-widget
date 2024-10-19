import React from "react";
import { StandingOrderProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const StandingOrderDetails = ({ data }: Props) => {
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Account from" value={data.account_from} valueStyle={{fontSize: '20px'}}/>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: 20,}}>
        <Col span={12}>
          <Statistic title="Amount" value={data.amount} valueStyle={{fontSize: '25px'}}/>
        </Col>
        <Col span={12}>
          <Statistic title="Currency" value={data.currency} valueStyle={{fontSize: '25px'}}/>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: 20,}}>
        <Col span={12}>
          <Statistic title="Account to" value={data.account_to} valueStyle={{fontSize: '20px'}}/>
        </Col>
        <Col span={12}>
          <Statistic title="Receiver" value={data.receiver} valueStyle={{fontSize: '20px'}}/>
        </Col>
      </Row>
    </>
  );
};

interface Props {
  data: StandingOrderProps;
}

export default StandingOrderDetails;

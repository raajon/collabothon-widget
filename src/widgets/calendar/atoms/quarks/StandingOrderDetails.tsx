import React from "react";
import { StandingOrderProps } from "../../../../lib/types";
import { Button, Col, Row, Statistic } from "antd";
import { useNavigate } from "react-router-dom";

const StandingOrderDetails = ({ data }: Props) => {
    const navigate = useNavigate();
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Statistic title="Account from" value={data.account_from} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 15, }}>
        <Col span={12}>
          <Statistic title="Amount" value={data.amount} valueStyle={{ fontSize: '25px' }} />
        </Col>
        <Col span={12}>
          <Statistic title="Currency" value={data.currency} valueStyle={{ fontSize: '25px' }} />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 15, }}>
        <Col>
          <Statistic title="Account to" value={data.account_to} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Row style={{ marginTop: 15, }}>
        <Col>
          <Statistic title="Receiver" value={data.receiver} valueStyle={{ fontSize: '20px' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => navigate("/mockRedirectPage/Create_standing_order")}>
            Create standing order
          </Button>
        </Col>
      </Row>
    </>
  );
};

interface Props {
  data: StandingOrderProps;
}

export default StandingOrderDetails;

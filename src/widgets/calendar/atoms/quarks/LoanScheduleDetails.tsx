import React from "react";
import { LoanScheduleProps } from "../../../../lib/types";
import { Col, Row, Statistic } from "antd";

const LoanScheduleDetails = ({ data }: Props) => {
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Loan" value={data.loanDetails.title} valueStyle={{fontSize: '20px'}}/>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: 28,}}>
        <Col span={8}>
          <Statistic title="Capital installement" value={data.capital_installement} valueStyle={{fontSize: '25px'}}/>
        </Col>
        <Col span={8}>
          <Statistic title="Interest installement" value={data.interest_installement} valueStyle={{fontSize: '25px'}}/>
        </Col>
        <Col span={8}>
          <Statistic title="Currency" value={data.currency} valueStyle={{fontSize: '25px'}}/>
        </Col>
      </Row>
    </>
  );
};

interface Props {
  data: LoanScheduleProps;
}
export default LoanScheduleDetails;

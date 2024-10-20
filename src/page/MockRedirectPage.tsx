import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
} from "antd";
import Title from "antd/es/typography/Title";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const MockRedirectPage = () => {
  const { msg } = useParams();

  var takeNewLoan = (
    <Col span={12}>
      <Title>{msg?.replaceAll("_", " ")}</Title>
      <Form {...formItemLayout}>
        <Form.Item
          label="Company name"
          name="CompanyName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="TypeOfLoan"
          name="TypeOfLoan"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { value: "Manufacturing", label: "Manufacturing" },
              { value: "Services", label: "Services" },
              { value: "Retail", label: "Retail" },
              { value: "Others", label: "Others" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Amount"
          name="Amount"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Currency"
          name="Currency"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { value: "EUR", label: "EUR" },
              { value: "USD", label: "USD" },
              { value: "GBP", label: "GBP" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Explain why you need a loan"
          name="Explain"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Repayment date "
          name="RepaymentDate"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 19, span: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );

  const createStandingOrder = (
    <Col span={12}>
      <Title>{msg?.replaceAll("_", " ")}</Title>
      <Form {...formItemLayout}>
        <Form.Item></Form.Item>
        <Form.Item
          label="Client name"
          name="ClientName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Account number"
          name="AccountNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Order type"
          name="OrderType"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { value: "Deposit", label: "Deposit" },
              { value: "Payment", label: "Payment" },
              { value: "Transfer", label: "Transfer" },
              { value: "Other", label: "Other" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Order amount"
          name="OrderAmount"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Currency"
          name="CompanyName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { value: "EUR", label: "EUR" },
              { value: "USD", label: "USD" },
              { value: "GBP", label: "GBP" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Orderdate"
          name="OrderDate"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 19, span: 2 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );

  return msg === "Take_new_loan" ? takeNewLoan : createStandingOrder;
};

export default MockRedirectPage;

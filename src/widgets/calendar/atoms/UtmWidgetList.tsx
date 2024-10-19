import React from "react";
import type { CSSProperties } from "react";
import {
  EventType,
  LoanScheduleProps,
  UniversalDetailProps,
} from "../../../lib/types";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import getItemStyle from "../../../utils/getItemStyle";
import DonwtimeDetails from "./quarks/DonwtimeDetails";
import LoanScheduleDetails from "./quarks/LoanScheduleDetails";
import ImportantDeadlinesDetails from "./quarks/ImportantDeadlinesDetails";
import CustomDetails from "./quarks/CustomDetails";
import StandingOrderDetails from "./quarks/StandingOrderDetails";
import AppointmentDetails from "./quarks/AppointmentDetails";
import dayjs from 'dayjs';

const UtmWidgetList = ({ data }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  let panelStyle: React.CSSProperties = {
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
  };

  const getProperComponent = (key: string, details: UniversalDetailProps) => {
    switch (key) {
      case "downtime":
        return <DonwtimeDetails data={details} />;

      case "loanSchedule":
        return <LoanScheduleDetails data={details} />;

      case "importantDeadlines":
        return <ImportantDeadlinesDetails data={details} />;

      case "custom":
        return <CustomDetails data={details} />;

      case "standingOrder":
        return <StandingOrderDetails data={details} />;

      case "appointment":
        return <AppointmentDetails data={details} />;

      default:
        <p>No details.</p>;
    }
  };

  const items: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) =>
    data.map((item, index) => ({
      key: index,
      label: `${dayjs(item.startDate).format('DD-MM-YYYY')} ${item.title}`,
      children: getProperComponent(item.type, item.data),
      style: { ...panelStyle, borderLeftColor: getItemStyle(item.type) },
    }));

  return (
    <Collapse
      items={items(panelStyle)}
      onChange={onChange}
    />
  );
};

interface Props {
  data: EventType[];
}

export default UtmWidgetList;

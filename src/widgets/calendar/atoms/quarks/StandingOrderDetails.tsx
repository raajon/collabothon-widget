import React from "react";
import { StandingOrderProps } from "../../../../lib/types";

const StandingOrderDetails = ({ data }: Props) => {
  return <p>{data.currency}</p>;
};

interface Props {
  data: StandingOrderProps;
}

export default StandingOrderDetails;

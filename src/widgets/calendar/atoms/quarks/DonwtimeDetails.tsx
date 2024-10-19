import React from "react";
import { DowntimeProps } from "../../../../lib/types";

const DonwtimeDetails = ({ data }: Props) => {
  return <p>{data.description}</p>;
};

interface Props {
  data: DowntimeProps;
}

export default DonwtimeDetails;

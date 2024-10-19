import React from "react";
import { CustomProps } from "../../../../lib/types";

const CustomDetails = ({ data }: Props) => {
  return <p>{data.description}</p>;
};

interface Props {
  data: CustomProps;
}

export default CustomDetails;

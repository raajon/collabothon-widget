import React from "react";
import { ImportantDeadlineProps } from "../../../../lib/types";

const ImportantDeadlinesDetails = ({ data }: Props) => {
  return <p>{data.description}</p>;
};

interface Props {
  data: ImportantDeadlineProps;
}

export default ImportantDeadlinesDetails;

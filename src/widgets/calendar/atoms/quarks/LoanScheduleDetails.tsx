import React from "react";
import { LoanScheduleProps } from "../../../../lib/types";

const LoanScheduleDetails = ({ data }: Props) => {
  console.log(data);
  return (
    <>
      <p>{data.loanDetails.title}</p>
    </>
  );
};

interface Props {
  data: LoanScheduleProps;
}
export default LoanScheduleDetails;

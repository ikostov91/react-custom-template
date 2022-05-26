import React from "react";
import CustomColumn from "../../components/custom-column";
import CustomRow from "../../components/custom-row";

const NotFound = () => {
  return (
    <CustomRow>
      <CustomColumn width={12}>
        <div className="p-5 text-center">
          <h1>404 - Not Found</h1>
        </div>
      </CustomColumn>
    </CustomRow>
  )
};

export default NotFound;

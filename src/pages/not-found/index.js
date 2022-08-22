import React from "react";
import CustomColumn from "../../components/custom-column";
import CustomRow from "../../components/custom-row";
import Translate from '../../components/translate';

const NotFound = () => {
  return (
    <CustomRow>
      <CustomColumn width={12}>
        <div className="p-5 text-center">
          <h1><Translate id="pages.error.not.found" /></h1>
        </div>
      </CustomColumn>
    </CustomRow>
  )
};

export default NotFound;

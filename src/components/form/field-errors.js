import React from "react";
import { VALIDATIONS } from "./types";

const FieldErrors = ({ fieldKey = '', errors = {} }) => {
  return (
    <>
      {VALIDATIONS.includes(errors[fieldKey]?.type) && (
        <div className="validation-error">
          {errors[fieldKey].message}
        </div>
      )}
    </>
  );
};

export default FieldErrors;

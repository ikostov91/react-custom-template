import React from "react";

const FieldErrors = ({ fieldKey = '', errors = {} }) => {
  return (
    <>
      {['required', 'maxLength', 'pattern'].includes(errors[fieldKey]?.type) && (
        <div className="validation-error">
          {errors[fieldKey].message}
        </div>
      )}
    </>
  );
};

export default FieldErrors;

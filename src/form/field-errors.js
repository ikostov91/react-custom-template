import React from "react";
import Translate from '../components/translate';
import { VALIDATIONS } from "./types";

const FieldErrors = ({ field = '', errors = {} }) => {
  return (
    <>
      {VALIDATIONS.includes(errors[field]?.type) && (
        <div className="validation-error">
          <Translate id={errors[field].message} />
        </div>
      )}
    </>
  );
};

export default FieldErrors;

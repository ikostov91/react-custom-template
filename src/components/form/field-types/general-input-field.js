import React from "react";
import { Controller  } from "react-hook-form";
import Form from "react-bootstrap/Form";

const GeneralInputField = ({ id, label = '', type = '', validations = {}, isInvalid = false, control }) => {
  return (
    <>
      <Form.Label className="required">{label}</Form.Label>
      <Controller
        name={id}
        control={control}
        rules={validations}
        render={({ field }) => <Form.Control type={type} isInvalid={isInvalid} size="sm" className="mb-1" { ...field } />}
      />
    </>
  );
};

export default GeneralInputField;
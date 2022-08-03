import React from "react";
import { Controller  } from "react-hook-form";
import Form from "react-bootstrap/Form";

const GeneralInputField = ({ id, label = '', type = '', validations = {}, isInvalid = false, control }) => {
  const isRequiredClassName = validations.hasOwnProperty('required') ? 'required' : '';
  return (
    <>
      <Form.Label className={isRequiredClassName}>{label}</Form.Label>
      <Controller
        name={id}
        control={control}
        rules={validations}
        render={({ field }) => 
          <Form.Control
            { ...field }
            value={field.value ?? ''}
            type={type}
            isInvalid={isInvalid}
            size="sm"
            className="mb-1"
          />
        }
      />
    </>
  );
};

export default GeneralInputField;

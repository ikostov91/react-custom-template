import React from "react";
import { Controller  } from "react-hook-form";
import Form from "react-bootstrap/Form";

const DropdownField = ({ id, label = '', options = [], validations = {}, isInvalid = false, control }) => {
  const isRequiredClassName = validations && validations.hasOwnProperty('required') ? 'required' : '';
  return (
    <>
      <Form.Label className={isRequiredClassName}>{label}</Form.Label>
      <Controller
        name={id}
        control={control}
        rules={validations}
        render={({ field }) =>
          <Form.Select
            {...field}
            size='sm'
            isInvalid={isInvalid}
          >
            <option value=''>Select...</option>
            {options.map(x => (
              <option value={x.value}>{x.label}</option>
            ))}
          </Form.Select>
        }
      />
    </>
  );
};

export default DropdownField;

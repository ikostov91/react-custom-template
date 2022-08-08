import React from "react";
import { Controller  } from "react-hook-form";
import Form from "react-bootstrap/Form";

const DropdownField = ({ id, options = [], validations = {}, isInvalid = false, control }) => {
  return (
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
  );
};

export default DropdownField;

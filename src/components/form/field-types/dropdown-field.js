import React from "react";
import { Controller  } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Translate from "../../translate";

const DropdownField = ({ id, label = '', options = [], validations = {}, isInvalid = false, control }) => {
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
          <option value=''>
            <Translate id="generic.labels.select.options" />
          </option>
          {options.map(x => (
            <option value={x.value}>{x.label}</option>
          ))}
        </Form.Select>
      }
    />
  );
};

export default DropdownField;

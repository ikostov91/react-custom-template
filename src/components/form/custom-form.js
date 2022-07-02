import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm  } from "react-hook-form";
import FieldErrors from "./field-errors";
import GeneralInputField from "./field-types/general-input-field";
import { FIELD_TYPES } from "./types";

const CustomForm = ({ fields = [], renderSubmitChildren = null, onSubmit = () => {} }) => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();
  console.log(fields);

  const renderFields = (fields = []) => (
    fields.map((field, index) => {
      const { id, type, label, children = [], validations = null, className = '', ...props } = field;

      if (type === FIELD_TYPES.EMAIL || type === FIELD_TYPES.PASSWORD || type === FIELD_TYPES.TEXT) {
        return (
          <div key={index} className="field-element">
            <GeneralInputField
              key={id}
              label={label}
              id={id}
              type={type}
              validations={validations instanceof Function ? validations(getValues) : validations}
              isInvalid={!!errors[id]}
              control={control}
            />
            <FieldErrors
              fieldKey={id}
              errors={errors}
            />
          </div>
        )
      }

      if (type === FIELD_TYPES.ROW) {
        return (
          <Row key={id} className={className}>
            {renderFields(children)}
          </Row>
        );
      }

      if (type === FIELD_TYPES.COLUMN) {
        return (
          <Col key={id} className={className} {...props}>
            {renderFields(children)}
          </Col>
        )
      }

      return null;
    })
  );

  return (
    <form className="custom-form" onSubmit={handleSubmit((data) => onSubmit(data))}>
      {renderFields(fields)}
      {renderSubmitChildren && renderSubmitChildren}
    </form>
  );
};

export default CustomForm;

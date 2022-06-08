import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm  } from "react-hook-form";
import FieldErrors from "./field-errors";
import GeneralInputField from "./field-types/general-input-field";
import { FIELD_TYPES } from "./types";

const CustomForm = ({ fields = [], renderSubmitChildren = <></>, onSubmit = () => {} }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const renderFields = (fields = []) => (
    fields.map((field) => {
      const { id, type, label, children = [], validations = {}, className = '', ...props } = field;

      if (type === FIELD_TYPES.EMAIL || type === FIELD_TYPES.PASSWORD) {
        return (
          <div className="field-element">
            <GeneralInputField
              key={id}
              label={label}
              type={type}
              validations={validations}
              isInvalid={!!errors[type]}
              control={control}
            />
            <FieldErrors
              key={id}
              fieldKey={type}
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

      return <></>;
    })
  );

  return (
    <form className="custom-form" onSubmit={handleSubmit((data) => onSubmit(data))}>
      {renderFields(fields)}
      {renderSubmitChildren}
    </form>
  );
};

export default CustomForm;

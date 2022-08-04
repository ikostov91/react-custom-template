import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm  } from "react-hook-form";
import { isEmpty } from "../../helpers/utils";
import FieldErrors from "./field-errors";
import GeneralInputField from "./field-types/general-input-field";
import { FIELD_TYPES } from "./types";
import DropdownField from "./field-types/dropdown-field";

const CustomForm = ({ fields = [], data = {}, renderSubmitChildren = null, onSubmit = () => {} }) => {
  const { control, handleSubmit, formState: { errors }, getValues, reset } = useForm({ defaultValues: {} });

  useEffect(() => {
    if (!isEmpty(data)) {
      reset(data);
    }
  }, [data, reset]);

  const renderErrors = (id, errors) => (
    <FieldErrors
      fieldKey={id}
      errors={errors}
    />
  );

  const renderFields = (fields = []) => (
    fields.map((field, index) => {
      const { id, type, label, children = [], validations = null, className = '', ...props } = field;
      
      const validationsObject = validations instanceof Function ? validations(getValues) : validations;
      const isInvalid = !!errors[id];

      if ([FIELD_TYPES.EMAIL, FIELD_TYPES.PASSWORD, FIELD_TYPES.TEXT, FIELD_TYPES.NUMBER].find(x => x === type)) {
        return (
          <div key={index} className="field-element">
            <GeneralInputField
              key={id}
              label={label}
              id={id}
              type={type}
              validations={validationsObject}
              isInvalid={isInvalid}
              control={control}
            />
            {renderErrors(id, errors)}
          </div>
        )
      }

      if (type === FIELD_TYPES.SINGLE_SELECT) {
        const { options } = field;
        return (
          <div key={index} className="field-element">
            <DropdownField
              key={id}
              label={label}
              id={id}
              options={options}
              validations={validationsObject}
              isInvalid={isInvalid}
              control={control}
            />
            {renderErrors(id, errors)}
          </div>
        );
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

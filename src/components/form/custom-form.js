import React from "react";
import { useForm  } from "react-hook-form";
import FieldErrors from "./field-errors";
import GeneralInputField from "./field-types/general-input-field";

const CustomForm = ({ fields = [], renderSubmitChildren = <></>, onSubmit = () => {} }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const renderField = (field) => {
    const { type, label, validations = {} } = field;

    if (type == 'email' || type == 'password') {
      return (
        <div className="field-row">
          <GeneralInputField
            label={label}
            type={type}
            validations={validations}
            isInvalid={!!errors[type]}
            control={control}
          />
          <FieldErrors
            fieldKey={type}
            errors={errors}
          />
        </div>
      )
    }
    return <></>;
  };

  return (
    <form className="form" onSubmit={handleSubmit((data) => onSubmit(data))}>
      {fields.map((field) => renderField(field))}
      {renderSubmitChildren}
    </form>
  );
};

export default CustomForm;

import { FIELD_TYPES } from "../../components/form/types";

export const loginFormDefinition = [{
  id: 'loginFormRow',
  type: FIELD_TYPES.ROW,
  children: [{
    id: 'loginFormColumn',
    type: FIELD_TYPES.COLUMN,
    md: 12,
    children: [{
      id: 'emailAddress',
      label: 'Email Address',
      type: FIELD_TYPES.EMAIL,
      validations: {
        required: {
          value: true,
          message: 'Email address is required'
        },
        maxLength: {
          value: 35,
          message: 'Email addres cannot be longer than 35 characters'
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Email address is invalid"
        }
      }
    }, {
      id: 'password',
      label: 'Password',
      type: FIELD_TYPES.PASSWORD,
      validations: {
        required: {
          value: true,
          message: 'Password is required'
        },
      }
    }]
  }]
}];

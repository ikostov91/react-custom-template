import { EMAIL_ADDRESS_PATTERN, FIELD_TYPES } from '../../components/form/types';
import { IS_NEW_ID } from '../../helpers/constants';
import { mapToValueLabel } from '../../helpers/utils';

export const userDetailsFormDefinition = (noms = {}) => [{
  id: 'userDetailsFormRow',
  type: FIELD_TYPES.ROW,
  children: [{
    id: 'userDetailsFormColumn1',
    type: FIELD_TYPES.COLUMN,
    md: 6,
    children: [{
      id: 'firstName',
      label: 'First name',
      type: FIELD_TYPES.TEXT,
      validations: {
        required: {
          value: true,
          message: 'First name is required'
        }
      }
    }, {
      id: 'lastName',
      label: 'Last name',
      type: FIELD_TYPES.TEXT,
      validations: {
        required: {
          value: true,
          message: 'Last name is required'
        }
      }
    }, {
      id: 'role',
      label: 'Role',
      type: FIELD_TYPES.SINGLE_SELECT,
      options: mapToValueLabel(noms.roles),
      validations: {
        required: {
          value: true,
          message: 'Role is required'
        }
      }
    }]
  }, {
    id: 'userDetailsFormColumn2',
    type: FIELD_TYPES.COLUMN,
    md: 6,
    children: [{
      id: 'age',
      label: 'Age',
      type: FIELD_TYPES.NUMBER,
      validations: {
        min: {
          value: 0,
          message: 'Age cannot be negative or zero'
        }
      }
    }, {
      id: 'email',
      label: 'Email',
      type: FIELD_TYPES.EMAIL,
      validations: {
        required: {
          value: true,
          message: 'Email address is required'
        },
        pattern: {
          value: EMAIL_ADDRESS_PATTERN,
          message: "Email address is invalid"
        }
      }
    }]
  }]
}];

export const displayUserNames = (id, userDetails) => {
  if (id === IS_NEW_ID) {
    return 'New user';
  }

  const { firstName = '', lastName = '' } = userDetails;
  return `${firstName} ${lastName}`;
};

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
      label: 'pages.user.details.first.name.label',
      type: FIELD_TYPES.TEXT,
      validations: {
        required: {
          value: true,
          message: 'validations.user.details.first.name.required'
        }
      }
    }, {
      id: 'age',
      label: 'pages.user.details.age.label',
      type: FIELD_TYPES.NUMBER,
      validations: {
        min: {
          value: 0,
          message: 'validations.user.details.age.invalid'
        }
      }
    }, {
      id: 'role',
      label: 'pages.user.details.role.label',
      type: FIELD_TYPES.SINGLE_SELECT,
      options: mapToValueLabel(noms.roles),
      validations: {
        required: {
          value: true,
          message: 'validations.user.details.role.required'
        }
      }
    }]
  }, {
    id: 'userDetailsFormColumn2',
    type: FIELD_TYPES.COLUMN,
    md: 6,
    children: [{
      id: 'lastName',
      label: 'pages.user.details.last.name.label',
      type: FIELD_TYPES.TEXT,
      validations: {
        required: {
          value: true,
          message: 'validations.user.details.last.name.required'
        }
      }
    }, {
      id: 'email',
      label: 'pages.user.details.email.label',
      type: FIELD_TYPES.EMAIL,
      validations: {
        required: {
          value: true,
          message: 'validations.user.details.email.required'
        },
        pattern: {
          value: EMAIL_ADDRESS_PATTERN,
          message: 'validations.user.details.email.invalid'
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

import { FormattedMessage } from 'react-intl'

const Translate = ({ id, defaultMessage = '', ...values }) => {
  return (
    <FormattedMessage
      id={id}
      defaultMessage={defaultMessage}
      values={values}
    />
  );
};

export default Translate;

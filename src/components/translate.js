import { withTranslation } from 'react-i18next';

const Translate = ({ t, id, defaultMessage = '', ...values }) => {
  return (
    t(id, { ...values, defaultMessage })
  );
};

export default withTranslation()(Translate);

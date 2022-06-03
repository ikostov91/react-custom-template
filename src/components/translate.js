import { withTranslation } from 'react-i18next';

const Translate = ({ t, id, stringValues = {}, defaultMessage = '' }) => {
  return (
    t(id, { ...stringValues, defaultMessage })
  );
};

export default withTranslation()(Translate);

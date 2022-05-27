import { withTranslation } from 'react-i18next';

const Translate = ({ t, id, stringValues = {}, defaultMessage = '' }) => {
  console.log(stringValues);
  return (
    t(id, { ...stringValues, defaultMessage })
  );
};

export default withTranslation()(Translate);

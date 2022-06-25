import React from 'react';
import CardContainer from '../../components/card-container';
import CustomRow from '../../components/custom-row';
import CustomColumn from '../../components/custom-column';
import Translate from '../../components/translate';
import PageTitle from '../../components/page-title';
import Logo from '../../components/logo';
import { Trans } from 'react-i18next';

const About = () => {
  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title={<Translate id="pages.about.title.text" />}
            breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about', active: true }]}
          />
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={12}>
          <CardContainer>
            <div className="text-center pt-5 pb-5">
              <div><Logo /></div>
              <div><Translate id="pages.about.description.text" /></div>
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

export default About;

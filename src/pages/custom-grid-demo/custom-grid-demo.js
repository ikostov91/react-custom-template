import React from 'react';
import CardContainer from '../../components/card-container';
import CustomRow from '../../components/custom-row';
import CustomColumn from '../../components/custom-column';
import Translate from '../../components/translate';
import PageTitle from '../../components/page-title';

const CustomGridDemo = () => {
  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title="Custom Grid"
            breadcrumbs={['Home', 'Custom grid']}
          />
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn xs={6} width={6}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn xs={6} width={6}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={10}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={2}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

     <CustomRow>
        <CustomColumn width={9}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={3}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={8}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={4}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={7}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={5}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={6}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={6}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={5}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={5}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={2}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={4}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={4}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={4}>
          <CardContainer>
            <div className="text-center">
              <Translate id="pages.about.description.text" />
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

export default CustomGridDemo;

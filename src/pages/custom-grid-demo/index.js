import React from 'react';
import CardContainer from '../../components/card-container';
import CustomRow from '../../components/custom-row';
import CustomColumn from '../../components/custom-column';
import Translate from '../../components/translate';
import PageTitle from '../../components/page-title';

const CustomGridDemo = () => {
  const getCardContent = (width = 0) => (
    <div className="text-center py-4">
      <Translate id="pages.grid.column.description" width={width} />
    </div>
  );

  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title={<Translate id="pages.custom.grid.title.text" />}
            breadcrumbs={[{
              label: 'breadcrumbs.home', path: '/'
            }, {
              label: 'breadcrumbs.custom.grid', path: '/custom-grid', active: true
            }]}
          />
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn xs={6} width={6}>
          <CardContainer>
            {getCardContent(6)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn xs={6} width={6}>
          <CardContainer>
            {getCardContent(6)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={10}>
          <CardContainer>
            {getCardContent(10)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={2}>
          <CardContainer>
            {getCardContent(2)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

     <CustomRow>
        <CustomColumn width={9}>
          <CardContainer>
            {getCardContent(9)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={3}>
          <CardContainer>
            {getCardContent(3)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={8}>
          <CardContainer>
            {getCardContent(8)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={4}>
          <CardContainer>
            {getCardContent(4)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={7}>
          <CardContainer>
            {getCardContent(7)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={5}>
          <CardContainer>
            {getCardContent(5)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={6}>
          <CardContainer>
            {getCardContent(6)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={6}>
          <CardContainer>
            {getCardContent(6)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={5}>
          <CardContainer>
            {getCardContent(5)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={5}>
          <CardContainer>
            {getCardContent(5)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={2}>
          <CardContainer>
            {getCardContent(2)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn width={4}>
          <CardContainer>
            {getCardContent(4)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={4}>
          <CardContainer>
            {getCardContent(4)}
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={4}>
          <CardContainer>
            {getCardContent(4)}
          </CardContainer>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

export default CustomGridDemo;

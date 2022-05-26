import React from 'react';
import CardContainer from '../../components/card-container';
import CustomRow from '../../components/custom-row';
import CustomColumn from '../../components/custom-column';

const About = () => {
  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <CardContainer>
            <div className="text-center">
              This is a custom <strong>React</strong> template project.
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={6}>
          <CardContainer>
            <div className="text-center">
              First Card
            </div>
          </CardContainer>
        </CustomColumn>
        <CustomColumn width={6}>
          <CardContainer>
            <div className="text-center">
              Second CARD
            </div>
          </CardContainer>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

export default About;

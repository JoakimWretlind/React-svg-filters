import styled from 'styled-components';
import { PageSection, ImageContainer } from '../sharedStyling';

export const Section = styled.section`
  ${PageSection};
  background: linear-gradient(#BBB2AA, #CFCCC5);
`;

export const Container = styled.div`
  ${ImageContainer};
  box-shadow: 0 .4rem .8rem rgba(0,0,0,.3);
`;
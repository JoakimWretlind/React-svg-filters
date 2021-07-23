import styled from 'styled-components';
import { PageSection } from '../sharedStyling';

export const Section = styled.section`
  ${PageSection};
  background: linear-gradient(-8deg, #8F563D, #4D2E22);
`;

export const HomeLi = styled.li`
  list-style-type: disc;
  text-transform: capitalize;
  letter-spacing: .3rem;
  font-weight: 300;
  font-size: 2.4rem;
  color: #94593E;
  margin: 1.6rem 0 .2rem;
`;

export const HomeUl = styled.ul`
  background: #fff;
  padding: 3rem 5rem 3rem 6rem;
  border-radius: .4rem;
  box-shadow: 0 .5rem 1rem rgba(65,40,27,.3);
`;

export const HomeLi2 = styled.li`
    list-style-type: circle;
    font-size: 1.4rem;
    letter-spacing: .1rem;
    font-weight: 100;
    line-height: 1.6;
    margin-left: 3rem;
    color: #9F9488;
`;

import styled from 'styled-components';
import { PageSection } from '../sharedStyling';


export const Section = styled.section`
  ${PageSection};
  background: linear-gradient(#D0D9D6, #ffffff);
`;


export const MySvg = styled.svg`
    height: 0;
	  width: 0;
	  visibility: hidden;
`;

export const MyTextArea = styled.textarea`
  -webkit-filter: url("#filter");
  filter: url("#filter");
  width: 200px;
  height: 100px;
  border: 2px solid black;
  box-shadow: 0 0 0 10px transparent;
`;

export const MyImage = styled.img`
  -webkit-filter: url("#filter");
  filter: url("#filter");
  height: 100%;
  width: 90%;
  max-width: 700px;
`;
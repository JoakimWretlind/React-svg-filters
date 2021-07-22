import styled from 'styled-components';
import { PageSection } from '../sharedStyling';

export const Section = styled.section`
  ${PageSection};
  background: linear-gradient(#D0D9D6, #ffffff);
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export const MySvg = styled.svg`
  height: 0;
	width: 0;
	visibility: hidden;
`;

export const Button = styled.button`
	background: #244443;
	border: none;
  outline: none;
	border-radius: .4rem;
	color: #fff;
  font-size: 1.4rem;
	padding: 1em 1.4em;
	letter-spacing: .2rem;
  cursor: pointer;

	&:focus {
    -webkit-filter: url(#noise);
	  filter: url(#noise);
	}
`;
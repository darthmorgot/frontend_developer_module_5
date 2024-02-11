import styled from 'styled-components';
import {StyleButton} from '../../../button/style.js';
import {p} from '../../../../styled/index.js';

export const Text = styled(p)`
  margin-bottom: 14px;
`;

export const Price = styled(p)`
  width: fit-content;
  padding: 4px 8px;
  background-color: ${props => props.theme.pattensBlue};
  font-size: 14px;
  font-weight: 700;
`;

export const WrapperPriceDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionButton = styled(StyleButton)`
  width: auto;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.mineShaft};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  background-color: transparent;

  &:hover {
    background: transparent;
    text-decoration: underline;
  }

  &:active {
    box-shadow: none;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }
`;

import styled from 'styled-components';
import {StyledButton} from '../../../ui/button/style.js';

export const OrderFieldset = styled.fieldset`
  padding: 23px 20px 20px 19px;
  margin: 0 0 17px;
  border: 1px solid ${props => props.theme.blackZeroTen};
  box-shadow:
    0 0 1px 0 ${props => props.theme.blackZeroFour},
    0 2px 6px 0 ${props => props.theme.blackZeroFour},
    0 10px 20px 0 ${props => props.theme.blackZeroFour};

  h3 {
    margin-bottom: 24px;
  }
`;

export const Address = styled.div`
  margin-bottom: 17px;
`;

export const Label = styled.label`
  display: block;
`;

export const HiddenLabelText = styled.span.attrs({className: 'visually-hidden'})``;

export const Input = styled.input.attrs({
  type: 'text',
  name: 'address',
  placeholder: 'Введите адрес доставки'
})`
  width: 100%;
  padding-top: 16px;
  padding-left: 12px;
  padding-bottom: 14px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.blackZeroTen};
  background: ${props => props.theme.wildSand};

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }
`;

export const HiddenInput = styled.input.attrs({
  type: 'hidden',
  name: 'product-price'
})``;

export const ShowPrice = styled.div``;

export const SpanPrice = styled.span`
  display: block;
  margin: 0 0 5px;
  font-size: 14px;
`;

export const Output = styled.output`
  display: block;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
`;

export const SubmitButton = styled(StyledButton).attrs({type: 'submit'})`
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }

  &:disabled:hover {
    background-color: ${props => props.theme.seaBuckthorn};
  }
`;

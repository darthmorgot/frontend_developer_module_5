import styled from 'styled-components';
import {P} from '@/components/styled/index.js';

export const Section = styled.section`
  min-height: 197px;
  padding: 18px 20px 20px 20px;
  background-color: ${props => {
    if (props.$isNegative) {
      return props.theme.linen;
    } else {
      return  props.theme.chromeWhite;
    }
  }};
  background-repeat: no-repeat;
  background-position: 20px 22px;
`;

export const CardHeader = styled.div`
  margin-left: 76px;

  &--margin-left {
    margin-left: 72px;
  }

  & h3 {
    margin-bottom: ${props => {
      if (props.$isNegative) {
        return '16px';
      } else {
        return  '20px';
      }
    }};
  }
`;

export const Category = styled.span`
  display: inline-block;
  margin-top: ${props => {
    if (props.$isNegative) return '2px';
  }};
  margin-bottom: 4px;
  padding: ${props => {
    if (props.$isNegative) {
      return '4px 10px';
    } else {
      return  '2px 10px';
    }
  }};
  color: ${props => props.theme.white};
  font-size: 14px;
  line-height: 150%;
  background-color: ${props => {
    if (props.$isNegative) {
      return props.theme.flamingo;
    } else {
      return  props.theme.chelseaCucumber;
    }
  }};
`;

export const Description = styled(P)``;

import styled from 'styled-components';
import {Button} from '@/components/styled/index.js';

export const StyledTabsPanel = styled.div`
  margin-bottom: 11px;
`;

export const ButtonTabsPanel = styled(Button)`
  padding: 10px 10px 8px 12px;
  margin-right: 8px;
  margin-bottom: 5px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.blackZeroTen};

  &:nth-child(2) {
    padding-right: 11px;
  }

  &:last-child {
    padding-right: 11px;
    margin-right: 0;
  }

  &:hover {
    background-color: ${props => props.theme.chelseaCucumber};
    color: ${props => props.theme.white};
  }

  &:active {
    box-shadow: 0 4px 0 0 ${props => props.theme.blackZeroOneFour} inset;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }

  &.active {
    background-color: ${props => props.theme.chelseaCucumber};
    color: ${props => props.theme.white};
  }
`;

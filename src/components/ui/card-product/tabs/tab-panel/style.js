import styled from 'styled-components';

export const StyledTabsPanel = styled.div`
  margin-bottom: 11px;
`;

export const ButtonTabsPanel = styled.button`
  padding: 10px 10px 8px 12px;
  margin-right: 8px;
  margin-bottom: 5px;
  font-size: 14px;
  border: 1px solid rgba(0 0 0 / 0.10);

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
    box-shadow: 0 4px 0 0 rgba(0 0 0 / 0.14) inset;
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

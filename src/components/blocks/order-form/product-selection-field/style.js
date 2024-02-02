import styled from 'styled-components';
import tick from 'Images/tick.png';

export const SelectFieldset = styled.fieldset`
  padding: 23px 20px 20px 20px;
  margin: 0 0 17px;
  border: 1px solid rgba(0 0 0 / 0.10);
  box-shadow: 0 0 1px 0 rgba(0 0 0 / 0.04), 0 2px 6px 0 rgba(0 0 0 / 0.04), 0 10px 20px 0 rgba(0 0 0 / 0.04);

  h3 {
    margin-bottom: 27px;
  }
`;

export const SelectList = styled.ul`
  margin: 0 0 0 -1px;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 29px;

  &:last-child {
    margin-bottom: 6px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const SpanName = styled.span``;

export const Input = styled.input.attrs({type: 'checkbox'})``;

export const SpanMark = styled.span`
  width: 24px;
  height: 24px;
  margin-top: 1px;
  margin-right: -1px;
  border: 1px solid rgba(0 0 0 / 0.10);

  ${Input}:checked + && {
    background-image: url(${tick});
    background-color: ${props => props.theme.seaBuckthorn};
    background-position: 3px 3px;
    background-repeat: no-repeat;
  }

  ${Input}:focus + && {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }
`;


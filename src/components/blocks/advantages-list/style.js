import styled from 'styled-components';
import {Ul} from '@/components/styled/index.js';

export const Section = styled.section`
  padding-top: 101px;
  padding-bottom: 108px;
`;

export const Slogan = styled.span`
  display: block;
  margin-bottom: 62px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 115%;
`;

export const List = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 44px;
`;

export const ListItem = styled.li`
  width: 540px;
  min-height: 197px;
  margin-bottom: 20px;

  &:first-child div {
    margin-left: 72px;
  }

  &:nth-child(3) section {
    background-position: 20px 20px;
  }
`;

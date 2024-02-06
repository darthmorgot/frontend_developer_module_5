import styled from 'styled-components';
import {Swiper} from 'swiper/react';
import {SwiperSlide} from 'swiper/react';

export const Section = styled.section``;

export const ProductList = styled(Swiper)`
  height: 735px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled(SwiperSlide)`
  width: 727px;
  height: 288px;
  margin-bottom: 12px;
`;

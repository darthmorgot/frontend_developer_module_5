import styled from 'styled-components';
import {P} from '@/components/styled/index.js';

export const StyledFooter = styled.footer`
  border-top: 1px solid ${props => props.theme.blackZeroTen};
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

export const FooterCopyright = styled(P)``;

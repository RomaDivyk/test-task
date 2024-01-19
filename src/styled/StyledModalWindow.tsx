import styled from 'styled-components';
import { colors } from './Constants';

export const StyledModalWindow = styled.div``;

export const Line = styled.p`
  font-size: 10;
  margin-bottom: 1vh;
`;

export const styleModal = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: `${colors.backgroundPaper}`,
  border: `1px solid ${colors.black}`,
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
};

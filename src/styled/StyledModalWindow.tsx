import styled from 'styled-components';

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
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
};

import styled from 'styled-components';
import { colors, devices } from './Constants';

export const StyledModalWindow = styled.div``;

export const Line = styled.p`
  margin-bottom: 1vh;

  @media ${devices['4k']} {
    font-size: 1.5rem;
  }
  @media ${devices['2xl']} {
    font-size: 1.5rem;
  }
  @media ${devices.xl} {
    font-size: 1.5rem;
  }
  @media ${devices.lg} {
    font-size: 1.5rem;
  }
  @media ${devices.md} {
    font-size: 1rem;
  }
  @media ${devices.sm} {
    font-size: 1rem;
  }
  @media ${devices.xs} {
    font-size: 0.5rem;
  }
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

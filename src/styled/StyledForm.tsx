import styled from 'styled-components';

import { devices } from './Constants';

export const StyledDiv = styled.div`
  display: flex;
  justifycontent: space-between;
  top: 50%;
  left: 50%;
  width: 100%;
  bgcolor: background.paper;
  border: 1px solid #000;
  boxshadow: 24;
  p: 4;
  overflow: hidden;
`;

export const StyledForm = styled.form`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;

  @media ${devices['4k']} {
    width: 20%;
  }
  @media ${devices['2xl']} {
    width: 20%;
  }
  @media ${devices.xl} {
    width: 30%;
  }
  @media ${devices.lg} {
    width: 40%;
  }
  @media ${devices.md} {
    width: 40%;
  }
  @media ${devices.sm} {
    width: 50%;
  }
  @media ${devices.xs} {
    width: 50%;
  }
`;

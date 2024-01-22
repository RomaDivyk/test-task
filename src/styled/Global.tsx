import { createGlobalStyle } from 'styled-components';

import { fonts } from './Constants';

export const Global = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
  font-family: ${fonts.consolas};
  justify-content: center;
  text-align: center;   
}`;

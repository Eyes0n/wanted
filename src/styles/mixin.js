import { css } from 'styled-components';

const FlexSet = (horizon, vertical, direction) => css`
  display: flex;
  justify-content: ${horizon || 'center'};
  align-items: ${vertical || 'center'};
  flex-direction: ${direction || 'row'};
`;

const mixin = { FlexSet };

export default mixin;

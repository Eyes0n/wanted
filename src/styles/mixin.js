import { css } from 'styled-components';

const FlexSet = (horizon, vertical, direction) => css`
  display: flex;
  justify-content: ${horizon || 'center'};
  align-items: ${vertical || 'center'};
  flex-direction: ${direction || 'row'};
`;

const MakeNthChildDisplayNone = (start, end) => {
  let styles = '';

  for (let i = start; i < end; i++) {
    styles += `&:nth-child(${i}) {
      display: none;
    }`;
  }

  return css`
    ${styles}
  `;
};

const mixin = { FlexSet, MakeNthChildDisplayNone };

export default mixin;

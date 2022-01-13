import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinForA11yText } from 'styles/mixins';
import PALETTE from 'styles/palette';

export const StyledHiddenInput = styled.input`
  display: none;
`;

export const StyledCheckbox = styled.span`
  width: 24px;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${PALETTE.GRAY_300};
  background: white;
  border-radius: 3px;
  color: ${PALETTE.WHITE};

  ${(props) =>
    props.checked &&
    css`
      border: 1px solid ${props.color};
      background: ${props.color};
    `}
`;

export const StyledA11y = styled.span`
  ${mixinForA11yText}
`;

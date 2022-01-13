import styled from '@emotion/styled';
import PALETTE from 'styles/palette';

export const StyledTodo = styled.div``;

export const StyledInput = styled.input`
  margin-left: 8px;
  color: ${PALETTE.BLACK};
  outline: none;
  border: none;
  border-bottom: 0px solid ${PALETTE.GRAY_400};
  font-size: 16px;
  width: ${(props) => props.width}px;
  padding: 0;

  &:focus {
    border-bottom-width: 2px;
    cursor: text;
  }
`;

import styled from '@emotion/styled';
import PALETTE from 'styles/palette';

export const StyledTitle = styled.div`
  display: flex;
`;

export const StyledPointColor = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  margin-right: 20px;
`;

export const StyledTitleText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

export const StyledCaretSymbol = styled.span`
  margin-left: auto;
`;

export const StyledTodoList = styled.ul`
  border-top: 1px solid ${PALETTE.GRAY_300};
  margin: 0;
  margin-top: 14px;
  padding: 0;
  padding-top: 24px;
`;

export const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 14px;
`;

import styled from '@emotion/styled';
import CollapsibleCard from 'components/CollapsibleCard';
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

export const StyledCollapsibleCard = styled(CollapsibleCard)`
  border-left: 5px solid ${(props) => props.color};
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

export const StyledAddButton = styled.button`
  width: 48px;
  height: 48px;
  background: ${(props) => props.color};
  border-radius: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;
  border: none;
  position: absolute;
  right: 20px;
  bottom: 22px;
  cursor: pointer;
`;

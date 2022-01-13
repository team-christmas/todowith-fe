import CollapsibleCard from 'components/CollapsibleCard';
import ColoredCheckbox from 'components/ColoredCheckbox';
import { useState } from 'react';
import {
  StyledCaretSymbol,
  StyledLabel,
  StyledPointColor,
  StyledTitle,
  StyledTitleText,
  StyledTodoItem,
  StyledTodoList
} from './styles';

const TodoTargetCard = ({ title, color, todos }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <CollapsibleCard
      collapseState={isCollapsed}
      collapseCallback={setIsCollapsed}
      title={
        <StyledTitle>
          <StyledPointColor color={color} />
          <StyledTitleText>{title}</StyledTitleText>
          <StyledCaretSymbol>{isCollapsed ? 'v' : '^'}</StyledCaretSymbol>
        </StyledTitle>
      }
    >
      <StyledTodoList>
        {todos.map((todo) => (
          <StyledTodoItem key={todo.id}>
            <ColoredCheckbox
              color={color}
              label={<StyledLabel>{todo.label}</StyledLabel>}
              defaultChecked={todo.defaultChecked}
            />
          </StyledTodoItem>
        ))}
      </StyledTodoList>
    </CollapsibleCard>
  );
};

export default TodoTargetCard;

import Todo from 'components/Todo';
import { useState } from 'react';
import {
  StyledAddButton,
  StyledCaretSymbol,
  StyledCollapsibleCard,
  StyledListItem,
  StyledTitle,
  StyledTitleText,
  StyledTodoList
} from './styles';

const TodoTargetCard = ({ title, color, todos }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // 더미 데이터를 이용해 업데이트 구현
  const [_, rerender] = useState();
  const updateTodo = (id) => (e) => {
    const todo = todos.find((item) => item.id === id);
    todo.label = e.target.value;

    rerender([]);
  };

  const addTodo = () => {};

  return (
    <StyledCollapsibleCard
      collapseState={isCollapsed}
      collapseCallback={setIsCollapsed}
      color={color}
      title={
        <StyledTitle>
          <StyledTitleText>{title}</StyledTitleText>
          <StyledCaretSymbol>{isCollapsed ? 'v' : '^'}</StyledCaretSymbol>
        </StyledTitle>
      }
    >
      <StyledTodoList>
        {todos.map((todo) => (
          <StyledListItem key={todo.id}>
            <Todo
              defaultChecked={todo.defaultChecked}
              color={color}
              content={todo.label}
              setContent={updateTodo(todo.id)}
            />
          </StyledListItem>
        ))}
      </StyledTodoList>
      <StyledAddButton color={color} onClick={addTodo}>
        +
      </StyledAddButton>
    </StyledCollapsibleCard>
  );
};

export default TodoTargetCard;

import ColoredCheckbox from 'components/ColoredCheckbox';
import { useInputTextWidth } from './hooks';
import { StyledInput, StyledTodo } from './styles';

const Todo = ({ color, defaultChecked, setContent, content }) => {
  const [ref, width] = useInputTextWidth();

  return (
    <StyledTodo>
      <ColoredCheckbox color={color} defaultChecked={defaultChecked} />
      <StyledInput
        ref={ref}
        width={width}
        onChange={setContent}
        disabled={!setContent}
        value={content}
      />
    </StyledTodo>
  );
};

export default Todo;

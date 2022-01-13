import { useCheckbox } from './hooks';
import { StyledA11y, StyledCheckbox, StyledHiddenInput } from './styles';

const ColoredCheckbox = ({ color, label, setState = () => {}, defaultChecked = false }) => {
  const [checked, onChange] = useCheckbox(defaultChecked, setState);

  return (
    <label>
      <StyledHiddenInput type='checkbox' checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} color={color}>
        V<StyledA11y>체크박스 {checked ? '체크됨' : '체크 해제됨'}</StyledA11y>
      </StyledCheckbox>
      {label}
    </label>
  );
};

export default ColoredCheckbox;

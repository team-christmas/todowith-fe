import { useHeight, useToggle } from './hooks';
import { StyledBody, StyledCard, StyledTitle } from './styles';

const CollapsibleCard = ({
  title,
  children,
  collapseState = false,
  collapseCallback = () => {},
  className = ''
}) => {
  const [isCollapsed, toggle] = useToggle(collapseState, collapseCallback);
  const { ref, height } = useHeight();
  let bodyHeight = 'auto';
  if (height !== undefined) {
    bodyHeight = isCollapsed ? 0 : height;
  }

  return (
    <StyledCard className={className}>
      <StyledTitle onClick={toggle}>{title}</StyledTitle>
      <StyledBody ref={ref} height={bodyHeight}>
        {children}
      </StyledBody>
    </StyledCard>
  );
};

export default CollapsibleCard;

import { useHeight, useToggle } from './hooks';
import { StyledBody, StyledCard, StyledTitle } from './styles';

const CollapsibleCard = ({ title, body, isUnfold = false, className }) => {
  const [isVisible, toggle] = useToggle(isUnfold);
  const { ref, height } = useHeight();
  let bodyHeight = 'auto';
  if (height !== undefined) {
    bodyHeight = isVisible ? height : 0;
  }

  return (
    <StyledCard className={className}>
      <StyledTitle onClick={toggle}>{title}</StyledTitle>
      <StyledBody ref={ref} height={bodyHeight}>
        {body}
      </StyledBody>
    </StyledCard>
  );
};

export default CollapsibleCard;
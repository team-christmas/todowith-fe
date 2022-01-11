import { useToggle } from './hooks';
import { StyledBody, StyledCard, StyledTitle } from './styles';

const CollapsibleCard = ({ title, body, isUnfold = false, className }) => {
  const [isVisible, toggle] = useToggle(isUnfold);

  return (
    <StyledCard className={className}>
      <StyledTitle onClick={toggle}>{title}</StyledTitle>
      <StyledBody isVisible={isVisible}>{body}</StyledBody>
    </StyledCard>
  );
};

export default CollapsibleCard;

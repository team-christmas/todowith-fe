import styled from '@emotion/styled';

export const StyledCard = styled.div`
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 6px;
  padding: 16px;
  position: relative;
`;

export const StyledTitle = styled.div`
  cursor: pointer;
`;

export const StyledBody = styled.div`
  transition-property: opacity, height;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  height: ${({ height }) => (Number(height) ? `${height}px` : height)};
  opacity: ${({ height }) => (Number(height) ? 1 : 0)};
  overflow: hidden;
`;

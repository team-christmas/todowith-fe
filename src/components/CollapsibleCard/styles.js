import styled from '@emotion/styled';

export const StyledCard = styled.div`
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 6px;
  padding: 16px;
`;

export const StyledTitle = styled.div``;

export const StyledBody = styled.div`
  transition: height 0.1s ease-in;
  height: ${({ height }) => (Number(height) ? `${height}px` : height)};
  overflow: hidden;
`;

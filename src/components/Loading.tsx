import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// 로딩 스피너 컴포넌트
const Loading = ({ height }: { height: number | string }) => {
  return (
    <Container height={height}>
      <Spinning />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: ${(props: { height: number | string }) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(359deg);
  }
`;

const Spinning = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #fff;
  border-right-color: #1a8cff;
  border-top-color: #1a8cff;
  border-radius: 100%;
  animation: ${spin} 1s infinite linear;
`;

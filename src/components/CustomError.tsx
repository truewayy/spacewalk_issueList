import styled from '@emotion/styled';

// 일시적인 오류 컴포넌트
const CustomError = () => (
  <div
    style={{
      textAlign: 'center',
      height: '320px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
    일시적인 오류로 데이터를 불러오지 못했습니다😅
    <br /> 잠시후 다시 시도해주세요!
    <RetryButton onClick={() => window.location.reload()}>
      다시 시도
    </RetryButton>
  </div>
);

export default CustomError;

const RetryButton = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background-color: #1a8cff;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

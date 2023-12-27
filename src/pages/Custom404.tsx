import styled from '@emotion/styled';

const Custom404 = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
    해당 URL은 없는 페이지에요.😅
    <br />
    <br /> 찾으려는 페이지의 주소가 잘못 입력되었거나, 주소의 변경 혹은 삭제로
    인해 사용하실 수 없어요.
    <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
    <RetryButton onClick={() => (window.location.href = '/home')}>
      메인 페이지로 이동
    </RetryButton>
  </div>
);

export default Custom404;

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

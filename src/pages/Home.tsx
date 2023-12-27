import styled from '@emotion/styled';

import IssueStateFilter from '../components/Home/IssueStateFilter';
import Pagination from '../components/Home/Pagination';
import SortOptionSelect from '../components/Home/SortOptionSelect';
import Table from '../components/Home/Table';

const Home = () => {
  return (
    <Container>
      <IssueBox>
        <div
          style={{ width: '100%', height: '1px', backgroundColor: '#DFE5EB' }}
        />
        <Title>이슈정리</Title>
        <TableBox>
          <FilterBox>
            {/* 이슈 상태 필터 */}
            <IssueStateFilter />
            {/* 정렬 옵션 선택 */}
            <SortOptionSelect />
          </FilterBox>
          {/* 이슈 리스트 테이블 */}
          <Table />
          {/* 페이지네이션 */}
          <Pagination />
        </TableBox>
      </IssueBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IssueBox = styled.div`
  width: 1200px;
  padding: 72px 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 72px 40px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #14171a;
`;

const TableBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

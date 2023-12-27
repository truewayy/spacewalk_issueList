import styled from '@emotion/styled';

import IssueStateFilter from '../components/Home/IssueStateFilter';
import Pagination from '../components/Home/Pagination';
import SortOptionSelect from '../components/Home/SortOptionSelect';
import Table from '../components/Home/Table';

const Home = () => {
  return (
    <Container>
      <IssueBox>
        <Title>이슈정리</Title>
        <TableBox>
          <FilterBox>
            <IssueStateFilter />
            <SortOptionSelect />
          </FilterBox>
          <Table />
        </TableBox>
        <Pagination />
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

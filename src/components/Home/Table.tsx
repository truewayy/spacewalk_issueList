import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

import { useGetIssueList } from '../../features/queries';
import { Issue, SortOption } from '../../interfaces/issue';
import convertedDate from '../../utils/dateConvert';
import CustomError from '../CustomError';
import Loading from '../Loading';

const Table = () => {
  const [searchParams] = useSearchParams();
  const state = searchParams.get('state') as Issue['state'];
  const sort = searchParams.get('sort') as SortOption;
  const page = Number(searchParams.get('page')) || 1;

  const { data: issues, isLoading } = useGetIssueList(
    'facebook',
    'react',
    state,
    sort,
    page,
    10,
  );

  const isError = !isLoading && (issues === undefined || issues === null);

  return (
    <TableContainer>
      <TableHeader>
        <Row style={{ minWidth: '60px' }}>번호</Row>
        <Row id='title'>제목</Row>
        <Row style={{ minWidth: '120px' }}>작성자</Row>
        <Row style={{ minWidth: '90px', textAlign: 'center' }}>작성일</Row>
        <Row id='updated' style={{ minWidth: '90px', textAlign: 'center' }}>
          수정일
        </Row>
        <Row style={{ minWidth: '60px' }}>코멘트 수</Row>
      </TableHeader>
      <div>
        {isLoading && <Loading height='320px' />}
        {isError && <CustomError />}
        {issues?.map((issue) => (
          <TableBody key={issue.id}>
            <Row style={{ minWidth: '60px' }}>{issue.number}</Row>
            <Row
              id='title'
              style={{
                maxWidth: '421px',
                width: '421px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}>
              {issue.title}
            </Row>
            <Row
              style={{
                minWidth: '120px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}>
              {issue.user.login}
            </Row>
            <Row style={{ minWidth: '90px' }}>
              {convertedDate(issue.created_at)}
            </Row>
            <Row id='updated' style={{ minWidth: '90px' }}>
              {convertedDate(issue.updated_at)}
            </Row>
            <Row style={{ minWidth: '60px', textAlign: 'right' }}>
              {issue.comments}
            </Row>
          </TableBody>
        ))}
      </div>
    </TableContainer>
  );
};
export default Table;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
`;

const TableHeader = styled.div`
  width: 100%;
  padding: 6px 12px;
  display: flex;
  align-items: flex-start;
  gap: 35px;
  border-radius: 8px;
  background-color: #f5f8fa;
`;

const TableBody = styled.div`
  width: 100%;
  padding: 8px 12px;
  display: flex;
  align-items: flex-start;
  gap: 35px;
  color: #5a6066;
`;

const Row = styled.div`
  color: #5a6066;
  font-size: 14px;
  &#title {
    min-width: 250px;
    max-width: 421px;
    width: 421px;
  }
`;

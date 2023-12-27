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
        <div style={{ width: '60px' }}>번호</div>
        <div style={{ width: '421px' }}>제목</div>
        <div style={{ width: '120px' }}>작성자</div>
        <div style={{ width: '90px', textAlign: 'center' }}>작성일</div>
        <div style={{ width: '90px', textAlign: 'center' }}>수정일</div>
        <div style={{ width: '60px' }}>코멘트 수</div>
      </TableHeader>
      <div>
        {isLoading && <Loading height='350px' />}
        {isError && <CustomError />}
        {issues?.map((issue) => (
          <TableBody key={issue.id}>
            <div style={{ width: '60px' }}>{issue.number}</div>
            <div
              style={{
                width: '421px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}>
              {issue.title}
            </div>
            <div
              style={{
                width: '120px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}>
              {issue.user.login}
            </div>
            <div style={{ width: '90px' }}>
              {convertedDate(issue.created_at)}
            </div>
            <div style={{ width: '90px' }}>
              {convertedDate(issue.updated_at)}
            </div>
            <div style={{ width: '60px', textAlign: 'right' }}>
              {issue.comments}
            </div>
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

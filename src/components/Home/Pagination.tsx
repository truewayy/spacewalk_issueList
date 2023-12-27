import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import arrowLeft from '../../assets/arrow-left.svg';
import { useGetIssueList } from '../../features/queries';
import { Issue, SortOption } from '../../interfaces/issue';

// 페이지네이션 컴포넌트
const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get('state') as Issue['state'];
  const sort = searchParams.get('sort') as SortOption;
  const page = Number(searchParams.get('page')) || 1;

  const [pages, setPages] = useState<number[]>(
    Array.from({ length: page < 5 ? 5 : page }, (_, i) => i + 1),
  );

  const { data: issues } = useGetIssueList(
    'facebook',
    'react',
    state,
    sort,
    page + 1,
    10,
  );
  const isLast = (issues?.length ?? 0) < 10;

  const activePageId = (item: number) => {
    if (item === page) return 'active';
    return '';
  };

  const slicePages = (page: number) => {
    if (page < 5) return pages.slice(0, 5);
    return pages.slice(page - 5, page);
  };

  const prevPage = () => {
    if (page === 1) return;
    searchParams.set('page', String(page - 1));
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    if (isLast) return;
    searchParams.set('page', String(page + 1));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!isLast) {
      setPages((prev) => [...prev, prev.length + 1]);
    }
  }, [isLast]);

  return (
    <Container>
      <img
        alt='prev'
        src={arrowLeft}
        width='15px'
        height='15px'
        onClick={prevPage}
        onKeyDown={prevPage}
        style={{
          cursor: 'pointer',
        }}
      />
      <div style={{ display: 'flex', gap: '8px' }}>
        {slicePages(page).map((page) => (
          <Page
            key={page}
            id={activePageId(page)}
            onClick={() => {
              searchParams.set('page', String(page));
              setSearchParams(searchParams);
            }}>
            {page}
          </Page>
        ))}
      </div>
      <img
        alt='next'
        src={arrowLeft}
        width='15px'
        height='15px'
        onClick={nextPage}
        onKeyDown={nextPage}
        style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}
      />
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
`;

const Page = styled.button`
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 6px;
  color: #7b848c;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &#active {
    background-color: #f0f4f7;
    color: #14171a;
  }
`;

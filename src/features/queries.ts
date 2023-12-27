import { useQuery } from 'react-query';

import { getIssues } from '../apis/issues';
import { Issue, SortOption } from '../interfaces/issue';

const ISSUE_LIST = 'issueList';

// 이슈 리스트 가져오는 커스텀 훅 (useQuery 사용)
export const useGetIssueList = (
  owner: string,
  repo: string,
  state?: Issue['state'],
  sort?: SortOption,
  page?: number,
  per_page?: number,
) => {
  const query = useQuery([ISSUE_LIST, owner, repo, state, sort, page], () =>
    getIssues(owner, repo, state, sort, page, per_page),
  );
  return query;
};

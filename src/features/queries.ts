import { useQuery } from 'react-query';

import { getIssues } from '../apis/issues';
import { Issue, SortOption } from '../interfaces/issue';

const ISSUE_LIST = 'issueList';

export const useGetIssueList = (
  owner: string,
  repo: string,
  state?: Issue['state'],
  sort?: SortOption,
  page?: number,
  per_page?: number,
) => {
  const query = useQuery(
    [ISSUE_LIST, owner, repo, state, sort, page],
    () => getIssues(owner, repo, state, sort, page, per_page),
    {
      keepPreviousData: true,
    },
  );
  return query;
};

import { Issue, SortOption } from '../interfaces/issue';
import instance from './instance';

// 이슈 리스트 가져오는 API
export const getIssues = async (
  owner: string,
  repo: string,
  state: Issue['state'] = 'all',
  sort: SortOption = 'created',
  page = 1,
  per_page = 10,
) => {
  try {
    const { data } = await instance.get<Issue[]>(`/${owner}/${repo}/issues`, {
      params: {
        state,
        sort,
        page,
        per_page,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

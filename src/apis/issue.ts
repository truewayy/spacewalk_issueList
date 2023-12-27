import { Issue } from '../interfaces/issue';
import instance from './instance';

export const getIssues = async (
  owner: string,
  repo: string,
  state: Issue['state'] = 'all',
  sort: 'created' | 'updated' | 'comments' = 'created',
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

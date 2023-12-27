import { Issue } from '../interfaces/issue';
import instance from './instance';

export const getIssues = async (owner: string, repo: string) => {
  try {
    const data = await instance.get<Issue[]>(`/${owner}/${repo}/issues`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

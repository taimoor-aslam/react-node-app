import { Story } from "../models/models";

const API_BASE_URL = "http://localhost:3000/api/v1";

/**
 * fetch top stories
 */
export const fetchTopStories = async (): Promise<Story[]> => {
  const res = await fetch(`${API_BASE_URL}/stories`);
  return res.json();
};

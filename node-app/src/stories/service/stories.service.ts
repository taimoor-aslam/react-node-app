import axios from 'axios';
import { Story } from '../model/stories.model';

const API_KEY = 'LR7HvVXBsQay6LtJWZGNMCRMtQNzByVs'; // TODO: save this as a env variable

/**
 * getStories
 */
export async function getStories(): Promise<Story[]> {
  try {
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`);
    return res.data.results.map((story) => {
      return {
        title: story.title,
        abstract: story.abstract,
        url: story.url,
        createdDate: story.created_date,
        imageUrl: story.multimedia.find((item) => item.format === 'threeByTwoSmallAt2X')?.url,
      };
    });
  } catch (e) {
    console.error('[StoriesController][getStories] unable to get stories', e);
    throw new Error(e);
  }
}

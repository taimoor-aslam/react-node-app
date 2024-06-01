import express from 'express';
import * as service from '../service/stories.service';

/**
 * getStories
 *
 * @param req request
 * @param res response
 */
export async function getStories(req: express.Request, res: express.Response): Promise<express.Response> {
  try {
    const result = await service.getStories();
    return res.status(200).send(result);
  } catch (e) {
    console.error('[StoriesController][getStories] unable to get stories');
    return res.status(500).send({ message: e.message });
  }
}

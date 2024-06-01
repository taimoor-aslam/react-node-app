import express from 'express';
import * as core from 'express-serve-static-core';
import * as controller from '../controller/stories.controller';
const router = express.Router();

/**
 * stories routes
 */
export function routes(): core.Router {
  router.route('/stories').get(controller.getStories);

  return router;
}

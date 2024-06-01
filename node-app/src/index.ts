import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as healthCheckRoutes from './util/server-health-check';
import * as storiesRoutes from './stories/route/stories.route';

const app = express();
const BASE_PATH = '/api/v1';

// @ts-ignore
app.use(express.json());
app.use(cors({ origin: true }));

app.use(
  morgan(
    function (tokens, req: express.Request, res) {
      return [
        tokens.method(req, res),
        '-',
        tokens.url(req, res),
        '-',
        'Query:',
        JSON.stringify(req.query),
        '-',
        'Body',
        JSON.stringify(req.body),
        '-',
        'Params',
        JSON.stringify(req.params),
        '-',
        'Status:',
        tokens.status(req, res),
        '-',
        'Response Time:',
        tokens['response-time'](req, res),
        'ms',
      ].join(' ');
    },
    {
      skip(req) {
        return req.originalUrl.includes('ping');
      },
    }
  )
);

app.use(BASE_PATH, healthCheckRoutes.routes());
app.use(BASE_PATH, storiesRoutes.routes());

const APP_PORT = process.env.APP_PORT ? +process.env.APP_PORT : 3000;

app.listen(APP_PORT, () => {
  console.log(`Node search service app listening at http://localhost:${APP_PORT}`);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT - Terminating.');
  // eslint-disable-next-line no-process-exit
  process.exit();
});

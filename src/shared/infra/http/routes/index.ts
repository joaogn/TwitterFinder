import { Router } from 'express';

import searchTweetsRouter from '@modules/twitter/infra/http/routes/search.routes';

const routes = Router();

routes.use('/twitter/search', searchTweetsRouter);

export default routes;

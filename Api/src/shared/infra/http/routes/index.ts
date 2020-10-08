import { Router } from 'express';

import searchTweetsRouter from '@modules/twitter/infra/http/routes/search.routes';
import profileTweetsRouter from '@modules/twitter/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/twitter/search', searchTweetsRouter);
routes.use('/twitter/users', profileTweetsRouter);

export default routes;

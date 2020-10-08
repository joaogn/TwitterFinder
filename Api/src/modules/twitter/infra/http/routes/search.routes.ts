import { Router } from 'express';
import SearchTweetsController from '@modules/twitter/infra/http/controllers/SearchTweetsController';

const twitterRouter = Router();

const searchTweetsController = new SearchTweetsController();

twitterRouter.get('/', searchTweetsController.index);

export default twitterRouter;

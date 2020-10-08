import { Router } from 'express';
import ProfileController from '@modules/twitter/infra/http/controllers/ProfileController';

const twitterRouter = Router();

const profileController = new ProfileController();

twitterRouter.get('/:user_id', profileController.index);

export default twitterRouter;

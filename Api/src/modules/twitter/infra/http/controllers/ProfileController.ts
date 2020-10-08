import { Request, Response } from 'express';
import ShowProfileService from '@modules/twitter/services/ShowProfileService';
import { container } from 'tsyringe';

export default class ProfileController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const showProfile = container.resolve(ShowProfileService);
    const profile = await showProfile.execute(user_id);
    return response.json(profile);
  }
}

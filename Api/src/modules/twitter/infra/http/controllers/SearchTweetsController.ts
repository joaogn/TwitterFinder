import { Request, Response } from 'express';
import SearchTweetsService from '@modules/twitter/services/SearchTweetsService';
import { container } from 'tsyringe';

export default class SearchTweetsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { q } = request.body;
    const searchTweets = container.resolve(SearchTweetsService);
    const tweets = await searchTweets.execute(q);
    return response.json(tweets);
  }
}

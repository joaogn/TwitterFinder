import { injectable, inject } from 'tsyringe';
import ITwitterApiProvider from '@modules/twitter/providers/TwitterApiProvider/models/ITwitterApiProvider';
import ISearchTweetsResponseDTO from '@modules/twitter/providers/TwitterApiProvider/dtos/ISearchTweetsResponseDTO';

@injectable()
class SearchTweetsService {
  constructor(
    @inject('TwitterApiProvider')
    private twitterApiProvider: ITwitterApiProvider,
  ) {}

  public async execute(keyword: string): Promise<ISearchTweetsResponseDTO> {
    const tweets = await this.twitterApiProvider.searchTweets(keyword);

    return tweets;
  }
}

export default SearchTweetsService;

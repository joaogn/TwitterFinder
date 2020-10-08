import { injectable, inject } from 'tsyringe';
import ITwitterApiProvider from '@modules/twitter/providers/TwitterApiProvider/models/ITwitterApiProvider';
import IProfileResponseDTO from '@modules/twitter/providers/TwitterApiProvider/dtos/IProfileResponseDTO';

@injectable()
class SearchTweetsService {
  constructor(
    @inject('TwitterApiProvider')
    private twitterApiProvider: ITwitterApiProvider,
  ) {}

  public async execute(user_id: string): Promise<IProfileResponseDTO> {
    const profile = await this.twitterApiProvider.showProfile(user_id);
    const {
      id,
      name,
      screen_name,
      location,
      description,
      profile_image_url_https,
      followers_count,
      friends_count,
      statuses_count,
    } = profile;

    return {
      id,
      name,
      screen_name,
      location,
      description,
      profile_image_url_https,
      followers_count,
      friends_count,
      statuses_count,
    };
  }
}

export default SearchTweetsService;

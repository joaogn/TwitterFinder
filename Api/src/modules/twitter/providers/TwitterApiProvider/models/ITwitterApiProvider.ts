import ISearchTweetsResponseDTO from '../dtos/ISearchTweetsResponseDTO';
import IProfileResponseDTO from '../dtos/IProfileResponseDTO';

export default interface IHashProvider {
  searchTweets(keyword: string): Promise<ISearchTweetsResponseDTO>;
  showProfile(id: string): Promise<IProfileResponseDTO>;
}

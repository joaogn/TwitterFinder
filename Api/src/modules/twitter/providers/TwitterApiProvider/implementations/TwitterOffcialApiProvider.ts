import AppError from '@shared/infra/errors/AppErrors';
import axios, { AxiosInstance } from 'axios';
import ITwitterApiProvider from '../models/ITwitterApiProvider';
import ISearchTweetsResponseDTO from '../dtos/ISearchTweetsResponseDTO';
import IProfileResponseDTO from '../dtos/IProfileResponseDTO';

export default class TwitterOffcialApiProvider implements ITwitterApiProvider {
  twitterApi: AxiosInstance;

  constructor() {
    this.twitterApi = axios.create({
      baseURL: process.env.TWITTER_API_URL,
    });
    this.twitterApi.defaults.headers.Authorization = `Bearer ${process.env.TWITTER_API_TOKEN}`;
  }

  public async searchTweets(
    keyword: string,
  ): Promise<ISearchTweetsResponseDTO> {
    try {
      const params = new URLSearchParams([['q', keyword],['result_type','recent'],['count','10']]);

      const response = await this.twitterApi.get('/search/tweets.json', {
        params,
      });

      return response.data;
    } catch (err) {
      throw new AppError(err.response.data.message, 500);
    }
  }

  public async showProfile(user_id: string): Promise<IProfileResponseDTO> {
    try {
      const params = new URLSearchParams([['user_id', user_id]]);

      const response = await this.twitterApi.get('/users/show.json', {
        params,
      });

      return response.data;
    } catch (err) {
      throw new AppError(err.response.data.message, 500);
    }
  }
}

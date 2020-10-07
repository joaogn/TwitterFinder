import { injectable } from 'tsyringe';

@injectable()
class SearchTweetsService {
  public async execute(): Promise<string> {
    return 'Hello World';
  }
}

export default SearchTweetsService;

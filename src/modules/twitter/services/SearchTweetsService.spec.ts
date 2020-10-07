import SearchTweetsService from './SearchTweetsService';

let searchTweetsService: SearchTweetsService;

describe('SearchTweetsService', () => {
  beforeEach(() => {
    searchTweetsService = new SearchTweetsService();
  });

  it('should be return hello word', async () => {
    const tweets = await searchTweetsService.execute();
    expect(tweets).toBe('Hello World');
  });
});

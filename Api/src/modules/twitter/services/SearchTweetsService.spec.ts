import AppError from '@shared/infra/errors/AppErrors';
import FakeTwitterOffcialApiProvider from '@modules/twitter/providers/TwitterApiProvider/fakes/FakeTwitterOffcialApiProvider';
import SearchTweetsService from './SearchTweetsService';

let fakeTwitterOffcialApiProvider: FakeTwitterOffcialApiProvider;
let searchTweetsService: SearchTweetsService;

describe('SearchTweetsService', () => {
  beforeEach(() => {
    fakeTwitterOffcialApiProvider = new FakeTwitterOffcialApiProvider();
    searchTweetsService = new SearchTweetsService(
      fakeTwitterOffcialApiProvider,
    );
  });

  it('should be able return result of search by keyword', async () => {
    const tweets = await searchTweetsService.execute('NBA');
    expect(tweets).toHaveProperty('statuses');
  });

  it('should not be able return result of search by keyword', async () => {
    await expect(searchTweetsService.execute('error')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});

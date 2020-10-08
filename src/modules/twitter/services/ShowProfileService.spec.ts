import AppError from '@shared/infra/errors/AppErrors';
import FakeTwitterOffcialApiProvider from '@modules/twitter/providers/TwitterApiProvider/fakes/FakeTwitterOffcialApiProvider';
import ShowProfileService from './ShowProfileService';

let fakeTwitterOffcialApiProvider: FakeTwitterOffcialApiProvider;
let showProfileService: ShowProfileService;

describe('SearchTweetsService', () => {
  beforeEach(() => {
    fakeTwitterOffcialApiProvider = new FakeTwitterOffcialApiProvider();
    showProfileService = new ShowProfileService(fakeTwitterOffcialApiProvider);
  });

  it('should be able return result of search by keyword', async () => {
    const user = await showProfileService.execute('2321465406');
    expect(user.id).toBe(2321465406);
  });

  it('should not be able return result of search by keyword', async () => {
    await expect(showProfileService.execute('error')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});

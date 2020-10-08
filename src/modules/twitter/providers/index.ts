import { container } from 'tsyringe';

import ITwitterApiProvider from './TwitterApiProvider/models/ITwitterApiProvider';

import TwitterOffcialApiProvider from './TwitterApiProvider/implementations/TwitterOffcialApiProvider';

container.registerSingleton<ITwitterApiProvider>(
  'TwitterApiProvider',
  TwitterOffcialApiProvider,
);

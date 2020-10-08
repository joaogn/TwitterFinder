import AppError from '@shared/infra/errors/AppErrors';
import ITwitterApiProvider from '../models/ITwitterApiProvider';
import ISearchTweetsResponseDTO from '../dtos/ISearchTweetsResponseDTO';
import IProfileResponseDTO from '../dtos/IProfileResponseDTO';

export default class TwitterOffcialApiProvider implements ITwitterApiProvider {
  public async searchTweets(
    keyword: string,
  ): Promise<ISearchTweetsResponseDTO> {
    if (keyword === 'error') {
      throw new AppError('Twitter Api error', 500);
    }
    return {
      statuses: [
        {
          created_at: 'Thu Oct 08 00:41:03 +0000 2020',
          id: 1314002834375897000,
          id_str: '1314002834375897089',
          text:
            '@kamalaharris will confiscate all "assault" weapons, which is an undefined firearm.  This will do nothing for gun c… https://t.co/N9cZceCLXh',
          truncated: true,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'KamalaHarris',
                name: 'Kamala Harris',
                id: 30354991,
                id_str: '30354991',
                indices: [0, 13],
              },
            ],
            urls: [
              {
                url: 'https://t.co/N9cZceCLXh',
                expanded_url:
                  'https://twitter.com/i/web/status/1314002834375897089',
                display_url: 'twitter.com/i/web/status/1…',
                indices: [117, 140],
              },
            ],
          },
          metadata: {
            iso_language_code: 'en',
            result_type: 'recent',
          },
          source:
            '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: 30354991,
          in_reply_to_user_id_str: '30354991',
          in_reply_to_screen_name: 'KamalaHarris',
          user: {
            id: 1002016125113126900,
            id_str: '1002016125113126912',
            name: 'LONG LIVE THE REPUBLIC',
            screen_name: 'American1946',
            location: '#MAGA, California, USA',
            description:
              '#IamAngry #TrumpCOVID #WhiteHouse #2020Election #USCCA #SelfDefense #Trump #MAGA - USCCA Instructor & Counselor- Veteran #GOP Retired Attorney #AmericanPatriot',
            url: 'https://t.co/rafpByNhVB',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/rafpByNhVB',
                    expanded_url: 'http://www.shotsfired.pro',
                    display_url: 'shotsfired.pro',
                    indices: [0, 23],
                  },
                ],
              },
              description: {
                urls: [],
              },
            },
            protected: false,
            followers_count: 559,
            friends_count: 1952,
            listed_count: 2,
            created_at: 'Thu May 31 02:37:15 +0000 2018',
            favourites_count: 2211,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 26916,
            lang: null,
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url:
              'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https:
              'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url:
              'http://pbs.twimg.com/profile_images/1313899989328773120/CWBR9FAW_normal.jpg',
            profile_image_url_https:
              'https://pbs.twimg.com/profile_images/1313899989328773120/CWBR9FAW_normal.jpg',
            profile_banner_url:
              'https://pbs.twimg.com/profile_banners/1002016125113126912/1527735152',
            profile_link_color: '1B95E0',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: null,
            follow_request_sent: null,
            notifications: null,
            translator_type: 'none',
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: true,
          lang: 'en',
        },
        {
          created_at: 'Thu Oct 08 00:40:53 +0000 2020',
          id: 1314002793523486700,
          text:
            'RT @DiegoAlcalaPR: Puerto Rico’s non-elected governor endorsed a person for which she cannot vote for.',
          entities: {},
          user: {
            id: 427852501,
            screen_name: 'Kay_undefined',
            location: '229 ',
            profile_image_url_https:
              'https://pbs.twimg.com/profile_images/1207833810408214531/UMuQ_xQu_normal.jpg',
          },
        },
      ],
    } as ISearchTweetsResponseDTO;
  }

  public async showProfile(user_id: string): Promise<IProfileResponseDTO> {
    if (user_id === 'error') {
      throw new AppError('Twitter Api error', 500);
    }

    return {
      id: 2321465406,
      name: 'João Graça Neto',
      location: '',
      screen_name: 'Mucilon_Ba',
      followers_count: 28,
      friends_count: 38,
      statuses_count: 42,
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/582716202721648641/d5Mec2x2_normal.jpg',
    } as IProfileResponseDTO;
  }
}

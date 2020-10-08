import React from 'react';

import { Container, User, Tweet, ImagesWrapper } from './styles';

interface ITweetMedia {
  id: number;
  media_url_https: string;
  type: string;
}

export interface Tweet {
  created_at: string;
  id: number;
  text: string;
  user: {
    id: number;
    screen_name: string;
    location: string;
    profile_image_url_https: string;
  };
  entities: {
    media: ITweetMedia[];
  };
}

interface Props {
  openProfileModal(id: string): void;
  tweet: Tweet;
}

const TweetCard: React.FC<Props> = ({ tweet, openProfileModal }) => {
  return (
    <>
      <Container>
        <User onClick={() => openProfileModal(String(tweet.user.id))}>
          <img src={tweet.user.profile_image_url_https} alt="Avatar" />
          <p>{tweet.user.screen_name}</p>
        </User>
        <Tweet>
          <p>{tweet.text}</p>
          <ImagesWrapper>
            {tweet.entities.media &&
              tweet.entities.media.map(
                media =>
                  media.type === 'photo' && (
                    <img
                      key={media.id}
                      src={media.media_url_https}
                      alt="teste"
                    />
                  ),
              )}
          </ImagesWrapper>
        </Tweet>
      </Container>
    </>
  );
};

export default TweetCard;

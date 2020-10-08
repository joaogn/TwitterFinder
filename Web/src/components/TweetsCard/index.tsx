import React from 'react';
import { FiChevronDown, FiChevronUp, FiXCircle } from 'react-icons/fi';
import TweetCard, { Tweet } from './TweetCard';
import { Container, TopBar, TweetsWrapper } from './styles';

export type Tweets = Array<Tweet>;

interface Props {
  id: string;
  keyword: string;
  tweets: Tweets;
  isOpen: boolean;
  setIsOpen(id: string, value: boolean): void;
  close(id: string): void;
  openProfileModal(id: string): void;
}

const TweetsCard: React.FC<Props> = ({
  id,
  keyword,
  tweets,
  isOpen,
  setIsOpen,
  close,
  openProfileModal,
}) => {
  return (
    <Container>
      <TopBar>
        <div>
          {isOpen ? (
            <FiChevronUp size={30} onClick={() => setIsOpen(id, false)} />
          ) : (
            <FiChevronDown size={30} onClick={() => setIsOpen(id, true)} />
          )}
          <h3>{`Keyword: ${keyword}`}</h3>
        </div>

        <FiXCircle size={30} onClick={() => close(id)} />
      </TopBar>
      {isOpen && (
        <TweetsWrapper>
          {tweets.map(tweet => (
            <TweetCard tweet={tweet} openProfileModal={openProfileModal} />
          ))}
        </TweetsWrapper>
      )}
    </Container>
  );
};

export default TweetsCard;

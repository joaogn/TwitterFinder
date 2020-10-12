import React, { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import api from '../../service/api';
import { Container, Finder } from './styles';
import TweetsCard, { Tweets } from '../../components/TweetsCard/index';
import ProfileModal from '../../components/ProfileModal';

interface SearchList {
  id: string;
  keyword: string;
  tweets: Tweets;
  isOpen: boolean;
}

const Home: React.FC = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchList, setSearchList] = useState<SearchList[]>([]);
  const [keyword, setKeyword] = useState('');
  const [profileModalId, setProfileModalId] = useState('');
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);

  const openProfileModal = useCallback(async id => {
    setProfileModalId(id);
    setProfileModalIsOpen(prevProfileModalIsOpen => !prevProfileModalIsOpen);
  }, []);

  const setIsOpen = useCallback(async (id, value) => {
    setSearchList(prevSearchList =>
      prevSearchList.map(search => {
        if (search.id === id) {
          return { ...search, isOpen: value };
        }
        return search;
      }),
    );
  }, []);

  const closeSearch = useCallback(async id => {
    setSearchList(prevSearchList =>
      prevSearchList.filter(search => search.id !== id),
    );
  }, []);

  const searchTweets = useCallback(async () => {
    setSearchLoading(true);
    try {
      const params = new URLSearchParams([['q', keyword]]);
      const tweetsResponse = await api.get('/twitter/search', {
        params
      });
      setSearchList(prevSearchList => [
        {
          id: uuidv4(),
          keyword,
          tweets: tweetsResponse.data.statuses,
          isOpen: true,
        },
        ...prevSearchList,
      ]);
      setSearchLoading(false);
    } catch (err) {
      toast.error('Error searching for tweets try later', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSearchLoading(false);
    }
  }, [keyword]);

  const handleChange = useCallback(e => {
    setKeyword(e.target.value);
  }, []);

  return (
    <>
      <ProfileModal
        isOpen={profileModalIsOpen}
        id={profileModalId}
        setIsOpen={setProfileModalIsOpen}
      />
      <Container>
        <h1>Twitter Finder</h1>
        <Finder>
          <input value={keyword} onChange={handleChange} />
          <button type="button" onClick={searchTweets}>
            {searchLoading ? (
              <ClipLoader size={25} color="#fff" />
            ) : (
              <FiSearch color="#fff" size={25} />
            )}
          </button>
        </Finder>
        {searchList.map(search => (
          <TweetsCard
            id={search.id}
            keyword={search.keyword}
            tweets={search.tweets}
            isOpen={search.isOpen}
            close={closeSearch}
            setIsOpen={setIsOpen}
            openProfileModal={openProfileModal}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;

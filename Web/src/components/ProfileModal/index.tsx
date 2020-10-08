import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import { Container, LoadWrapper, ProfileContent, StatsBar } from './styles';
import api from '../../service/api';

interface User {
  id: number;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  profile_image_url_https: string;
  followers_count: number;
  friends_count: number;
  statuses_count: number;
}

interface Props {
  id: string;
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

const UserModal: React.FC<Props> = ({ id, isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<User>({} as User);

  useEffect(() => {
    async function getProfileData() {
      setLoading(true);
      try {
        const profileResponse = await api.get(`/twitter/users/${id}`);
        setProfile(profileResponse.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error('It was not possible to find the profile of this user', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsOpen(false);
      }
    }
    if (id) {
      getProfileData();
    }
  }, [id]);

  return (
    <Container isOpen={isOpen}>
      <FiX size={30} onClick={() => setIsOpen(false)} />
      {loading ? (
        <LoadWrapper>
          <ClipLoader size={50} color="#1da1f2" />
        </LoadWrapper>
      ) : (
        <ProfileContent>
          <img src={profile.profile_image_url_https} alt="Avatar" />
          <h3>{profile.screen_name}</h3>
          <h4>{profile.name}</h4>
          <h5>{profile.location}</h5>
          <StatsBar>
            <div>
              <h4>Tweets:</h4>
              <h3>{profile.statuses_count}</h3>
            </div>
            <div>
              <h4>Followers:</h4>
              <h3>{profile.followers_count}</h3>
            </div>
            <div>
              <h4>Friends:</h4>
              <h3>{profile.friends_count}</h3>
            </div>
          </StatsBar>
        </ProfileContent>
      )}
    </Container>
  );
};

export default UserModal;

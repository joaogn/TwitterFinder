interface ITeetMedia {
  media_url_https: string;
  type: string;
}

interface ITweet {
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
    media: ITeetMedia[];
  };
}

export default interface ISearchTweetsResponseDTO {
  statuses: ITweet[];
}

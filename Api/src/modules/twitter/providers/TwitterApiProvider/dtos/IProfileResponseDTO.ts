export default interface ISearchTweetsResponseDTO {
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

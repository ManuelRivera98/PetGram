import { useQuery } from '@apollo/react-hooks';
// eslint-disable-next-line import/no-extraneous-dependencies
import gql from 'graphql-tag';

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;
const useGetPhotos = (categoryId) => {
  const { loading, data, error } = useQuery(GET_PHOTOS, { variables: { categoryId } });
  return { loading, data, error };
};

export default useGetPhotos;

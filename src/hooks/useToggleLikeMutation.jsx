/* eslint-disable import/no-extraneous-dependencies */
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;

const useToggleLikeMutation = (id) => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO, { variables: { input: { id } } });
  return { toggleLikePhoto };
};

export default useToggleLikeMutation;

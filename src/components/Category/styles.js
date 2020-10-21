import styled from 'styled-components';

import { Link as LinkRouter } from '@reach/router';

import fadeIn from '../../styles/animation';
import skeletonAnimation from '../../styles/skeletonAnimtion';

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  ${(props) => props.loading === 'true' && skeletonAnimation()}
  ${fadeIn()}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  margin-bottom: 10px;
`;

export const Div = styled.div`
  ${(props) => props.loading === 'true' && skeletonAnimation()}
  ${fadeIn()}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 15%;
  height: 10px;
  width: 60px;
  margin-bottom: 10px;
  margin-left: 8px
`;

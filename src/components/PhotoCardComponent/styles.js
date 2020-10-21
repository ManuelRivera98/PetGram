import styled from 'styled-components';

import fadeIn from '../../styles/animation';
import skeletonAnimation from '../../styles/skeletonAnimtion';

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
`;

export const Article = styled.article`
min-height: 200px;
`;

export const Img = styled.img`
  ${(props) => props.loading === 'true' && skeletonAnimation()}
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Div = styled.div`
  ${(props) => props.loading === 'true' && skeletonAnimation()}
  ${fadeIn()}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 15%;
  height: 15px;
  width: 80px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;

export const Container = styled.div`
display:flex;
align-items:center;
`;

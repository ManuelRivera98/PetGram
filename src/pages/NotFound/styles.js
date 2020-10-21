import styled from 'styled-components';

import { Link as LinkRouter } from '@reach/router';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 1rem;
`;

export const Message = styled.h1`
  font-size: 20px;
  font-weight: 100;
  color: red;
`;


export const Link = styled(LinkRouter)`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin: 8px 8px;
  color: #8d00ff;
  text-decoration: none;
  width: 150px;
  height: 32px;
  border-radius: 6px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

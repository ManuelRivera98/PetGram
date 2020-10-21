import styled from 'styled-components';

import { Link as LinkRouter } from '@reach/router';
import fadeIn from '../../styles/animation';
import skeletonAnimation from '../../styles/skeletonAnimtion';

export const Link = styled(LinkRouter)`
    border-radius: 8px;
    box-shadow: 008px rgba(0,0,0,.3);
    display: inline-block;
    margin: 1%;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export const Grid = styled.div`
    padding-top: 32px;
`;

export const Image = styled.img`
    ${(props) => props.loading === 'true' && skeletonAnimation()}
    ${fadeIn()}
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    `;

export const Icon = styled(LinkRouter)`
    display: block;
    color: black;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    width: 50px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    text-decoration: none;
    padding-left: 10px;
`;

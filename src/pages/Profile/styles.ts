import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  /*
  display: flex;
  align-items: stretch;
  flex-direction: column; */
`;

export const Header = styled.header`
  height: 144px;
  background: #28262e;

  display: flex;
  align-items: center;

  > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    svg {
      color: #999591;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;

  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-500px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 0.5s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 36px;
  position: relative;
  align-self: center;

  img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    input {
      display: none;
    }
  }
`;

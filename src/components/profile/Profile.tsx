import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

const Profile: FunctionComponent = () => {
  return (
    <ProfileStyle>
      <ProfileText>
        안녕하세요. <br />
        Frontend Developer 김민철입니다.
      </ProfileText>
      <ProfileThumb aria-hidden={true}>
        <span>${`{MC}`}</span>
      </ProfileThumb>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  margin: 30px auto 0;
`;

const ProfileText = styled.p`
  font-size: 2rem;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProfileThumb = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffdc4e;
  user-select: none;

  > span {
    position: relative;
    display: block;
    margin-top: 5px;
    font-size: 2rem;
    line-height: 1;
    font-weight: bold;
    color: #000;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;

    > span {
      font-size: 1rem;
    }
  }
`;

export default Profile;

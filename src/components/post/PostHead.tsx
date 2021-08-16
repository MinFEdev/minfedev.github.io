import styled from '@emotion/styled';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScreenOut from 'components/screenOut/ScreenOut';
import React, { FunctionComponent } from 'react';

export interface PostHeadProps {
  title: string;
  date: string;
  categories: string[];
  thumbnail: string;
}

const PostHead: FunctionComponent<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  const goBackPage = () => window.history.back();

  return (
    <PostHeadStyle style={{ backgroundImage: thumbnail }}>
      <PostHeadInfoStyle>
        <PrevIcon onClick={goBackPage}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <ScreenOut label="리스트로 돌아가기" />
        </PrevIcon>
        <Title>{title}</Title>
        <PostData>
          <div>{categories.join(' / ')}</div>
          <div>{date}</div>
        </PostData>
      </PostHeadInfoStyle>
    </PostHeadStyle>
  );
};

const PostHeadStyle = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  object-fit: cover;
  fill: brightness(0.25);
  background-size: cover;
  background-repeat: none;
  background-attachment: fixed;
  background-color: #ceb13f;
`;

const PostHeadInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #fff;
  box-sizing: border-box;
`;

const PrevIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`;

export default PostHead;

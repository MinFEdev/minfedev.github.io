import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  link: string;
}

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  link,
}) => {
  return (
    <PostItemStyle>
      <PostTitle>
        <Link to={link}>{title}</Link>
      </PostTitle>
      <PostSummary>{summary}</PostSummary>
      <MetaInfoWrapper>
        <time dateTime={date}>{date}</time>
        <HashList>
          {categories.map(cate => (
            <li key={cate}>
              <button type="button">#{cate}</button>
            </li>
          ))}
        </HashList>
      </MetaInfoWrapper>
      <PostLink to={link}>READ POST</PostLink>
    </PostItemStyle>
  );
};

const PostItemStyle = styled.article`
  padding: 1em 0 1.25rem;
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
`;

const PostTitle = styled.h4`
  font-size: 1.5rem;
  > a {
    display: block;
    color: #ffdc4e;
  }
`;

const PostSummary = styled.p`
  margin-top: 10px;
  line-height: 1.45;
  font-size: 1rem;
  color: #fff;
`;

const MetaInfoWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  color: #c6d8e0;

  > span {
    display: inline-flex;
  }
`;

const HashList = styled.ul`
  display: inline-flex;
  margin-left: 10px;

  li > button {
    &:hover {
      text-decoration: underline;
    }
  }

  > li + li {
    margin-left: 5px;

    &::before {
      content: ', ';
    }
  }
`;

const PostLink = styled(Link)`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  font-size: 0.75rem;
  letter-spacing: 2px;
`;

export default PostItem;

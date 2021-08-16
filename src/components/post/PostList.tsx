import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';

export type PostType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
    };
  };
};

interface PostListProps {
  selectedCategory: string;
  posts: PostType[];
}

const PostList: FunctionComponent<PostListProps> = ({
  selectedCategory,
  posts,
}) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <PostListStyle ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { ...rest },
          },
        }: PostType) => (
          <PostItem link={slug} key={id} {...rest} />
        ),
      )}
    </PostListStyle>
  );
};

const PostListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 50px auto;
`;

export default PostList;

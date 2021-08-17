import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';

import CategoryList, {
  CategoryListProps,
} from 'components/category/CategoryList';
import PostList, { PostType } from 'components/post/PostList';
import Template from 'components/template/Template';
import Profile from 'components/profile/Profile';

interface IndexPageProps {
  location: {
    search: string;
    pathname: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = ({
  location: { search, pathname },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(location);
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <Template pathname={pathname}>
      <Profile />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`;

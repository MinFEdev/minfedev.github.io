import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Template from './Template';
import PostHead, { PostHeadProps } from 'components/post/PostHead';
import PostContent from 'components/post/PostContent';

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: PostHeadProps;
          };
        },
      ];
    };
  };
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: { html, frontmatter },
  } = edges[0];
  return (
    <React.Fragment>
      <Template>
        <PostHead {...frontmatter} />
        <PostContent html={html} />
      </Template>
    </React.Fragment>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
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

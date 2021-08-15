import React, { FunctionComponent } from 'react';

import CategoryList from 'components/category/CategoryList';
import PostList from 'components/post/PostList';
import Template from 'components/template/Template';

const CATEGORY_LIST = {
  ALL: 5,
  Web: 3,
  Mobile: 2,
};

const IndexPage: FunctionComponent = () => {
  return (
    <Template>
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
    </Template>
  );
};

export default IndexPage;

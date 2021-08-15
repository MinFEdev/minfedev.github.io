import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryList: FunctionComponent<CategoryListProps> = ({
  selectedCategory,
  categoryList,
}) => {
  return (
    <CategoryListStyle>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem>
          <CategoryLink
            to={`/?category=${name}`}
            active={name === selectedCategory}
            key={name}
          >
            #{name}({count})
          </CategoryLink>
        </CategoryItem>
      ))}
    </CategoryListStyle>
  );
};

const CategoryListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 768px;
  margin: 100px auto 0;
`;

const CategoryItem = styled.li`
  position: relative;
  & + & {
    margin-left: 10px;
  }
`;

const CategoryLink = styled(({ active, to, ...props }: GatsbyLinkProps) => (
  <Link to={to} {...props} />
))`
  padding: 5px 0;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 18px;
  text-decoration: none;
`;

export default CategoryList;

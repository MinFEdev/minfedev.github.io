import { useMemo, useRef } from 'react';
import { PostType } from 'components/post/PostList';
import { MutableRefObject } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLUListElement | null>;
  postList: PostType[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = (
  selectedCategory: string,
  posts: PostType[],
): useInfiniteScrollType => {
  const containerRef: MutableRefObject<HTMLUListElement | null> =
    useRef<HTMLUListElement>(null);
  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount(value => value + 1);
      observer.disconnect();
    },
  );

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;

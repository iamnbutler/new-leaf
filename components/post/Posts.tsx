import { allPosts } from "contentlayer/generated"

const sortedPosts = allPosts.sort((a, b) => {
  const dateA = a.date_created;
  const dateB = b.date_created;
  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }

  return 0;
});

export const posts = sortedPosts
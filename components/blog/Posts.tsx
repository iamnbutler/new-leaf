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

export function usePost(slug: string) {
  const post = posts.find(q => q.slug === slug)

  if (post !== undefined) {
    return post
  } else {
    throw new Error(`usePost: Post ${slug} couldn't be found!`)
  }
}

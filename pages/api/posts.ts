import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "content/post");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

function buildPosts() {
  let posts: Post[] = postFilePaths.map(file => {
    const source = fs.readFileSync(file);
    const { content, data } = matter(source);
    let post: any = {
      content: content
    }
    data.map(item => post[item] = item)
    return post
  })

  return posts
}

export interface Post {
  uuid: string,
  title: string,
  description: string,
  date_created: string,
  featured: boolean,
  tags: string[]
  content: string
}

export type Posts = Post[]

export const posts: Posts = buildPosts()
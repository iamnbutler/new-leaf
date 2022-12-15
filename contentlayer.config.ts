import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { v4 as uuid } from 'uuid';
import slugify from 'slugify';

// [Contentlayer field types reference](https://www.contentlayer.dev/docs/reference/source-files/field-types)

const slugifyOptions = {
  replacement: '-',           // replace spaces with replacement character, defaults to `-`
  remove: /[*+~.()'"!:@]/g,   // remove characters that match regex, defaults to `undefined`
  lower: true,                // convert to lower case, defaults to `false`
  strict: true,               // strip special characters except replacement, defaults to `false`
  locale: 'en-US',            // language code of the locale to use
  trim: true                  // trim leading and trailing replacement chars, defaults to `true`
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Post Title",
      required: true,
    },
    description: {
      type: "string",
      description: "A short, one-line summary",
      required: true,
    },
    date_created: {
      type: "string",
      description: "Publish date of the post",
      required: true,
    },
    featured: {
      type: "boolean",
      description: "A featured post, may affect if the post shows up",
      required: true,
    },
  },
  computedFields: {
    uuid: {
      type: "string",
      resolve: () => uuid(),
    },
    slug: {
      type: "string",
      resolve: (post) => slugify(post.title, slugifyOptions),
    },
    url: {
      type: "string",
      resolve: (post) => `/posts/${slugify(post.title, slugifyOptions)}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {},
})

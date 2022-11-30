import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: {
      type: 'string',
      required: true
    },
    alt: {
      type: 'string',
      required: true
    }
  },
}))

const TextPost = defineDocumentType(() => ({
  name: 'TextPost',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'markdown',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    images: {
      type: 'list',
      of: Image,
      required: false
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [TextPost],
})
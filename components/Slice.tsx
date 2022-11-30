import { AspectRatio, FeatureColor } from "./lib"

type PostType =
  | "profile"
  | "text"
  | "textWithImage"
  | "gallery"

export interface Post {
  type: PostType
  id: string,
  content: {
    title: string,
    date: string,
  },
  featureImage?: {
    src: string
    alt: string
    aspectRatio: AspectRatio
  }
}

export enum Layout {
  Text,
  HeroImage,
  ImageBackground
}

interface SliceProps {
  content: Post
  layout: Layout
  color: FeatureColor
}

export default function Slice({ content, layout, color }: SliceProps) {
  return (
    <section>
      {layout}
    </section>
  )
}
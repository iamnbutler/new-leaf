import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/24/solid";
import { Post } from "contentlayer/generated";

export default function Link({ item }: { item: Post }) {
  const { url, title, featured, date_created, description } = item
  let current = useRouter().asPath === url;

  return (
    <NextLink href={url} aria-current={current && "page"}>
      <div className={`
        space-y-[6px] max-w-[360px] px-3 mx-2 py-2 rounded font-mono
        bg-transparent hover:bg-surface
      `}>
        <div className="flex space-x-1 items-center">
          <span className="truncate text-sm text-secondary">{date_created}</span>
          {featured && (
            <span className="">
              <StarIcon className="w-3 h-3 text-orange-light" />
            </span>
          )}
        </div>
        <div className="flex space-x-1 items-center">
          <span className={`${current ? `text-orange-light` : `text-primary`} truncate`}>{title}</span>
        </div>
        <p className="text-light-3 text-sm text-light text-secondary line-clamp-3">{description}</p>
      </div>
    </NextLink>
  );
}

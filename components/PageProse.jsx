import { markdownH1 } from "./Markdown";
import { formatDistance } from "date-fns"

export default function PageProse({
  title = "Page Title",
  description,
  date,
  children,
}) {
  return (
    <>
      <div className="px-8">
        <div className="text-lg"></div>
        {children && (
          <main className="py-12 text-xl text-primary">
            <article className="pb-12">
              <p className="text-sm text-secondary opacity-60">Posted {formatDistance(new Date(date), new Date, { addSuffix: true })}</p>
              <h1 className={markdownH1}>{title}</h1>
              <p className="italic opacity-60">{description}</p>
              {children}
            </article>

          </main>
        )}
      </div>
    </>
  );
}

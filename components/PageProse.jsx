import { markdownH1 } from "./Markdown";
import { formatDistance } from "date-fns"
import { TopDivider, BottomDivider } from "./post/Divider";

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
              <header>
                <TopDivider />
                <h1 className={markdownH1}>{title}</h1>
                <p className="text-md text-secondary opacity-60">Posted {formatDistance(new Date(date), new Date, { addSuffix: true })}</p>
                <BottomDivider />
              </header>

              {children}
            </article>

          </main>
        )}
      </div>
    </>
  );
}

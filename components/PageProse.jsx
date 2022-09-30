import { markdownH1 } from "./Markdown";

export default function PageProse({
  title = "Page Title",
  description,
  children,
}) {
  return (
    <>
      <div className="px-8">
        <div className="text-lg"></div>
        {children && (
          <main className="mt-6 text-xl text-primary">
            <div className="mb-12">
              <h1 className={markdownH1}>{title}</h1>
              <p className="italic opacity-60">{description}</p>
            </div>
            {children}
          </main>
        )}
      </div>
    </>
  );
}

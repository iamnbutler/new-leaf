export default function SkipNav() {
  return (
    <a
      className="absolute top-8 -left-[999px] z-50
      bg-surface rounded-md border border-border px-2 py-1 text-secondary font-bold drop-shadow-2xl text-sm
      focus:left-8"
      href="#main-content"
      id="skip-nav"
    >
      Skip Navigation
    </a>
  );
}

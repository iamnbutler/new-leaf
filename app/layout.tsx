import "./reset.css";
import "./global.css";
import "./typography.css";
import "./code.css";
import Header from "./header"

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme='dark'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
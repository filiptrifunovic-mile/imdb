import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "Search movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "IMDB Clone",
  description: "Search movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}

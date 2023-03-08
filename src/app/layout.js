import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";

export const metadata = {
  title: "IMDB Clone",
  description: "Search movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

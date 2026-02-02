import { Albert_Sans } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Shodashi",
  description: "Shodashi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body className={`flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]`} style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
        <Header />
        <div style={{ height: "3.5rem" }} aria-hidden="true" />
        <main className="flex-1 ">{children}</main>
        <footer className="bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="container-page">
            <div className="flex h-20 items-center">
              <p className="text-sm muted">
                © {new Date().getFullYear()} Shodashi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

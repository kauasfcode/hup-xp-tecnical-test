
import "./globals.css";
import QueryProvider from "./providers/QueryProvider";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={""}>
      <QueryProvider>
        {children}
      </QueryProvider>
      </body>
    </html>
  );
}

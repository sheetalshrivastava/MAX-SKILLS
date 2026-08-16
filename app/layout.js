import "./globals.scss";

export const metadata = {
  title: "MaxSkills",
  description: "Learning Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
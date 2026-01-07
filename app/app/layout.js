export const metadata = {
  title: "Happy Birthday ❤️",
  description: "A romantic birthday surprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

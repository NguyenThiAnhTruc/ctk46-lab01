import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Thị Ánh Trúc | CTK46A",
  description:
    "Trang chủ cá nhân của Nguyễn Thị Ánh Trúc - MSSV 2212479, lớp CTK46A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

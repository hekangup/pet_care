import "./globals.css";
import AnchorScroller from "./AnchorScroller";

export const metadata = {
  title: "毛孩子浴所 | 宠物洗护店",
  description:
    "毛孩子浴所提供宠物洗澡、精修造型、SPA护理、猫咪低压洗护和接送服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <AnchorScroller />
        {children}
      </body>
    </html>
  );
}

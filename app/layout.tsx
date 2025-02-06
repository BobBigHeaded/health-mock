import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Health Mock",
  description: "Something Something Medical Stuff",
};
// Key for google api bs: AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen flex-col">
          <div className="bg-[#0A5F94] h-[100px] min-w-screen flex flex-row justify-between px-[80px]">
            <a href="/dashboard">
              <img src="assets/home_button.png"/>
            </a>
            <div className="flex flex-row justify-end text-[#FFFFFF] items-center font-[inter] text-[36px] gap-[250px]">
              <a href="/forecast">Forecast</a>
              <a href="/info">Info</a>
              <a href="/login">Login</a>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

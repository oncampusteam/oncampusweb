import "./globals.css";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body_cont">
        <div className="topbar_div">
        <Topbar />
        </div>
        <div className="bottom">
        <div className="sidebar_div">
        <Sidebar />
        </div>
        <div className="child_div">
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}

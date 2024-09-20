import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      {/* placeholder of dynamic component loading */}
      <div style={{minHeight:'90vh'}} className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;

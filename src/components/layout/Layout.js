import layoutCss from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={layoutCss.main}>{children}</main>
    </div>
  );
};

export default Layout;

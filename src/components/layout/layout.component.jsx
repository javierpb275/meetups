import "./layout.styles.css";
import MainNavigation from "./main-navigation.component";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;

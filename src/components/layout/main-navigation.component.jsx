import { Link } from "react-router-dom";
import "./main-navigation.styles.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

    import {Link} from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li> <Link to="/">All Meet Ups</Link> </li>
          <li> <Link to="/newmeet">New Meet Ups</Link> </li>
          <li> <Link to="/favorites">Favorites</Link> </li>

        </ul>
      </nav> 
    </header>
  );
}

export default MainNavigation;

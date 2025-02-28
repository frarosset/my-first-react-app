import { Link } from "react-router-dom";

function ReactRouterView() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <a href="profile">Profile page (a - reloads the page)</a>
          </li>
          <hr />
          <li>
            <Link to="profile">
              Profile page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profile/popeye">
              Profile Popeye page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profile/spinach">
              Profile Spinach page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profile/oliveOyl">
              Profile Olive Oyl page (Link - client side rendering)
            </Link>
          </li>
          <hr />
          <li>
            <Link to="profileDynamic">
              ProfileDynamic page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profileDynamic/popeye">
              ProfileDynamic Popeye page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profileDynamic/spinach">
              ProfileDynamic Spinach page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profileDynamic/oliveOyl">
              ProfileDynamic Olive Oyl page (Link - client side rendering)
            </Link>
          </li>
          <hr />
          <li>
            <Link to="unknown">Error page (Link - client side rendering)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ReactRouterView;

import { Link } from "react-router-dom";

function ReactRouterView() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <a href="profile/spinach">Profile page (a - reloads the page)</a>
          </li>
          <li>
            <Link to="profile">
              Profile page (Link - client side rendering)
            </Link>
          </li>
          <li>
            <Link to="profileDynamic">
              ProfileDynamic page (Link - client side rendering)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ReactRouterView;

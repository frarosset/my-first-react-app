import App from "../../App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Profile from "./Profile.jsx";
import DefaultProfile from "./DefaultProfile.jsx";
import Spinach from "./Spinach.jsx";
import Popeye from "./Popeye.jsx";
import ProfileDynamic from "./ProfileDynamic.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
  {
    path: "profileDynamic/:name",
    element: <ProfileDynamic />,
  },
];

export default routes;

import { useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import OliveOyl from "./OliveOyl";
import Popeye from "./Popeye";

const ProfileDynamic = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : name === "oliveOyl" ? (
        <OliveOyl />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default ProfileDynamic;

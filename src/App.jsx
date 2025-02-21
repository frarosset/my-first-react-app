import "./styles/App.css";
import ReactComponentsView from "./components/01.ReactComponents/ReactComponentsView.jsx";
import JsxView from "./components/02.Jsx/JsxView.jsx";
import RenderingTechniquesView from "./components/03.RenderingTechniques/RenderingTechniquesView.jsx";
import PropsView from "./components/05.Props/PropsView.jsx";
import StateView from "./components/06.State/StateView.jsx";
import EffectsView from "./components/07.Effects/EffectsView.jsx";

// reactComponents, jsx, renderingTechniques, props, state, effects
const view = "effects";

function App() {
  switch (view) {
    case "reactComponents":
      return <ReactComponentsView />;
    case "jsx":
      return <JsxView />;
    case "renderingTechniques":
      return <RenderingTechniquesView />;
    case "props":
      return <PropsView />;
    case "state":
      return <StateView />;
    case "effects":
      return <EffectsView />;
  }
}

export default App;

import "./styles/App.css";
import ReactComponentsView from "./components/01.ReactComponents/ReactComponentsView.jsx";
import JsxView from "./components/02.Jsx/JsxView.jsx";
import RenderingTechniquesView from "./components/03.RenderingTechniques/RenderingTechniquesView.jsx";
import PropsView from "./components/05.Props/PropsView.jsx";
import StateView from "./components/06.State/StateView.jsx";
import EffectsView from "./components/07.Effects/EffectsView.jsx";
import RefsView from "./components/08.Refs/RefsView.jsx";
import MemoView from "./components/09.Memo/MemoView.jsx";
import ReactRouterView from "./components/10.ReactRouter/ReactRouterView.jsx";
import FetchingDataView from "./components/11.FetchingData/FetchingDataView.jsx";
import TestingView from "./components/12.Testing/TestingView.jsx";

// reactComponents, jsx, renderingTechniques, props, state, effects, refs, reactRouter, fetchingData, testing
const view = "testing";

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
    case "refs":
      return <RefsView />;
    case "memo":
      return <MemoView />;
    case "reactRouter":
      return <ReactRouterView />;
    case "fetchingData":
      return <FetchingDataView />;
    case "testing":
      return <TestingView />;
  }
}

export default App;

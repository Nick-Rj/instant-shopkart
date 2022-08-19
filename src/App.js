import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from "./entrypoint/NavigationComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;

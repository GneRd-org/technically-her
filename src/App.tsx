import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { IndexRoute } from "./routes";
import "regenerator-runtime/runtime";
import "core-js/stable";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </>
  );
}

export default App;

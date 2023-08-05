import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { IndexRoute } from "./routes";

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

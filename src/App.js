import Home from "./pages/Home";
import Women from "./pages/Men";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Man from "./pages/Man";
import NotFound from "./pages/NotFound";
import Men from "./pages/Women";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/men/:manId" element={<Man />} />
          <Route path="/women" element={<Women />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

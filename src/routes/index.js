import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutMenu from "../layout";
import { PageHome } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMenu />}>
          <Route path="/" element={<PageHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

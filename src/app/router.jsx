import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Play from "../pages/Play";
import Ranking from "../pages/Ranking";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

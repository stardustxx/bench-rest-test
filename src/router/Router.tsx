import { Layout } from "layouts";
import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() =>
  import("../pages/Home").then((module) => ({
    default: module.Home,
  }))
);

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import User from "../components/User";
import ButtonCalculate from "../components/ButtonCalculate";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="a" element={<User name="Artem" age={17} />} />
      <Route path="b" element={<ButtonCalculate op={7} />} />
    </Routes>
  );
};

export default Router;
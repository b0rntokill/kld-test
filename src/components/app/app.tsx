import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import UserData from "../../pages/user-data";
import UserPalette from "../../pages/user-palette";
import MainFrame from "../main-frame/main-frame";

// TODO цикл редирикта на settings сделан специально, можно было и 404 страницу сообразить.

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Settings} element={<MainFrame />}>
        <Route path={AppRoute.UserData} element={<UserData />} />
        <Route path={AppRoute.Palette} element={<UserPalette />} />
      </Route>
      <Route path="*" element={<Navigate to={AppRoute.Settings} />} />
    </Routes>
  );
}

export default App;

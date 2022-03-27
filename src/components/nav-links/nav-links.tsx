import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import "./nav-links.scss";

function NavLinks(): JSX.Element {
  return (
    <ul className="nav-link">
      <li>
        {/* TODO можно и линку в отдельный компонент/css-класс вынести. */}
        <Link to={AppRoute.UserData}>Форма</Link>
      </li>
      <li>
        <Link to={AppRoute.Palette}>Палитра</Link>
      </li>
    </ul>
  );
}

export default NavLinks;

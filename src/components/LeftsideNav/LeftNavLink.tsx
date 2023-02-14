import React from "react";
import "./LeftsideNav.css";
import { useNavigate } from "react-router-dom";
interface LeftNavLinkInterface {
  icon: any;
  title: string;
  onClick?: any;
}
export default function LeftNavLink(props: LeftNavLinkInterface) {
  const closeNav = () => {
    document
      .querySelector(".leftsidenav-main")
      ?.classList.remove("leftside-navafter");
  };
  return (
    <div className="LeftNavLink">
      {<props.icon />}
      <h3
        onClick={() => {
          props.onClick();
          closeNav();
        }}
      >
        {props.title}
      </h3>
    </div>
  );
}

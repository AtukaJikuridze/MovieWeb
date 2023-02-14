import React from "react";
import "./LeftsideNav.css";
import { useNavigate } from "react-router-dom";
interface LeftNavLinkInterface {
  icon: any;
  title: string;
  onClick?: any;
}
export default function LeftNavLink(props: LeftNavLinkInterface) {
  return (
    <div className="LeftNavLink">
      {<props.icon />}
      <h3 onClick={props.onClick}>{props.title}</h3>
    </div>
  );
}

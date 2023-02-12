import React from "react";
import "./LeftsideNav.css";
interface LeftNavLinkInterface {
  icon: any;
  title: string;
}
export default function LeftNavLink(props: LeftNavLinkInterface) {
  return (
    <div className="LeftNavLink">
      {<props.icon />}
      <h3>{props.title}</h3>
    </div>
  );
}

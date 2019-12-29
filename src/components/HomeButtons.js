import React from "react";
import { EachButton } from "./EachButton";

export const HomeButtons = () => {
  return (
    <div className="h-buttons">
      <EachButton label="Projects" num="1" />
      <EachButton label="About" num="2" />
      <EachButton label="Contact" num="3" />
    </div>
  );
};

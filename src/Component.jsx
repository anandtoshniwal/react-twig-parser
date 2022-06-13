import React from "react";
import IndexView from "./twig/abc.twig";

var Component = () => {
  const html = IndexView({ variable1: "value" });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
export default Component;

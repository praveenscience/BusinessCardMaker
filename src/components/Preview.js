import React, { createRef } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG
} from "react-component-export-image";
import BusinessCard from "./BusinessCard";

const Preview = ({ Values }) => {
  const bcRef = createRef();
  const handleDownload = e => {
    e.preventDefault();
    const downloadAs = {
      exportComponentAsJPEG,
      exportComponentAsPDF,
      exportComponentAsPNG
    };
    downloadAs[
      "exportComponentAs" + e.target.innerHTML.trim().replace("Save as ", "")
    ](bcRef, Values.Name);
  };
  return (
    <section className="Preview">
      <h2>Preview Pane</h2>
      <div className="Preview-Wrapper" ref={bcRef}>
        <BusinessCard Values={Values} />
      </div>
      <div className="Preview-Actions">
        <button onClick={handleDownload}>Save as PDF</button>
        <button onClick={handleDownload}>Save as PNG</button>
        <button onClick={handleDownload}>Save as JPEG</button>
      </div>
    </section>
  );
};

export default Preview;

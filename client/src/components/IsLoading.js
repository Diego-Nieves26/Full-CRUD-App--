import "../styles/isLoading.css";
import React from "react";

const IsLoading = () => {
  return (
    <div className="overlay">
      <div className="lds__dual__ring"></div>
    </div>
  );
};

export default IsLoading;

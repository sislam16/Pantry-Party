import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

const DashCard = (src, link, component_name) => {
  return (
    <div className="col s6 m6">
      <div className="card">
        <div className="card-image">
          <img height="290px" src={src.src} />
        </div>
        <div className="card-action">
          <Link to={src.link}>{src.component_name}</Link>
        </div>
      </div>
    </div>
  );
};

export default DashCard;

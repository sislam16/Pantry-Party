import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

const DashCard = (src) => {
  return (
    <div class="col s6 m6">
      <div class="card">
        <div class="card-image">
          <img
            height="290px"
            src = {src.src}
          />
        </div>
        <div class="card-action">
          <Link to='recipes/random'>
            Random Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashCard

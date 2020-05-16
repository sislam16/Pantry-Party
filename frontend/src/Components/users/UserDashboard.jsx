import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Dashcard from "./DashCard";

const UserDashboard = ({ user }) => {
  console.log(user);

  const [apiRecipes, setApiRecipe] = useState([]);
  const [fetched, setFetched] = useState(false);
  //   const [cbrecipeArr, setCbRecipeArr] = useState([]);
  //   const [eventsArr, setEventsArr] = useState([]);

  //similar to component did mount
  useEffect(() => {
    const fetchRecipes = async () => {
      const resultArr = [];
      while (resultArr.length < 4) {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        resultArr.push(data.meals[0]);
      }
      setApiRecipe(resultArr);
    };

    fetchRecipes();
  }, []);

  //   const getEvents = async () => {
  //     let user_id = user.id;
  //     // console.log(user_id)
  //     try {
  //       let loggedinUserEvents = await axios.get(`/events/user/${user_id}`);
  //       console.log(loggedinUserEvents);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <div className="container">
        <div class="row">
          <Dashcard src="https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png"></Dashcard>
          <Dashcard src="https://t3.ftcdn.net/jpg/00/87/64/82/240_F_87648201_jO23xggA2W2EjCdfqCTqliX9typRG9rp.jpg"></Dashcard>
        </div>
        <div class="row">
          <Dashcard src="https://media3.s-nbcnews.com/i/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.jpg"></Dashcard>
          <Dashcard src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F-0001%2F11%2F30%2Fcooking-saucepan-GettyImages-562452049.jpg"></Dashcard>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

import React from "react";
import SuggestedRecipeCard from "../SuggestedRecipeCard";

const RandomRecipes = ({ user, apiRecipes }) => {
  console.log(apiRecipes);

  const suggestedRecipeThumbnail = apiRecipes.map((el) => (
    <SuggestedRecipeCard
      id={el.idMeal}
      imgSrc={el.strMealThumb}
      recipeName={el.strMeal}
      alt="db recipe"
    >
      {el}
    </SuggestedRecipeCard>
  ));
  return (
    <>
      <div className="dashboard-suggestions">{suggestedRecipeThumbnail}</div>
    </>
  );
};

export default RandomRecipes;

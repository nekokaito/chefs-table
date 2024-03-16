/* eslint-disable react/prop-types */
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Card = ({recipe, wantCook}) => {

    const {recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} = recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img   src={recipe_image} alt="" className="rounded-xl  min-h-36" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="text-sm text-gray-400">{short_description}</p>
    <hr className="border-gray-200 w-full my-1" />
    <h4 className="text-sm font-bold">Ingredients: {ingredients.length}</h4>
    <div className=" ml-4">
    <ul className="text-sm text-gray-400 list-disc">
    {ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))}
    </ul>
    </div>
    <hr className="border-gray-200 w-full my-1" />
    <div className="flex  justify-between text-sm text-gray-400">
      <div className="flex items-center gap-1"><CiClock2 /> <p>{preparing_time}</p></div>
      <div className="flex items-center gap-1"> <FaFire /><p>{calories}</p></div>
    </div>
    <div className="card-actions">
      <button onClick={()=> wantCook(recipe)} className="btn btn-primary rounded-3xl">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;
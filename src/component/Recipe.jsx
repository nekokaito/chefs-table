import { useEffect, useState } from "react";
import Card from "./tools/Card";


const Recipe = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRecipes(data);
                } else {
                    console.error('Data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])
    const size = recipes.length;
    return (
        <section className="container mx-auto mt-12">
            <h1 className="text-center text-4xl font-bold">Our Recipes</h1>
            <p className="text-center mt-4 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget
urna volutpat curabitur elementum mauris aenean neque. </p>

          <div className="flex justify-center">
             
             {/* Side A */}
             <div className="grid grid-cols-2 gap-6">
              {
                recipes.map(recipe => <Card key={recipe.id} size={size} recipe={recipe}></Card>)
              }
             </div>

            {/* Side B */}
            <div></div>
         </div>

        </section>
    );
};

export default Recipe;
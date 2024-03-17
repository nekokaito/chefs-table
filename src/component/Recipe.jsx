import { useEffect, useState } from "react";
import Card from "./tools/Card";
import SideBar from "./tools/SideBar";


const Recipe = ({wantCook, dishes, setDishes}) => {
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
            <p className="text-center mt-4 text-sm text-gray-400">Indulge in gooey, fudgy brownies swirled with decadent salted caramel. Each bite is a symphony of sweet and salty flavors, guaranteed to satisfy your cravings and leave you wanting more. </p>

          <div className="flex gap-4 justify-around mt-4 lg:mt-14" style={{background: 'url("")'}}>
             
             {/* Side A */}
             <div className="grid grid-cols-2 gap-6">
             {
                recipes.map(recipe => <Card wantCook={wantCook} key={recipe.id} size={size} recipe={recipe}></Card>)
              }
             </div>

            {/* Side B */}
            <div className="my-4">
                <SideBar setDishes={setDishes} dishes={dishes}></SideBar>
            </div>
         </div>

        </section>
    );
};

export default Recipe;
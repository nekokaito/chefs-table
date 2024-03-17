/* eslint-disable react/prop-types */
import { useState } from "react";
import Cooking from "./Cooking";
import Items from "./Items";

const SideBar = ({dishes, setDishes}) => {
    const [cooking, setCooking] = useState([]);
    const sendToCook = (dish) => {
      
      const newCook = [...cooking,dish];
      
     const remain = dishes.filter((item)=> item.id !== dish.id) 
      setDishes(remain);
      setCooking(newCook);
      
    }

    return (
        <div>
            <div className="card p-4 w-[600px] h-auto glass">
            <div className="overflow-x-auto">
                <h3 className="font-bold text-2xl text-center my-5">Want to cook: {dishes.length}</h3>
                <div className="flex justify-center "><hr className="border-gray-200 w-3/4 my-1" /></div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        dishes.map((dish,i=1) => <Items sendToCook ={sendToCook} key={dish.id} i={i+1} dish={dish}></Items>)
      }
    </tbody>
  </table>
  <h3 className="font-bold text-2xl text-center my-5">Currently Cooking: </h3>
  <div className="flex justify-center "><hr className="border-gray-200 w-3/4 my-1" /></div>
  
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody>
   {
        cooking.map((cook,i=1) => <Cooking key={cook.id} i={i+1} cook={cook}></Cooking>)
      } 
     
    </tbody>
  </table>
  

</div>
  
  
</div>
        </div>
    );
};

export default SideBar;
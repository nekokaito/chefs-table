import Items from "./Items";

const SideBar = ({dishes}) => {
    return (
        <div>
            <div className="card p-4 w-[600px] glass">
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
        dishes.map((dish,i=1) => <Items key={dish.id} i={i+1} dish={dish}></Items>)
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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
  

</div>
  
  
</div>
        </div>
    );
};

export default SideBar;


const Items = ({dish, i, sendToCook}) => {
    const {recipe_name, preparing_time, calories} = dish;
    
    
    return (
        <tr>
        <th>{i}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button onClick={() => sendToCook(dish)} className="btn rounded-3xl btn-primary">Preparing</button></td>
      </tr>
    );
};

export default Items;
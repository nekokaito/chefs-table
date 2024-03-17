

const Cooking = ({cook,i}) => {
    
    const {recipe_name, preparing_time, calories} = cook;

    return (
        <tr>
        <th>{i}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
    </tr>
    );
};

export default Cooking;
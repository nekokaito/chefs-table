

const Cooking = ({dish, i}) => {
    const {recipe_name, preparing_time, calories} = dish;

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
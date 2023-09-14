import { plantList } from '../datas/plantList.js'

function ShoppingList(){
    // v1
    // const categories = plantList.reduce(
    //     (acc, plant) => {
    //         if(!acc.includes(plant.category)){
    //             acc.push(plant.category);
    //         }

    //         return acc;
    //     }, []
    // );

    const categories = plantList.reduce(
        (acc, plant) =>
            !acc.includes(plant.category) ? acc.concat(plant.category) : acc
        ,[]);

    return(
        <div>
            <ul>
                {categories.map((cat, index) => (
                    <li key={`${cat}-${index}`}>{ cat } </li>
                ))}
            </ul>

            <ul>
                {plantList.map((plant) => (
                    <li key={`${plant.id}`}>{ plant.name }</li>
                ))}
            </ul>
        </div>
    )
}



export default ShoppingList;

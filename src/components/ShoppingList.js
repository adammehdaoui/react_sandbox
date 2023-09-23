import { plantList } from '../datas/plantList.js'
import PlantItem from './PlantItem.js'

function ShoppingList(){
    const categories = plantList.reduce(
        (acc, plant) =>
            !acc.includes(plant.category) ? acc.concat(plant.category) : acc
        ,[]);

    return(
        <div>
            <ul>
                {categories.map((cat, index) => (
                    <li key={`${cat}-${index}`}>{ cat }</li>
                ))}
            </ul>

            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <PlantItem 
                        key={plant.id}  // Assurez-vous d'ajouter une clé unique pour chaque élément généré
                        name={plant.name}
                        water={plant.water}
                        light={plant.light}
                    />
                ))}
            </ul>
        </div>
    )
}



export default ShoppingList;


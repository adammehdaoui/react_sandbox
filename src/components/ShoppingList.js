import { plantList } from '../datas/plantList.js'
import PlantItem from './PlantItem.js'
import '../styles/ShoppingList.css'
import Categories from './Categories.js'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }){
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (accumulateur, plant) =>
            !accumulateur.includes(plant.category) ? accumulateur.concat(plant.category) : accumulateur
        ,[]);

    return(
        <div className='lmj-shopping-list'>
            <Categories 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory} 
                categories={categories}
            />

            <ul className='lmj-plant-list'>
                {plantList.map((plant) => 
                    !activeCategory || activeCategory === plant.category ? (
                    
                        <div id={plant.id}>
                            <PlantItem 
                                key={plant.id}
                                name={plant.name}
                                water={plant.water}
                                light={plant.light}
                                cover={plant.cover}
                            />
                            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                        </div>

                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList


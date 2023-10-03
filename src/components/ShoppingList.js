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

    function addToCart(name, price){
        const plantInCart = cart.find((plant) => plant.name === name);

        if(plantInCart){
            const otherPlants = cart.filter((plant) => plant.name !== name);

            updateCart([
                ...otherPlants,
                { name, price, amount: plantInCart.amount + 1}
            ])
        } else {
            updateCart([
                ...cart,
                { name, price, amount: 1}
            ])
        }
    }

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
                    
                        <div key={plant.id}>
                            <PlantItem 
                                key={plant.id}
                                name={plant.name}
                                water={plant.water}
                                light={plant.light}
                                cover={plant.cover}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                        </div>

                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList


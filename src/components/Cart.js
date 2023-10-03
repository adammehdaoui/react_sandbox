import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (accumulateur, plant) => accumulateur += plant.amount * plant.price,
        0);
 
    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-close-button' onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            <h2>Panier</h2>
                {cart.length > 0 ? (    <div>
                                            <ul>
                                            {cart.map((plant, index) => (
                                                <li key={`${plant.name}-${index}`}>{ plant.name } { plant.price }$ x { plant.amount}</li>
                                            ))}
                                            </ul>
                                            <div> 
                                                Total : { total }$
                                            </div>
                                        </div>
                                ) : (
                                        <div>Votre panier est vide</div>
                                )
                }
            <br></br>
            <button className='lmj-cart-empty-button' onClick={() => updateCart([])}>
                Vider
            </button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button 
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart
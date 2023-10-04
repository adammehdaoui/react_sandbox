import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-close-button' onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            <h2>Panier</h2>
                {cart.length > 0 ? (    <div>
                                            <ul>
                                                {cart.map((plant, index) => (
                                                    <li key={`${plant.name}-${index}`}>{ plant.name } { plant.price }€ x { plant.amount}</li>
                                                ))}
                                            </ul>
                                            <div> 
                                                Total : { total }€
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
import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const monsteraPrice = 8
    //const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-close-button' onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            <h2>Panier</h2>
            <div>Monstera : {monsteraPrice}€</div>
            <button className='lmj-cart-add-button' onClick={() => updateCart(cart + 1)}>
                Ajouter
            </button>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button className='lmj-cart-empty-button' onClick={() => updateCart(0)}>
                Vider
            </button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button 
                className='lmj-cart-toggle-button' 
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart
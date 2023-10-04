import Banner from './Banner'
import Recommendation from './Recommendation'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useState, useEffect } from 'react'

function App() {
	const localStorageFound = localStorage.getItem('cart');
	const [cart, updateCart] = useState(localStorageFound ? JSON.parse(localStorageFound) : []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<Recommendation />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
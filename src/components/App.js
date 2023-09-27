import Banner from './Banner'
import Recommendation from './Recommendation'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart />
				<Recommendation />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App

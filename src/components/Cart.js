import '../styles/Cart.css'

function Cart() {
    const title = 'Mon panier'
    const tulipe_price = 5;
    const rose_price = 2;
    const marguerite_price = 8;

    return (
        <div className='lmj-cart'>
            <h2>{title}</h2>

            <ul>
                <li>Tulipes : {tulipe_price} euros</li>
                <li>Rose : {rose_price} euros</li>
                <li>Marguerites : {marguerite_price} euros</li>
            </ul>

            <p>Total : {tulipe_price + rose_price + marguerite_price}</p>
        </div>
    )
}

export default Cart;
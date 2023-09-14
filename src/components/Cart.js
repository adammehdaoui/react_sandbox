function Cart() {
    const title = 'Mon panier'
    const tulipe_price = 5;
    const rose_price = 2;
    const marguerite_price = 8;

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                Tulipes : {tulipe_price} euros
            </ul>
            <ul>
                Rose : {rose_price} euros
            </ul>
            <ul>
                Marguerites : {marguerite_price} euros
            </ul>
            <ul> 
                Total : {tulipe_price + rose_price + marguerite_price}
            </ul>
        </div>
    )
}
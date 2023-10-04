import '../styles/Categories.css'

function Categories({ activeCategory, setActiveCategory, categories }){
    return(
        <div className='lmj-categories'>
            <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option key ={'default'} value=''>---</option>
                {categories.map((cat, index) => (
                    <option key={`${cat}-${index}`}>{ cat }</option>
                ))}
            </select>

            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories
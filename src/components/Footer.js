import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('');

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
        }
    }  

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <div>
                <input
                    placeholder = 'Votre e-mail ici'
                    value = {inputValue}
                    onChange = {(e) => setInputValue(e.target.value)}
                    onBlur={(e) => handleBlur(e.target.value)}
                />
            </div>
		</footer>
	)
}

export default Footer
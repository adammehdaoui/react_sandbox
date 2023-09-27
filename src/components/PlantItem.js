import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({id, name, water, light, cover}) {
	return (
		<li key={id} className='lmj-plant-item' onClick={(e) => handleClick(e)}>
            <img className='lmj-plant-item-cover' src={cover} alt={name}/>
            {name}
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
		</li>
	)
}   

export default PlantItem
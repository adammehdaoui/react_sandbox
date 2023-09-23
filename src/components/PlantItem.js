import CareScale from './CareScale'

// function handleClick(plantName) {
//     console.log(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

function PlantItem({id, name, water, light}) {
	return (
		<li key={id} className='lmj-plant-item' onClick={(e) => handleClick(e)}>
            <p>{name}</p>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
		</li>
	)
}   

export default PlantItem;   
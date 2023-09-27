import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function requirementsAlert(scaleValue, careType){
    let displayedAlert = 'Cette plante requiert ';
    const displayedType = careType === 'water' ? "d'arrosage" : 'de lumière';

    if(scaleValue <= 1){
        displayedAlert += 'peu ';
    } else if(scaleValue >= 3){
        displayedAlert += 'beaucoup ';
    } else {
        displayedAlert += 'modérement ';
    }

    displayedAlert += displayedType;

    alert(displayedAlert);
}

function CareScale(props) {
    const scaleValue = props.scaleValue
    const careType = props.careType;
    const scaleType = props.careType === 'water' ? water : sun;
    const range = [1, 2, 3]

    return (
        <div onClick={
            () => scaleType === 'water' || 'light' ? requirementsAlert(scaleValue, careType) : null
        }>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}><img alt={ scaleType } src={ scaleType } /></span> : null
            )}
        </div>
    )
}

export default CareScale
